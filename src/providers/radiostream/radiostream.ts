import { Injectable } from '@angular/core';
import { MusicControls } from '@ionic-native/music-controls';
import { Media, MediaObject } from '@ionic-native/media';
import { Platform, LoadingController, AlertController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { BackgroundMode } from '@ionic-native/background-mode';

// This service will allow other pages to easily access the actived radio's audio stream.
@Injectable()
export class RadioStreamService {

  audioMedia: MediaObject;
  url: String;
  loading: any;
  stationName: any = "";

  // Audio status trackers
  audioIsPlaying: boolean;
  audioIsLoaded: boolean;

  // Strings for the Connection Alert pop-up.
  alertTitle: string;
  alertSubTitle: string;
  alertMessage: string;
  bufferingContent: string;

  constructor(
    media: Media,
    private musicControls: MusicControls,
    private translateService: TranslateService,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    platform: Platform,
    private backgroundMode: BackgroundMode
  ) {

      // Prepare the translations for connection alert
      this.translateService.get('ALERT_CONNECTION_TITLE').subscribe(
        translatedString => {
          this.alertTitle = translatedString;
        }
      )
      this.translateService.get('ALERT_CONNECTION_SUBTITLE').subscribe(
        translatedString => {
          this.alertSubTitle = translatedString;
        }
      )
      this.translateService.get('ALERT_CONNECTION_MESSAGE').subscribe(
        translatedString => {
          this.alertMessage = translatedString;
        }
      )
      this.translateService.get('PLAY_BUFFERING').subscribe(
        translatedString => {
          this.bufferingContent = "<p>" + translatedString + "</p>"
        }
      )     
    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      console.log("Platform is ready for MusicControls!");

        this.musicControls.subscribe().subscribe(event => {

        const action = JSON.parse(event).message;

        switch(action) {
          case 'music-controls-play':
            this.playMedia();
            break;
          case 'music-controls-pause':
            this.pauseMedia();
            break;
          case 'music-controls-destroy':
            this.stopMedia();
            break;
          default:
            this.stopMedia();
            break;
        }
        this.backgroundMode.overrideBackButton()
        this.backgroundMode.enable();
      })
      // Listen to interaction with the Music Controls
      this.musicControls.listen();
    })
  }

  // Set Media Object to this RadioStream
  setMedia(mediaObject) {
    this.audioMedia = mediaObject;
    this.audioIsPlaying = false;
    // The media is set, but the audio has not loaded yet.
    this.audioIsLoaded = false;
  }

  setMusicControlStation(stationString) {
    this.stationName = stationString;
  }

  getMusicControlStation() {
    return this.stationName;
  }
  // Get the Media Object from this RadioStream
  getMedia() {
    return this.audioMedia;
  }

  getAudioPlayStatus() {
    return this.audioIsPlaying;
  }

  getAudioLoadStatus() {
    return this.audioIsLoaded;
  }




  // PLAY the RadioStream
  playMedia() {

    // Set the details to the Music Control
    this.musicControls.create({
      track       : 'StriimiRadio',
      artist      : this.stationName,
      cover       : 'music_control_img.png',
      dismissable : true,
      hasPrev     : false,
      hasNext     : false,
      hasClose    : false
    })

    // If audio has not been loaded yet, show a loading indicator.
    if (!this.audioIsLoaded) {
      this.presentLoadingIndicator();
    }

    this.audioMedia.play();
    this.audioIsPlaying = true;

    // Checks that no error occurs during the connection. Only show errors when audio has not been loaded.
    this.audioMedia.onError.subscribe(error => {
      this.dismissLoadingIndicator();
      this.presentAlert();
    }) 
    
    // When object's status is finished loading, dismiss the loading indicator.
    this.audioMedia.onStatusUpdate.subscribe(status => {
      console.log("RadioStream status update: " + status);
      /* MediaObject --> onStatusUpdate: 
      (1) = loading
      (2) = playing
      (3) = paused 
      (4) = stopped / released
      */
      if (status == 2 && !this.audioIsLoaded) {
        this.audioIsLoaded = true;
        this.dismissLoadingIndicator();  
      }
      // Loading indicator must be removed if the audio stream is stopped and resource released.
      if (status == 4) {
        this.audioIsLoaded = false;
        this.audioIsPlaying = false;
        this.dismissLoadingIndicator();
      }
    });

    this.musicControls.updateIsPlaying(this.audioIsPlaying);

  }

  // Call a STOP function on the RadioStream
  stopMedia() {
    /* 
      release()  ==>   Releases the underlying operating system’s audio resources. 
      This is particularly important for Android, since there are a finite amount of 
      OpenCore instances for media playback. Applications should call the release function 
      for any Media resource that is no longer needed.
    */
   if (this.audioIsLoaded) {
    this.audioMedia.release();
    this.audioIsPlaying = false;
    this.audioIsLoaded = false;
    this.musicControls.updateIsPlaying(this.audioIsPlaying);
    this.musicControls.destroy();
   }
  }



  // PAUSE the RadioStream
  pauseMedia() {
    this.audioMedia.pause();
    this.audioIsLoaded = true;
    this.audioIsPlaying = false;
    this.musicControls.updateIsPlaying(this.audioIsPlaying);
  }

  presentLoadingIndicator() {
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: this.bufferingContent
    });
    this.loading.present();
  }

  dismissLoadingIndicator() {
    if(this.loading && this.audioIsLoaded){
      this.loading.dismiss();
    }
  } 

  presentAlert() {

    // MusicControls image must be in the www-folder of the app (issues with paths in the plugin.)
    let alert = this.alertCtrl.create({
      title:`<img src="assets/img/oops.png" width="25px" height="25px" padding="10px"> ` + this.alertTitle,
      subTitle: this.alertSubTitle,
      message : this.alertMessage,
      enableBackdropDismiss: true
    })
    alert.present();
  }
}
