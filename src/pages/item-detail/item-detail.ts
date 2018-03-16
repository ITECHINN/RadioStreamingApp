import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams } from 'ionic-angular';

import { Media, MediaObject } from '@ionic-native/media';
import { FilePath } from '@ionic-native/file-path';
import { MusicControls } from '@ionic-native/music-controls';

import { Items } from '../../providers/providers';
import { Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {

  item: any;
  imgPath: any;
  radiostream: MediaObject;
  audioIsPlaying: boolean;
  audioIsLoaded: boolean;
  loading: any;
  
  constructor(
    public navCtrl: NavController,
    private media: Media, 
    private musicControls: MusicControls, 
    private filePath: FilePath,
    public loadingCtrl: LoadingController,
    navParams: NavParams, 
    items: Items, 
    platform: Platform
  )
  {
      this.item = navParams.get('item') || items.defaultItem;

      platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
        console.log("Platform is ready!");
  
        this.radiostream = this.media.create(this.item.streamURL);
        

        console.log("IMPLEMENT ERROR HANDLING WHEN NETWORK IS NOT AVAILABLE  (IN THE PLAY FUNCTION????)");




        this.radiostream.onError.subscribe(error => {
          alert("ERROR: " + error);
        })

        // this.radiostream.onSuccess.subscribe( () => {
        //   alert("SUCCESS!");
        // })

        // MusicControls requires the absolute path to the cover image. Resolved with the FilePath plugin.
        this.filePath.resolveNativePath('assets/img/music_control_img.png')
          .then(filePath => {
            this.imgPath = filePath;
            console.log(filePath)
          })
          .catch(err => {
            console.log(filePath);
            console.log(err)
          });

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
    this.radiostream.play();
    this.audioIsPlaying = true;
    this.musicControls.create({
      track       : 'StriimiRadio',
      artist      : this.item.station,
      cover       : this.imgPath,
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
 

}


// TROUBLESHOOTING AND FIXES:
// https://stackoverflow.com/questions/40815183/ionic-2-cordova-is-not-available-make-sure-to-include-cordova-js-or-run-in-a-d
