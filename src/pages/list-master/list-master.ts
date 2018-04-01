import { Component } from '@angular/core';

import { IonicPage, NavController } from 'ionic-angular';

import { Settings } from '../../providers/providers';
import { Storage } from '@ionic/storage';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

import { BackgroundMode } from '@ionic-native/background-mode';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {

  currentItems: Item[];
  favoriteMarkedItem: Item;

  constructor(
    public navCtrl: NavController,
    public items: Items,
    public settings: Settings,
    private savedData: Storage,
    private backgroundMode: BackgroundMode
  ) {
    this.backgroundMode.enable();
    this.backgroundMode.overrideBackButton();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {

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
  }

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
}