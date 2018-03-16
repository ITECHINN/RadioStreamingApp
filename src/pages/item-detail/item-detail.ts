import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import { Media, MediaObject } from '@ionic-native/media';
import { FilePath } from '@ionic-native/file-path';
import { MusicControls } from '@ionic-native/music-controls';
import { BackgroundMode } from '@ionic-native/background-mode';

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
  
  constructor(
    public navCtrl: NavController, 
    navParams: NavParams, 
    items: Items, 
    private alertCtrl: AlertController, 
    platform: Platform, 
    private media: Media, 
    private musicControls: MusicControls, 
    private filePath: FilePath, 
    private backgroundMode: BackgroundMode
  ) {

      this.item = navParams.get('item') || items.defaultItem;

      platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
        console.log("Platform is ready!");
  
        this.radiostream = this.media.create(this.item.streamURL);

        console.log("IMPLEMENT ERROR HANDLING WHEN NETWORK IS NOT AVAILABLE");
  


        // Listen to plugin events:


        this.radiostream.onError.subscribe(error => {
          alert("ERROR: " + error);
        })

        // this.radiostream.onSuccess.subscribe( () => {
        //   alert("SUCCESS!");
        // })

        // MusicControls requires the absolute path to the cover image. Resolved with the FilePath plugin.
        this.imgPath = this.filePath.resolveNativePath('assets/img/music_control_img.png')
          .then(filePath => console.log(filePath))
          .catch(err => console.log(err));

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
              break;
          }   
        })
      
        this.musicControls.listen();

        //this.radiostream.setVolume
        
      });

  }

  ionViewDidLeave() {
    this.stopAudioStream();
  }

  playAudioStream() {
  	this.radiostream.play();
    this.audioIsLoaded = true;
    this.audioIsPlaying = true;
    this.musicControls.create({
      track       : 'StriimiRadio',
      artist      : this.item.station,
      cover       : this.imgPath,
      dismissable : true,
      hasPrev     : false,
      hasNext     : false,
      hasClose    : true,
      ticker      : this.item.station
    })
    this.musicControls.updateIsPlaying(this.audioIsPlaying);
  }

  pauseAudioStream() {
  	this.radiostream.pause();
    this.audioIsLoaded = true;
    this.audioIsPlaying = false;
    this.musicControls.updateIsPlaying(this.audioIsPlaying);
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
    }
  }
 

}


// TROUBLESHOOTING AND FIXES:
// https://stackoverflow.com/questions/40815183/ionic-2-cordova-is-not-available-make-sure-to-include-cordova-js-or-run-in-a-d
