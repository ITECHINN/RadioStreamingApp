import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { HelpSupportPage } from './help-support';

@NgModule({
  declarations: [
    HelpSupportPage,
  ],
  imports: [
    IonicPageModule.forChild(HelpSupportPage),
    TranslateModule.forChild()
  ],
  exports: [
    HelpSupportPage
  ]
})
export class HelpSupportPagePageModule { }
