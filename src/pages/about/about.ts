import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  versionNr: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private appVersion: AppVersion
  ) {
    this.appVersion.getVersionNumber().
      then(v => this.versionNr = v);
  }
}
