import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LaunchReview } from '@ionic-native/launch-review';

@IonicPage()
@Component({
  selector: 'page-help-support',
  templateUrl: 'help-support.html'
})
export class HelpSupportPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private launchReview: LaunchReview
  ) { }

  openReviewPage() {
    this.launchReview.launch()
      .then( () => console.log('Launch of the store app successful!'));
  }  
}

