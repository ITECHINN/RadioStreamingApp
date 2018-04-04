import { Injectable } from '@angular/core';
import { MusicControls } from '@ionic-native/music-controls';
import { Media, MediaObject } from '@ionic-native/media';
import { Platform, LoadingController, AlertController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Settings } from '../../providers/providers';


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

  // Settings
  options: any;
  audioStreamVolume: any;

  constructor(
    media: Media,
    private musicControls: MusicControls,
    private translateService: TranslateService,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    platform: Platform,
    public settings: Settings
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
  }

  getAudioStreamVolume(){
    // Refresh the setting for the AudioStream Volume Boosting.
    this.settings.load().then(() => {
      this.options = this.settings.allSettings;
      this.audioStreamVolume = this.options.option1;
    });
    return (this.audioStreamVolume/100);
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

  getAudioIsPlayingStatus() {
    return this.audioIsPlaying;
  }

  getAudioIsLoadedStatus() {
    return this.audioIsLoaded;
  }

  createMusicControls() {
    // MusicControls image must be in the www-folder of the app (issues with paths in the plugin.)
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
  }

  // PLAY the RadioStream
  playMedia() {
    // If audio has not been loaded yet, show a loading indicator.
    if (!this.audioIsLoaded) {
      this.presentLoadingIndicator();
    }

    // Create the Music Control interface
    this.createMusicControls();

    // Start the audio playing
    this.audioMedia.play();
    

    // Checks that no error occurs during the connection.
    this.audioMedia.onError.subscribe(error => {
      this.audioIsLoaded = false;
      this.audioIsPlaying = false;
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
     this.audioMedia.setVolume(this.getAudioStreamVolume());
     
      // if (status == 2 && !this.audioIsLoaded) {
      //   this.audioIsLoaded = true;
      //   this.dismissLoadingIndicator(); 
      // }

      if (status == 2) {
        this.audioIsLoaded = true;
        this.dismissLoadingIndicator(); 
        this.audioIsPlaying = true;
        this.musicControls.updateIsPlaying(this.audioIsPlaying);
      }
      if (status == 3) {
        this.audioIsPlaying = false;
        this.musicControls.updateIsPlaying(this.audioIsPlaying);
      }
      // Loading indicator must be removed if the audio stream is stopped and resource released.
      if (status == 4) {
        this.audioIsLoaded = false;
        this.audioIsPlaying = false;
        this.dismissLoadingIndicator();
        this.musicControls.destroy();
      }
    });
  }

  // PAUSE the RadioStream
  pauseMedia() {
    if (this.audioIsPlaying == true) {
      this.audioMedia.pause();
      this.audioIsPlaying = false;
      this.musicControls.updateIsPlaying(this.audioIsPlaying);
    }
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

  forceDismissLoadingIndicator() {
    this.loading.dismiss();  
  }

  presentAlert() {

    let connAlert = this.alertCtrl.create({
      title:`<img src="assets/img/oops.png" width="25px" height="25px" padding="10px"> ` + this.alertTitle,
      subTitle: this.alertSubTitle,
      message : this.alertMessage,
      enableBackdropDismiss: true
    })
    connAlert.present();
    this.forceDismissLoadingIndicator();
    this.stopMedia();
  }
}
