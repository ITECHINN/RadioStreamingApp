import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
  };


  constructor() {
    let items = [
      {
        "station": "Radio Rock",
        "bannerPic": "assets/img/logos/RadioRock_banner.jpg",
        "logoPic": "assets/img/logos/RadioRock_logo.jpg",
        "streamURL": "http://icelive0.80692-icelive0.cdn.qbrick.com/10565/80692_RadioRock.mp3",
        "webURL": "http://www.radiorock.fi",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "Radio Suomipop",
        "bannerPic": "assets/img/logos/RadioSuomipop_banner.jpg",
        "logoPic": "assets/img/logos/RadioSuomipop_logo.jpg",
        "streamURL": "http://icelive0.80692-icelive0.cdn.qbrick.com/10566/80692_RadioSuomipop.mp3",
        "webURL": "http://www.radiosuomipop.fi",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "Radio Aalto",
        "bannerPic": "assets/img/logos/RadioAalto_banner.jpg",
        "logoPic": "assets/img/logos/RadioAalto_logo.jpg",
        "streamURL": "http://icelive0.80692-icelive0.cdn.qbrick.com/10564/80692_RadioAalto.mp3",
        "webURL": "http://www.radioaalto.fi",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "LOOP",
        "bannerPic": "assets/img/logos/LOOP_banner.jpg",
        "logoPic": "assets/img/logos/LOOP_logo.jpg",
        "streamURL": "http://icelive0.80692-icelive0.cdn.qbrick.com/10561/80692_Loop.mp3",
        "webURL": "http://www.loop.fi",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "helmi Radio",
        "bannerPic": "assets/img/logos/helmi_banner.jpg",
        "logoPic": "assets/img/logos/helmi_logo.jpg",
        "streamURL": "http://icelive0.80692-icelive0.cdn.qbrick.com/10567/80692_Helmiradio.mp3",
        "webURL": "http://www.helmiradio.fi",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "groove FM",
        "bannerPic": "assets/img/logos/grooveFM_banner.jpg",
        "logoPic": "assets/img/logos/grooveFM_logo.jpg",
        "streamURL": "http://icelive0.80692-icelive0.cdn.qbrick.com/10563/80692_GrooveFM.mp3",
        "webURL": "http://www.groovefm.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "KISS",
        "bannerPic": "assets/img/logos/KISS_banner.jpg",
        "logoPic": "assets/img/logos/KISS_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi:80/kiss.mp3",
        "webURL": "https://www.kiss.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "Radio City",
        "bannerPic": "assets/img/logos/RadioCity_banner.jpg",
        "logoPic": "assets/img/logos/RadioCity_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi:80/rc-hki.mp3",
        "webURL": "https://www.radiocity.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "Radio Nostalgia",
        "bannerPic": "assets/img/logos/RadioNostalgia_banner.jpg",
        "logoPic": "assets/img/logos/RadioNostalgia_logo.jpg",
        "streamURL": "http://cdn.nrjaudio.fm/adwz1/fi/35059/mp3_128.mp3",
        "webURL": "http://www.radionostalgia.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "Radio Nova",
        "bannerPic": "assets/img/logos/RadioNova_banner.jpg",
        "logoPic": "assets/img/logos/RadioNova_logo.jpg",
        "streamURL": "http://stream3.bauermedia.fi/nova.mp3",
        "webURL": "https://www.radionova.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "NRJ Radio",
        "bannerPic": "assets/img/logos/NRJ_banner.jpg",
        "logoPic": "assets/img/logos/NRJ_logo.jpg",
        "streamURL": "http://cdn.nrjaudio.fm/adwz1/fi/35001/mp3_128.mp3",
        "webURL": "http://www.nrj.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "Radio POOKI",
        "bannerPic": "assets/img/logos/RadioPOOKI_banner.jpg",
        "logoPic": "assets/img/logos/RadioPOOKI_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi:80/pooki.mp3",
        "webURL": "https://www.radiopooki.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "Radio SuomiRock",
        "bannerPic": "assets/img/logos/SuomiRock_banner.jpg",
        "logoPic": "assets/img/logos/SuomiRock_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/suomirock.mp3",
        "webURL": "https://www.radiosuomirock.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "Radio 957",
        "bannerPic": "assets/img/logos/Radio957_banner.jpg",
        "logoPic": "assets/img/logos/Radio957_logo.jpg",
        "streamURL": "http://stream1.bauermedia.fi/radio957.mp3",
        "webURL": "https://www.957.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "Radio SUN",
        "bannerPic": "assets/img/logos/RadioSUN_banner.jpg",
        "logoPic": "assets/img/logos/RadioSUN_logo.jpg",
        "streamURL": "http://st.downtime.fi:80/sun.mp3",
        "webURL": "http://radiosun.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "Business FM",
        "bannerPic": "assets/img/logos/Business_FM_banner.jpg",
        "logoPic": "assets/img/logos/Business_FM_logo.jpg",
        "streamURL": "http://st.downtime.fi/bfm.mp3",
        "webURL": "http://businessfm.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "Radio Vaasa",
        "bannerPic": "assets/img/logos/RadioVaasa_banner.jpg",
        "logoPic": "assets/img/logos/RadioVaasa_logo.jpg",
        "streamURL": "http://stream.radiovaasa.fi:8000/radiovaasa.mp3",
        "webURL": "https://www.radiovaasa.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
