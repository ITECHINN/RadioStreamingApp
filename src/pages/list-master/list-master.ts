import { Component } from '@angular/core';

import { Platform, LoadingController, IonicPage, NavController } from 'ionic-angular';

import { Settings } from '../../providers/providers';
import { Storage } from '@ionic/storage';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

import { BackgroundMode } from '@ionic-native/background-mode';

import { TranslateService } from '@ngx-translate/core'

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {

  currentItems: Item[];
  favoriteMarkedItem: Item;
  loading: any;
  loadingContent: string;

  constructor(
    public navCtrl: NavController,
    private translateService: TranslateService,
    public items: Items,
    public settings: Settings,
    private savedData: Storage,
    public loadingCtrl: LoadingController,
    private platform: Platform,
    private backgroundMode: BackgroundMode
  ) {

    this.translateService.get('LIST_LOADING').subscribe(
      translatedString => {
        this.loadingContent = "<p>" + translatedString + "</p>"
      }
    ) 
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {

    this.platform.registerBackButtonAction(() => {

      let activeView = this.navCtrl.getActive();
      alert("ACTIVE VIEW = " + activeView.name);


      if (activeView.name == 'ListMasterPage') {
        alert("You pressed the Back button in the PORTAL page");
      }
    
      if (activeView.name == 'ItemDetailPage') {
        alert("You pressed the Back button in the RADIO STATION page");
      }

      if (activeView != null && ((<any> activeView).instance instanceof ListMasterPage)) {
          //this.myCustomBackAction();
          alert("HERE IT SHOULD MOVE THE APP TO THE BACKGROUND AND LEAVE IT OPEN");
          this.backgroundMode.enable();
          this.backgroundMode.moveToBackground();

      } else {
          alert("THIS LOOKS GOOD. WILL NAVIGATE BACK.");
          this.navCtrl.pop();
          
      }
    })

      /*   ionViewWillEnter() {
    var unregister = this.platform.registerBackButtonAction( () => {
      unregister();
    })
  } */
    

    this.presentLoadingIndicator();

    // Get the list of radio station items
    this.currentItems = this.items.query();

    // Go through our station list and assign icons.
    this.currentItems.forEach(item => {
      this.getFavorite().
        then(favorite => {
          if (item.station == favorite) {
            item.isFavorite = true;
            // Store the item object as favorite for easy access.
            this.favoriteMarkedItem = item;
          }
          else {
            item.isFavorite = false;
          }
        })
    })

    // Sorting: convert station names to lower case first, since sorting keeps it in account.
    this.currentItems.sort( (i, j) => {
      if (i.station.toLowerCase() < j.station.toLowerCase()) return -1;
      if (i.station.toLowerCase() > j.station.toLowerCase()) return 1;
      return 0;
    })

    this.dismissLoadingIndicator();
  }


  ionViewWillEnter() {

/*     var unregister = this.platform.registerBackButtonAction( () => {
      unregister();
    }) */
  }

/*   ionViewWillLeave() {

    let activeView = this.navCtrl.getActive();

    alert(activeView.name);
    // Override the HW Back button behavior, so the app does not exit in this view, but returns to the Tab page.
    this.platform.registerBackButtonAction( () => {
      this.navCtrl.pop();
    });
    alert("LEAVING NOW FROM THE MASTER LIST");
   }
 */


  /**
   * Set item as favorite and store it
   */
  setFavorite(item) {
    // If favoriteMarkedItem exists (and is not e.g. 'undefined')
    if (this.favoriteMarkedItem) {
      // Reset the icon of the previously marked favorite
      this.favoriteMarkedItem.isFavorite = false;
    }
      // Overwrite the favorite item
    this.favoriteMarkedItem = item;
    // Empty the previous favorite data, we only store ONE favorite station
    this.savedData.clear().
    then( () => {
      // Save the favorite
      this.savedData.set('savedAsFavorite', item.station);
      item.isFavorite = true;
    })

    
  }

  /**
   * Get the favorite item from storage (only one!)
   */
  getFavorite() {
    return this.savedData.get('savedAsFavorite')
      .then(fav => {
        return fav;
      })
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }


  presentLoadingIndicator() {
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: this.loadingContent
    });
    this.loading.present();
  }

  dismissLoadingIndicator() {
      this.loading.dismiss();
  } 

}