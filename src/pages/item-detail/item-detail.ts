import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Platform} from 'ionic-angular';

import { Media, MediaObject } from '@ionic-native/media';
import { RadioStreamService } from '../../providers/radiostream/radiostream';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TranslateService } from '@ngx-translate/core';

import { Items } from '../../providers/providers';

import { BackgroundMode } from '@ionic-native/background-mode';

import { MusicControls } from '@ionic-native/music-controls';

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
  buttonIconName: any;
  rsService: RadioStreamService;

  constructor(
    public navCtrl: NavController,
    private media: Media, 
    private translateService: TranslateService,
    navParams: NavParams, 
    items: Items,
    radioStreamService: RadioStreamService,
    private platform: Platform,
    private iab: InAppBrowser,
    private musicControls: MusicControls,
    private backgroundMode: BackgroundMode,
    public events: Events,
    private zone: NgZone
  )
  {
      this.item = navParams.get('item') || items.defaultItem;
      // On start-up the play icon may be shown.
      this.buttonIconName = "play";

      this.events.subscribe('updateScreen', () => {
        this.zone.run( () => {
          console.log('Refreshing the screen to correctly show the Play/Pause media icons.');
        });
      });

      platform.ready().then(() => {

        console.log("Platform is ready for Media Creation!");
        // Prepare the Media Object for streaming
        this.radiostream = this.media.create(this.item.streamURL);

        this.rsService = radioStreamService;

        // If the opened Station item page is the currently playing one, show a Pause button!
        if (this.rsService.getMusicControlStation() == this.item.station && this.rsService.getAudioIsPlayingStatus()) {
          this.buttonIconName = "pause";
        }

        console.log("Platform is ready for MusicControls!");

          // Listen to events on the Music Controller and update the icons accordingly (UI change only)
          // The media actions are handled inside of the RadioStreamService script.
        this.musicControls.subscribe().subscribe(event => {

          const toDo = JSON.parse(event).message;

          switch(toDo) {

            case 'music-controls-play':
              this.buttonIconName = "pause";
              this.rsService.playMedia();
              break;
            case 'music-controls-pause':
              this.buttonIconName = "play";
              this.rsService.pauseMedia();
              break;
            case 'music-controls-destroy':
              this.buttonIconName = "play";
              this.rsService.stopMedia();
              this.musicControls.destroy();
              break;
            default:
              //this.rsService.stopMedia();
              //this.musicControls.destroy();
              break;
          }
          this.events.publish('updateScreen');
        });

        // Listen to interaction with the Music Controls
        this.musicControls.listen();

        this.backgroundMode.enable();
      })
  }

  changeAudioStreamAction() {
    /* 
      Case 1: the radio station in the Radio Stream Service is the same as the one currently visited.
    */
    if (this.rsService.getMusicControlStation() == this.item.station) {

      if (this.rsService.getAudioIsLoadedStatus() == true) {

        if (this.rsService.getAudioIsPlayingStatus() == true) {
          // Audio is playing, must be paused. Icon must be changed for Play interaction.
          this.buttonIconName = "play";
          this.rsService.pauseMedia();
        }
        else {
          // Audio is not playing, let's play it. Set the icon to Pause interaction status.
          this.buttonIconName = "pause";
          this.rsService.playMedia();
        }
      }
      // For some reason (e.g. closing MusicControl), the radio station was loaded before, but has been stopped and released ("unloaded")
      else {
        // Let's play the audio again, since user has not changed the radio station, change the icon for Pause interaction.
        this.buttonIconName = "pause";
        this.rsService.playMedia();
      }
    }
    /* 
      Case 2: the radio station in the Radio Stream Service is DIFFERENT than the one currently visited.
      Stop that stream first, before starting to play the new one!
    */
    else {
      // Check if audio was loaded, then stop it. No need for 'else', because we don't need to interact with unloaded audio here.
      if (this.rsService.getAudioIsLoadedStatus()) {
        this.rsService.stopMedia();
      }

      // Audio is stopped, so set new media and station name to the Stream Service.
      this.rsService.setMedia(this.radiostream);
      this.rsService.setMusicControlStation(this.item.station);
      // Now we can play the media and change the interaction button to pause.
      this.buttonIconName = "pause";
      this.rsService.playMedia();
    }
    this.events.publish('updateScreen');
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
    if (item.language == 'OTH') {
      this.translateService.get('DETAILS_STATION_LANG_OTH').subscribe(
        translatedString => { localisedLanguage = translatedString });
    }
    if (item.language == 'MUS') {
      this.translateService.get('DETAILS_STATION_LANG_MUS').subscribe(
        translatedString => { localisedLanguage = translatedString });
    }
    if (item.language == 'FINSWE') {
      this.translateService.get('DETAILS_STATION_LANG_FINSWE').subscribe(
        translatedString => { localisedLanguage = translatedString });
    }
    return localisedLanguage;
  }

  getLocalisedGenres(item) {

    let genresString: string = "";

    for (var index = 0; index < item.genres.length; index++) {

      var genreLogicalName = item.genres[index];

      if (genreLogicalName) {

        this.translateService.get(genreLogicalName).subscribe(
          translation => { genresString = genresString + translation + ", " })

      }     
    }
    return genresString;
  }

  openExternalBrowser(link) {

    //this.backgroundMode.moveToBackground();
    this.iab.create(link, '_system', 'mediaPlaybackRequiresUserAction=no,shouldPauseOnSuspend=no');
  }
}
