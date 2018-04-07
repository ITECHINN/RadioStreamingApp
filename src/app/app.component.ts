import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';
import { FirstRunPage } from '../pages/pages';
import { Settings } from '../providers/providers';
import { BackgroundMode } from '@ionic-native/background-mode';

@Component({
  templateUrl: 'menu-template.html'
})
export class StriimiRadioApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Portal', component: 'TabsPage', translation: 'MENU_HOME', icon: 'musical-notes' },
    { title: 'Search', component: 'SearchPage', translation: 'MENU_SEARCH', icon: 'search' },
    { title: 'Options', component: 'SettingsPage', translation: 'MENU_OPTIONS', icon: 'options' },
    { title: 'Help & Support', component: 'HelpSupportPage', translation: 'MENU_HELP_SUPPORT', icon: 'help-circle' } ,
    { title: 'About', component: 'AboutPage', translation: 'MENU_ABOUT', icon: 'information-circle' } 
  ]

  constructor(
    private translate: TranslateService, 
    platform: Platform, 
    settings: Settings, 
    private config: Config, 
    private statusBar: StatusBar, 
    private splashScreen: SplashScreen,
    private backgroundMode: BackgroundMode
    ) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // Disable the notification message with the 'hidden' 
      this.backgroundMode.setDefaults({
        title: 'StriimiRadio Music Streaming',
        text: 'Background music streaming',
        silent: true
      });
      this.backgroundMode.enable();
    });
    this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

/*   openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  } */

  // Pushing the page onto the stack allows us to dismiss it with the Back button.
  pushPageToStack(page) {
    this.nav.push(page.component);
  }
}
