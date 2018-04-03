import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Media, MediaObject } from '@ionic-native/media';
import { RadioStreamService } from '../../providers/radiostream/radiostream';

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
  buttonIconName: any;

  //radioStreamService: RadioStreamService;

  rsService: RadioStreamService;

  constructor(
    public navCtrl: NavController,
    private media: Media, 
    private translateService: TranslateService,
    navParams: NavParams, 
    items: Items,
    radioStreamService: RadioStreamService,
    platform: Platform
  )
  {
      this.item = navParams.get('item') || items.defaultItem;
      // On start-up the play icon may be shown.
      this.buttonIconName = "play";

      platform.ready().then(() => {

        console.log("Platform is ready for Media Creation!");
        // Prepare the Media Object for streaming
        this.radiostream = this.media.create(this.item.streamURL);

        this.rsService = radioStreamService;

        // If the opened Station page is the currently playing one, show a Pause button!
        if (this.rsService.getMusicControlStation() == this.item.station && this.rsService.getAudioPlayStatus()) {
          this.buttonIconName = "pause";
        }


      })

  }



  changeAudioStreamAction() {

    /* 
      Case: the radio station in the Radio Stream Service is the same as the one currently visited.
    */
    if (this.rsService.getMusicControlStation() == this.item.station) {

      if (this.buttonIconName == "play") {
        // Change the icon of the media button
        this.buttonIconName = "pause";
        this.rsService.playMedia();
      }
      else {
        // Change the icon of the media button
        this.buttonIconName = "play";
        this.rsService.pauseMedia();
      }
    }
    /* 
      Case: the radio station in the Radio Stream Service is DIFFERENT than the one currently visited.
      Stop that stream first, before starting to play the new one!
    */
    else {
      if (this.rsService.getAudioLoadStatus()) {
        this.buttonIconName = "play";
        this.rsService.stopMedia();
      }
      // Set new media and station name to the Stream Service.
      this.rsService.setMedia(this.radiostream);
      this.rsService.setMusicControlStation(this.item.station);

      this.buttonIconName = "pause";
      this.rsService.playMedia();
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





}
