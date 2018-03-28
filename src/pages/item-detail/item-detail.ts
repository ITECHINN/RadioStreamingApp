import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams, AlertController } from 'ionic-angular';

import { Media, MediaObject } from '@ionic-native/media';

import { MusicControls } from '@ionic-native/music-controls';

import { TranslateService } from '@ngx-translate/core';

import { Items } from '../../providers/providers';
import { Platform } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {

  item: any;
  imgNativePath: any;
  radiostream: MediaObject;
  audioIsPlaying: boolean;
  audioIsLoaded: boolean;
  loading: any;
  buttonIconName: any;
  alertTitle: string;
  alertSubTitle: string;
  alertMessage: string;
  audioMuted: boolean = false;

  constructor(
    public navCtrl: NavController,
    private media: Media, 
    private musicControls: MusicControls, 
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private translateService: TranslateService,
    navParams: NavParams, 
    items: Items, 
    platform: Platform
  )
  {
      this.item = navParams.get('item') || items.defaultItem;
      // On start-up the play icon may be shown.
      this.buttonIconName = "play";

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

      platform.ready().then(() => {

        // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
        console.log("Platform is ready!");
  
        this.radiostream = this.media.create(this.item.streamURL);       

        // ADD A SMALL DELAY HERE; TO AVOID ERROR WHEN JUST OPENING THE VIEW AND PRESSING A BUTTON!


          this.musicControls.subscribe().subscribe(event => {
          const action = JSON.parse(event).message;
          console.log(action);
          switch(action) {
            case 'music-controls-play':
              this.playAudioStream();
              break;
            case 'music-controls-pause':
              this.pauseAudioStream();
              break;
            case 'music-controls-destroy':
              this.stopAudioStream();
              break;
            default:
              this.stopAudioStream();
              break;
          }   
        })
        this.musicControls.listen();
      })
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
  presentLoadingIndicator() {
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent'
    });
    this.loading.present();
  }

  dismissLoadingIndicator() {
    this.loading.dismiss();
  }

  ionViewDidLeave() {
    this.stopAudioStream();
  }

  playAudioStream() {
    // If audio has not been loaded yet, show a loading indicator.
    if (!this.audioIsLoaded) {
      this.presentLoadingIndicator();
    }

    // Checks that no error occurs during the connection. Only show errors when audio has not been loaded.
    this.radiostream.onError.subscribe(error => {
      this.dismissLoadingIndicator();
      this.presentAlert();
      this.buttonIconName = "play";
    })  

    this.radiostream.play();
    this.audioIsPlaying = true;
    this.musicControls.create({
      track       : 'StriimiRadio',
      artist      : this.item.station,
      cover       : 'musiccontrollogo.png',
      dismissable : true,
      hasPrev     : false,
      hasNext     : false,
      hasClose    : false
    })
    this.musicControls.updateIsPlaying(this.audioIsPlaying);
    // When object's status is finished loading, dismiss the loading indicator.
    this.radiostream.onStatusUpdate.subscribe(status => {
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
        this.dismissLoadingIndicator();
      }
    });
  }

  pauseAudioStream() {
    // Do not pause the stream if audio is NOT playing (results in error)
    if (this.audioIsPlaying) {
      this.radiostream.pause();
      this.audioIsLoaded = true;
      this.audioIsPlaying = false;
      this.musicControls.updateIsPlaying(this.audioIsPlaying);
    }
  }

  changeAudioStreamAction() {
    if (this.buttonIconName == "play") {
        // Change the icon of the media button
        this.buttonIconName = "pause";
        this.playAudioStream();
    }
    else {
      // Change the icon of the media button
      this.buttonIconName = "play";
      this.pauseAudioStream();
    }
  }

  stopAudioStream() {
    /* Releases the underlying operating system’s audio resources. 
      This is particularly important for Android, since there are a finite amount of 
      OpenCore instances for media playback. Applications should call the release function 
      for any Media resource that is no longer needed.
    */
    this.radiostream.release();
    this.audioIsLoaded = false;
    this.audioIsPlaying = false;
    this.musicControls.updateIsPlaying(this.audioIsPlaying);
    this.musicControls.destroy();
  }

  getLocalisedLanguage(item) {

    var localisedLanguage: string;

    if (item.language == 'ENG') {
      this.translateService.get('DETAILS_STATION_LANG_ENG').subscribe(
        translatedString => { localisedLanguage = translatedString });
    }
    if (item.language == 'FIN') {
      this.translateService.get('DETAILS_STATION_LANG_FIN').subscribe(
        translatedString => { localisedLanguage = translatedString });         
    }
    if (item.language == 'SWE') {
      this.translateService.get('DETAILS_STATION_LANG_SWE').subscribe(
        translatedString => { localisedLanguage = translatedString });
    }
    if (item.language == 'RUS') {
      this.translateService.get('DETAILS_STATION_LANG_RUS').subscribe(
        translatedString => { localisedLanguage = translatedString });
    }
    if (item.language == 'EST') {
      this.translateService.get('DETAILS_STATION_LANG_EST').subscribe(
        translatedString => { localisedLanguage = translatedString });
    }
    if (item.language == 'SAM') {
      this.translateService.get('DETAILS_STATION_LANG_SAM').subscribe(
        translatedString => { localisedLanguage = translatedString });
    }

    return localisedLanguage;
  }

}




// TROUBLESHOOTING AND FIXES:
// https://stackoverflow.com/questions/40815183/ionic-2-cordova-is-not-available-make-sure-to-include-cordova-js-or-run-in-a-d
