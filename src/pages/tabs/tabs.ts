import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';

import { BackgroundMode } from '@ionic-native/background-mode';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;

  tab1Title = "RadioStations";
  tab2Title = "Search ";
  tab3Title = "Settings";

  private resetBackButton: any;

  constructor(
    public navCtrl: NavController, 
    public translateService: TranslateService,
    private backgroundMode: BackgroundMode,
    private platform: Platform
  ) {
    platform.ready().then(() => {
      /* 
        Disable the Back button behavior in the Tabs pages,
        the app will go to background when pressing Back in the main view.
      */
      this.backgroundMode.enable();
      this.backgroundMode.overrideBackButton();
    })

    translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(values => {
      this.tab1Title = values['TAB1_TITLE'];
      this.tab2Title = values['TAB2_TITLE'];
      this.tab3Title = values['TAB3_TITLE'];
    });

  }

}
