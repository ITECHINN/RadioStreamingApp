import { Component } from '@angular/core';
import { Platform, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';
import { AppAvailability } from '@ionic-native/app-availability';
import { InAppBrowser } from '@ionic-native/in-app-browser';


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
    private iab: InAppBrowser,
    private platform: Platform
  ) 
  {
    this.appVersion.getVersionNumber().
      then(v => this.versionNr = v);
  }

  ionViewDidLoad() {
    this.platform.registerBackButtonAction( () => {
      this.navCtrl.pop();
    });
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
