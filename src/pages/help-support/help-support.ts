import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-help-support',
  templateUrl: 'help-support.html'
})
export class HelpSupportPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

}
