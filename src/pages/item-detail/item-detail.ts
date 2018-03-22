import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams, AlertController } from 'ionic-angular';

import { Media, MediaObject } from '@ionic-native/media';
import { FilePath } from '@ionic-native/file-path';

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



  constructor(
    public navCtrl: NavController,
    private media: Media, 
    private musicControls: MusicControls, 
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private translateService: TranslateService,
    private filePath: FilePath,
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

        // MusicControls requires the absolute path to the cover image. Resolved with the FilePath plugin.

        this.filePath.resolveNativePath('assets/img/icon.png')
          .then((path) => {
            this.imgNativePath = path;
            alert(this.imgNativePath);
        })
          .catch(err => alert(err));


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
        // Listen to the Music Control plugin events:
        this.musicControls.listen();
      });
  }

  presentAlert() {

    let alert = this.alertCtrl.create({
      title: this.alertTitle,
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
      cover       : this.imgNativePath,
      dismissable : false,
      hasPrev     : false,
      hasNext     : false,
      hasClose    : true
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
    if (this.audioIsLoaded) {
      this.radiostream.stop();
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

    return localisedLanguage;
  }

}


// TROUBLESHOOTING AND FIXES:
// https://stackoverflow.com/questions/40815183/ionic-2-cordova-is-not-available-make-sure-to-include-cordova-js-or-run-in-a-d
