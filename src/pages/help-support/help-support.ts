import { Component } from '@angular/core';
import { Platform, IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchReview } from '@ionic-native/launch-review';
import { BackgroundMode } from '@ionic-native/background-mode';

@IonicPage()
@Component({
  selector: 'page-help-support',
  templateUrl: 'help-support.html'
})
export class HelpSupportPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private launchReview: LaunchReview,
    private platform: Platform,
    private backgroundMode: BackgroundMode
  ) { }

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

  openReviewPage() {
    this.launchReview.launch()
      .then( () => console.log('Google Play launch successful!'));
  }  
}

