import { Component } from '@angular/core';
import { Platform, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';
import { AppAvailability } from '@ionic-native/app-availability';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BackgroundMode } from '@ionic-native/background-mode';


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
    private platform: Platform,
    private backgroundMode: BackgroundMode
  ) 
  {
    this.appVersion.getVersionNumber().
      then(v => this.versionNr = v);
  }

  /*
     BEFORE WE ENTER the view, 
     we will make sure that the Back key is able to return to the Tabs Page (Root page).
  */
  ionViewWillEnter() {
    this.platform.registerBackButtonAction( () => {
      // Remove the previous view from the Stack (e.g. when Settings page is opened again from Side menu)
      this.navCtrl.popToRoot();

    });
  }

  /*
     BACK key action was set as "pop to root before we got to the view,
     now we need to re-register it to the action in the TABS PAGE,
     so we should be able to push it to the background.
  */
  ionViewWillLeave() {

    // Then re-rigster the Back Button action, because the page is opened on top of the Tabs Page.
    this.platform.registerBackButtonAction( () => {
      this.backgroundMode.enable();
      this.backgroundMode.moveToBackground();
    })
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
