import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';
import { AppAvailability } from '@ionic-native/app-availability';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { Platform } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  versionNr: any;
  app = "com.facebook.katana";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private appVersion: AppVersion,
    private appAvailability: AppAvailability,
    private platform: Platform,
    private iab: InAppBrowser
  ) 
  {
    this.appVersion.getVersionNumber().
      then(v => this.versionNr = v);
  }

  openExternalBrowser(link) {
    this.iab.create(link, '_system');
  }

  openfb() {
    this.appAvailability.check(this.app)
    .then(
      (yes: boolean) => {
        console.log(this.app + " is available!");
        let browser = new InAppBrowser();
        browser.create('fb://page/185117385546360', '_system');
      },
      (no: boolean) => {
        console.log(this.app + " is not available!");
        let browser = new InAppBrowser();
        browser.create('https://www.facebook.com/185117385546360', '_system');
      }
    );
  }
}
