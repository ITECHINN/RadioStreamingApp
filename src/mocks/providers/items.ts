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
        "language": "FIN",
        "bannerPic": "assets/img/logos/RadioRock_banner.jpg",
        "logoPic": "assets/img/logos/RadioRock_logo.jpg",
        "streamURL": "http://icelive0.80692-icelive0.cdn.qbrick.com/10565/80692_RadioRock.mp3",
        "webURL": "http://www.radiorock.fi",
        "about": "",
        "note": "note placeholder",
        "format": "mp3",
        "type": "translation of the music type"
      },
      {
        "station": "Radio Suomipop",
        "language": "FIN",
        "bannerPic": "assets/img/logos/RadioSuomipop_banner.jpg",
        "logoPic": "assets/img/logos/RadioSuomipop_logo.jpg",
        "streamURL": "http://icelive0.80692-icelive0.cdn.qbrick.com/10566/80692_RadioSuomipop.mp3",
        "webURL": "http://www.radiosuomipop.fi",
        "about": "",
        "note": "note placeholder",
        "format": "mp3",
        "type": "translation of the music type"
      },
      {
        "station": "Radio Aalto",
        "language": "FIN",
        "bannerPic": "assets/img/logos/RadioAalto_banner.jpg",
        "logoPic": "assets/img/logos/RadioAalto_logo.jpg",
        "streamURL": "http://icelive0.80692-icelive0.cdn.qbrick.com/10564/80692_RadioAalto.mp3",
        "webURL": "http://www.radioaalto.fi",
        "about": "",
        "note": "note placeholder",
        "format": "mp3",
        "type": "translation of the music type"
      },
      {
        "station": "LOOP",
        "language": "FIN",
        "bannerPic": "assets/img/logos/LOOP_banner.jpg",
        "logoPic": "assets/img/logos/LOOP_logo.jpg",
        "streamURL": "http://icelive0.80692-icelive0.cdn.qbrick.com/10561/80692_Loop.mp3",
        "webURL": "http://www.loop.fi",
        "about": "",
        "note": "note placeholder",
        "format": "mp3",
        "type": "translation of the music type"
      },
      {
        "station": "helmi Radio",
        "language": "FIN",
        "bannerPic": "assets/img/logos/helmi_banner.jpg",
        "logoPic": "assets/img/logos/helmi_logo.jpg",
        "streamURL": "http://icelive0.80692-icelive0.cdn.qbrick.com/10567/80692_Helmiradio.mp3",
        "webURL": "http://www.helmiradio.fi",
        "about": "",
        "note": "note placeholder",
        "format": "mp3",
        "type": "translation of the music type"
      },
      {
        "station": "groove FM",
        "language": "FIN",
        "bannerPic": "assets/img/logos/grooveFM_banner.jpg",
        "logoPic": "assets/img/logos/grooveFM_logo.jpg",
        "streamURL": "http://icelive0.80692-icelive0.cdn.qbrick.com/10563/80692_GrooveFM.mp3",
        "webURL": "http://www.groovefm.fi/",
        "about": "",
        "note": "note placeholder",
        "format": "mp3",
        "type": "translation of the music type"
      },
      {
        "station": "KISS",
        "language": "FIN",
        "bannerPic": "assets/img/logos/KISS_banner.jpg",
        "logoPic": "assets/img/logos/KISS_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi:80/kiss.mp3",
        "webURL": "https://www.kiss.fi/",
        "about": "",
        "note": "note placeholder",
        "format": "mp3",
        "type": "translation of the music type"
      },
      {
        "station": "Radio City (Helsinki)",
        "language": "FIN",
        "bannerPic": "assets/img/logos/RadioCity_banner.jpg",
        "logoPic": "assets/img/logos/RadioCity_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi:80/rc-hki.mp3",
        "webURL": "https://www.radiocity.fi/",
        "about": "",
        "note": "note placeholder",
        "format": "mp3",
        "type": "translation of the music type"
      },
      {
        "station": "Radio Nostalgia",
        "language": "FIN",
        "bannerPic": "assets/img/logos/RadioNostalgia_banner.jpg",
        "logoPic": "assets/img/logos/RadioNostalgia_logo.jpg",
        "streamURL": "http://cdn.nrjaudio.fm/adwz1/fi/35059/mp3_128.mp3",
        "webURL": "http://www.radionostalgia.fi/",
        "about": "",
        "note": "note placeholder",
        "format": "mp3",
        "type": "translation of the music type"
      },
      {
        "station": "Radio Nova",
        "language": "FIN",
        "bannerPic": "assets/img/logos/RadioNova_banner.jpg",
        "logoPic": "assets/img/logos/RadioNova_logo.jpg",
        "streamURL": "http://stream3.bauermedia.fi/nova.mp3",
        "webURL": "https://www.radionova.fi/",
        "about": "",
        "note": "note placeholder",
        "format": "mp3",
        "type": "translation of the music type"
      },
      {
        "station": "NRJ Radio",
        "language": "FIN",
        "bannerPic": "assets/img/logos/NRJ_banner.jpg",
        "logoPic": "assets/img/logos/NRJ_logo.jpg",
        "streamURL": "http://cdn.nrjaudio.fm/adwz1/fi/35001/mp3_128.mp3",
        "webURL": "http://www.nrj.fi/",
        "about": "",
        "note": "note placeholder",
        "format": "mp3",
        "type": "translation of the music type"
      },
      {
        "station": "Radio POOKI",
        "language": "FIN",
        "bannerPic": "assets/img/logos/RadioPOOKI_banner.jpg",
        "logoPic": "assets/img/logos/RadioPOOKI_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi:80/pooki.mp3",
        "webURL": "https://www.radiopooki.fi/",
        "about": "",
        "note": "note placeholder",
        "format": "mp3",
        "type": "translation of the music type"
      },
      {
        "station": "Radio SuomiRock",
        "language": "FIN",
        "bannerPic": "assets/img/logos/SuomiRock_banner.jpg",
        "logoPic": "assets/img/logos/SuomiRock_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/suomirock.mp3",
        "webURL": "https://www.radiosuomirock.fi/",
        "about": "",
        "note": "note placeholder",
        "format": "mp3",
        "type": "translation of the music type"
      },
      {
        "station": "Radio 957",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Radio957_banner.jpg",
        "logoPic": "assets/img/logos/Radio957_logo.jpg",
        "streamURL": "http://stream1.bauermedia.fi/radio957.mp3",
        "webURL": "https://www.957.fi/",
        "about": "",
        "note": "note placeholder",
        "format": "mp3",
        "type": "translation of the music type"
      },
      {
        "station": "Radio SUN",
        "language": "FIN",
        "bannerPic": "assets/img/logos/RadioSUN_banner.jpg",
        "logoPic": "assets/img/logos/RadioSUN_logo.jpg",
        "streamURL": "http://st.downtime.fi:80/sun.mp3",
        "webURL": "http://radiosun.fi/",
        "about": "",
        "note": "note placeholder",
        "format": "mp3",
        "type": "translation of the music type"
      },
      {
        "station": "Business FM",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Business_FM_banner.jpg",
        "logoPic": "assets/img/logos/Business_FM_logo.jpg",
        "streamURL": "http://st.downtime.fi/bfm.mp3",
        "webURL": "http://businessfm.fi/",
        "about": "",
        "note": "note placeholder",
        "format": "mp3",
        "type": "translation of the music type"
      },
      {
        "station": "Radio Vaasa",
        "language": "FIN",
        "bannerPic": "assets/img/logos/RadioVaasa_banner.jpg",
        "logoPic": "assets/img/logos/RadioVaasa_logo.jpg",
        "streamURL": "http://stream.radiovaasa.fi:8000/radiovaasa.mp3",
        "webURL": "https://www.radiovaasa.fi/",
        "about": "",
        "note": "note placeholder",
        "format": "mp3",
        "type": "translation of the music type"
      },
      {
        "station": "Radio Voima",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Voima_banner.jpg",
        "logoPic": "assets/img/logos/Voima_logo.jpg",
        "streamURL": "http://cast.radiovoima.fi:8000/voima.mp3",
        "webURL": "https://www.radiovoima.fi/",
        "about": "",
        "note": "note placeholder",
        "format": "mp3",
        "type": "translation of the music type"
      },
      {
        "station": "FUN Tampere",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Fun_Tampere_banner.jpg",
        "logoPic": "assets/img/logos/Fun_Tampere_logo.jpg",
        "streamURL": "http://st.downtime.fi:80/fun.mp3",
        "webURL": "http://www.funtampere.fi/",
        "about": "",
        "note": "note placeholder",
        "format": "mp3",
        "type": "translation of the music type"
      },
      {
        "station": "Pispalan Radio",
        "language": "FIN",
        "bannerPic": "assets/img/logos/PispalanRadio_banner.jpg",
        "logoPic": "assets/img/logos/PispalanRadio_logo.jpg",
        "streamURL": "http://suomiradio.pro:8000/gramox.mp3",
        "webURL": "http://www.pispalanradio.fi/",
        "about": "",
        "note": "note placeholder",
        "format": "mp3",
        "type": "translation of the music type"
      },
      {
        "station": "Radio Moreeni",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Moreeni_banner.jpg",
        "logoPic": "assets/img/logos/Moreeni_logo.jpg",
        "streamURL": "http://153.1.15.29:8080/moreeni.mp3",
        "webURL": "https://radio.uta.fi/",
        "about": "",
        "note": "note placeholder",
        "format": "mp3",
        "type": "translation of the music type"
      },
      {
        "station": "Radio Ramona",
        "language": "FIN",
        "bannerPic": "assets/img/logos/RadioRamona_banner.jpg",
        "logoPic": "assets/img/logos/RadioRamona_logo.jpg",
        "streamURL": "http://185.123.117.122:8000/ramona.mp3",
        "webURL": "http://www.radioramona.fi/",
        "about": "",
        "note": "note placeholder",
        "format": "mp3",
        "type": "translation of the music type"
      },
      {
        "station": "yle PUHE",
        "language": "FIN",
        "bannerPic": "assets/img/logos/yle_PUHE_banner.jpg",
        "logoPic": "assets/img/logos/yle_PUHE_logo.jpg",
        "streamURL": "http://www.yle.fi/livestream/puhe.asx",
        "webURL": "http://yle.fi/puhe",
        "about": "",
        "note": "note placeholder",
        "format": "asx",
        "type": "translation of the music type"
      },
      {
        "station": "YleX",
        "language": "FIN",
        "bannerPic": "assets/img/logos/YleX_banner.jpg",
        "logoPic": "assets/img/logos/YleX_logo.jpg",
        "streamURL": "http://mediau.yle.fi:80/liveylex",
        "webURL": "https://yle.fi/ylex/",
        "about": "",
        "note": "note placeholder",
        "format": "xxx",
        "type": "translation of the music type"
      },
      {
        "station": "Bassoradio",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Basso_banner.jpg",
        "logoPic": "assets/img/logos/Basso_logo.jpg",
        "streamURL": "http://stream.basso.fi:8000/stream",
        "webURL": "http://www.basso.fi/",
        "about": "",
        "note": "note placeholder",
        "format": "xxx",
        "type": "translation of the music type"
      },
      {
        "station": "Radio Sputnik",
        "language": "RUS",
        "bannerPic": "assets/img/logos/RadioSputnik_banner.jpg",
        "logoPic": "assets/img/logos/RadioSputnik_logo.jpg",
        "streamURL": "http://audio.raa.fi:8000/radiosputnik",
        "webURL": "http://radiosputnik.fi/",
        "about": "",
        "note": "note placeholder",
        "format": "xxx",
        "type": "translation of the music type"
      },
      {
        "station": "HitMix",
        "language": "FIN",
        "bannerPic": "assets/img/logos/HitMix_banner.jpg",
        "logoPic": "assets/img/logos/HitMix_logo.jpg",
        "streamURL": "https://icelive0-80692-icelive0.dna.qbrick.com/10162/80692_HitMix.mp3",
        "webURL": "https://www.hitmix.fi/",
        "about": "",
        "note": "note placeholder",
        "format": "mp3",
        "type": "translation of the music type"
      },
      {
        "station": "HitMix Jyväskylä",
        "language": "FIN",
        "bannerPic": "assets/img/logos/HitMix_banner.jpg",
        "logoPic": "assets/img/logos/HitMix_logo.jpg",
        "streamURL": "http://hel2-77-86-247-184.ext.nebulacloud.fi:8000/kompassi",
        "webURL": "https://www.hitmix.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "xxx",
        "local": "Jyväskylä"
      },
      {
        "station": "HitMix Kuopio",
        "language": "FIN",
        "bannerPic": "assets/img/logos/HitMix_banner.jpg",
        "logoPic": "assets/img/logos/HitMix_logo.jpg",
        "streamURL": "http://hel2-77-86-247-184.ext.nebulacloud.fi:8000/kuopio",
        "webURL": "https://www.hitmix.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "xxx",
        "local": "Kuopio"
      },
      {
        "station": "Iskelmä Ankkuri",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-kem.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "mp3",
        "local": "Kemi"
      },
      {
        "station": "Iskelmä (Helsinki, Uusimaa)",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi:80/isk-hki.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "mp3",
        "local": "Uusimaa, Helsinki, Hyvinkää, Pohja, Hanko, Porvoo"
      },
      {
        "station": "Iskelmä Janne",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-hml.mp3",
        "webURL": "https://iskelmajanne.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "mp3",
        "local": "Hämeenlinna"
      },
      {
        "station": "Iskelmä Hyvinkää",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-hyv.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "mp3",
        "local": "Hyvinkää"
      },
      {
        "station": "Iskelmä Jyväskylä",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-jkl.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "mp3",
        "local": "Jyväskylä, Jämsä, Pihtipudas"
      },
      {
        "station": "Iskelmä Kotka",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-ktk.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "mp3",
        "local": "Kaakkois-Suomi, Kotka, Kouvola, Lappeenranta, Imatra"
      },
      {
        "station": "Iskelmä Kouvola",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-kvl.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "mp3",
        "local": "Kaakkois-Suomi, Kotka, Kouvola, Lappeenranta, Imatra"
      },
      {
        "station": "Iskelmä Kuopio",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-kuo.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "mp3",
        "local": "Kuopio"
      },
      {
        "station": "Iskelmä Lahti",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-lah.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "mp3",
        "local": "Lahti, Heinola"
      },
      {
        "station": "Iskelmä Lappeenranta",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-lpr.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "mp3",
        "local": "Kaakkois-Suomi, Kotka, Kouvola, Lappeenranta, Imatra"
      },
      {
        "station": "Iskelmä Mikkeli",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-mli.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "mp3",
        "local": "Mikkeli"
      },
      {
        "station": "Iskelmä Oulu",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-oul.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "mp3",
        "local": "Oulu, Haapavesi, Raahe, Sievi"
      },
      {
        "station": "Iskelmä Satakunta",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-rma.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "mp3",
        "local": "Satakunta, Pori, Rauma, Huittinen"
      },
      {
        "station": "Iskelmä Savonlinna",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-svl.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "mp3",
        "local": "Savonlinna"
      },
      {
        "station": "Iskelmä Seinäjoki",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-snj.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "mp3",
        "local": "Seinäjoki"
      },
      {
        "station": "Iskelmä Rovaniemi",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-rov.mp3",
        "webURL": "http://www.iskelmarovaniemi.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "mp3",
        "local": "Rovaniemi"
      },
      {
        "station": "Iskelmä Rex",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Iskelma_Rex_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-rex.mp3",
        "webURL": "https://radiorex.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "mp3",
        "local": "Pohjois-Karjala, Joensuu"
      },
      {
        "station": "Iskelmä Sastamala",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-sas.mp3",
        "webURL": "https://iskelmajanne.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "mp3",
        "local": "Hämeenkyrö, Sastamala, Kankaanpää"
      },
      {
        "station": "Iskelmä Tampere",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-tre.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "mp3",
        "local": "Pirkanmaa, Tampere, Valkeakoski, Vilppula, Ikaalinen"
      },
      {
        "station": "Iskelmä Turku",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-tku.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "mp3",
        "local": "Varsinais-Suomi, Turku, Loimaa, Forssa, Uusikaupunki"
      },
      {
        "station": "Iskelmä Uusimaa",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-loh.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "mp3",
        "local": "Lohja, Helsinki, Uusimaa"
      },
      {
        "station": "Iskelmä Vaasa",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-vaa.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "mp3",
        "local": "Vaasa"
      },
      {
        "station": "Järviradio",
        "language": "FIN",
        "bannerPic": "assets/img/logos/JarviRadio_banner.jpg",
        "logoPic": "assets/img/logos/JarviRadio_logo.jpg",
        "streamURL": "http://109.236.85.141:7081/jarviradio",
        "webURL": "https://www.jarviradio.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "xxx",
        "local": "Alajärvi"
      },
      {
        "station": "Spirit FM",
        "language": "ENG",
        "bannerPic": "assets/img/logos/SpiritFM_banner.jpg",
        "logoPic": "assets/img/logos/SpiritFM_logo.jpg",
        "streamURL": "http://audio.raa.fi:8000/hifi",
        "webURL": "http://spiritfm.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "xxx",
        "local": "Helsinki, Turku"
      },
      {
        "station": "Steel FM",
        "language": "SWE",
        "bannerPic": "assets/img/logos/SteelFM_banner.jpg",
        "logoPic": "assets/img/logos/SteelFM_logo.jpg",
        "streamURL": "http://ice6.securenetsystems.net/STEELFM",
        "webURL": "http://www.steelfm.ax/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "xxx",
        "local": "Åland, Mariehamn"
      },
      {
        "station": "Sea FM",
        "language": "FIN",
        "bannerPic": "assets/img/logos/SeaFM_banner.jpg",
        "logoPic": "assets/img/logos/SeaFM_logo.jpg",
        "streamURL": "http://s3.myradiostream.com:4976/",
        "webURL": "http://www.seafm.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "xxx",
        "local": "Oulu, Kemi, Tornio, Rovaniemi"
      },
      {
        "station": "Radio Sandels",
        "language": "FIN",
        "bannerPic": "assets/img/logos/RadioSandels_banner.jpg",
        "logoPic": "assets/img/logos/RadioSandels_logo.jpg",
        "streamURL": "http://suomiradio.pro:8080/stream/1/",
        "webURL": "http://www.radiosandels.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "format": "xxx",
        "local": "Pohjois-Savo, Iisalmi, Kuopio, Varkaus"
      },
      {
        "station": "Classic",
        "language": "FIN",
        "bannerPic": "assets/img/logos/Classic_banner.jpg",
        "logoPic": "assets/img/logos/Classic_logo.jpg",
        "streamURL": "http://stream.radioclassic.fi:8080/classic",
        "webURL": "http://radioclassic.fi/",
        "about": "",
        "note": "",
        "type": "",
        "format": "xxx",
        "local": "Tampere"
      },
      {
        "station": "Radio Dei",
        "language": "FIN",
        "bannerPic": "assets/img/logos/RadioDei_banner.jpg",
        "logoPic": "assets/img/logos/RadioDei_logo.jpg",
        "streamURL": "http://isojako.radiodei.fi:8000/yleisohjelma",
        "webURL": "https://www.radiodei.fi/",
        "about": "",
        "note": "",
        "type": "",
        "format": "xxx",
        "local": "Suomi"
      },
      {
        "station": "Radio Dei Helsinki",
        "language": "FIN",
        "bannerPic": "assets/img/logos/RadioDei_banner.jpg",
        "logoPic": "assets/img/logos/RadioDei_logo.jpg",
        "streamURL": "http://isojako.radiodei.fi:8000/helsinki",
        "webURL": "https://www.radiodei.fi/",
        "about": "",
        "note": "",
        "type": "",
        "format": "xxx",
        "local": "Helsinki"
      },
      {
        "station": "Radio Dei Kemi",
        "language": "FIN",
        "bannerPic": "assets/img/logos/RadioDei_banner.jpg",
        "logoPic": "assets/img/logos/RadioDei_logo.jpg",
        "streamURL": "http://isojako.radiodei.fi:8000/tornio",
        "webURL": "https://www.radiodei.fi/",
        "about": "",
        "note": "",
        "type": "",
        "format": "xxx",
        "local": "Kemi, Tornio"
      },
      {
        "station": "Radio Dei Oulu",
        "language": "FIN",
        "bannerPic": "assets/img/logos/RadioDei_banner.jpg",
        "logoPic": "assets/img/logos/RadioDei_logo.jpg",
        "streamURL": "http://isojako.radiodei.fi:8000/oulu",
        "webURL": "https://www.radiodei.fi/",
        "about": "",
        "note": "",
        "type": "",
        "format": "xxx",
        "local": "Oulu"
      },
      {
        "station": "Radio Dei Kokkola",
        "language": "FIN",
        "bannerPic": "assets/img/logos/RadioDei_banner.jpg",
        "logoPic": "assets/img/logos/RadioDei_logo.jpg",
        "streamURL": "http://isojako.radiodei.fi:8000/kruunupyy",
        "webURL": "https://www.radiodei.fi/",
        "about": "",
        "note": "",
        "type": "",
        "format": "xxx",
        "local": "Kokkola"
      },
      {
        "station": "Radio Dei Kristiinankaupunki",
        "language": "FIN",
        "bannerPic": "assets/img/logos/RadioDei_banner.jpg",
        "logoPic": "assets/img/logos/RadioDei_logo.jpg",
        "streamURL": "http://isojako.radiodei.fi:8000/kristiinankaupunki",
        "webURL": "https://www.radiodei.fi/",
        "about": "",
        "note": "",
        "type": "",
        "format": "xxx",
        "local": "Kristiinankaupunki"
      },
      {
        "station": "Radio Dei Pohjanmaa",
        "language": "FIN",
        "bannerPic": "assets/img/logos/RadioDei_banner.jpg",
        "logoPic": "assets/img/logos/RadioDei_logo.jpg",
        "streamURL": "http://isojako.radiodei.fi:8000/lapua",
        "webURL": "https://www.radiodei.fi/",
        "about": "",
        "note": "",
        "type": "",
        "format": "xxx",
        "local": "Pohjanmaa, Lapua"
      },
      {
        "station": "Radio Dei Rovaniemi",
        "language": "FIN",
        "bannerPic": "assets/img/logos/RadioDei_banner.jpg",
        "logoPic": "assets/img/logos/RadioDei_logo.jpg",
        "streamURL": "http://isojako.radiodei.fi:8000/rovaniemi",
        "webURL": "https://www.radiodei.fi/",
        "about": "",
        "note": "",
        "type": "",
        "format": "xxx",
        "local": "Rovaniemi"
      },
      {
        "station": "Radio Dei Turku",
        "language": "FIN",
        "bannerPic": "assets/img/logos/RadioDei_banner.jpg",
        "logoPic": "assets/img/logos/RadioDei_logo.jpg",
        "streamURL": "http://isojako.radiodei.fi:8000/turku",
        "webURL": "https://www.radiodei.fi/",
        "about": "",
        "note": "",
        "type": "",
        "format": "xxx",
        "local": "Turku"
      },
      {
        "station": "Radio Patmos",
        "language": "FIN",
        "bannerPic": "assets/img/logos/RadioPatmos_banner.jpg",
        "logoPic": "assets/img/logos/RadioPatmos_logo.jpg",
        "streamURL": "http://46.28.53.118:7011/radio",
        "webURL": "https://patmos.studio24.fi/",
        "about": "",
        "note": "",
        "type": "",
        "format": "xxx",
        "local": "Suomi, Helsinki"
      },
      {
        "station": "Aito Kajaus",
        "language": "FIN",
        "bannerPic": "assets/img/logos/RadioKajaus_banner.jpg",
        "logoPic": "assets/img/logos/RadioKajaus_logo.jpg",
        "streamURL": "http://radio.6net.fi:8000/radiokajaus",
        "webURL": "https://www.radiokajaus.fi/",
        "about": "",
        "note": "",
        "type": "",
        "format": "xxx",
        "local": "Suomi"
      },
      {
        "station": "Finest FM",
        "language": "EST",
        "bannerPic": "assets/img/logos/FinestFM_banner.jpg",
        "logoPic": "assets/img/logos/FinestFM_logo.jpg",
        "streamURL": "http://212.47.220.188:8000/listen.mp3",
        "webURL": "http://web.finestfm.fi/",
        "about": "",
        "note": "",
        "type": "",
        "format": "mp3",
        "local": "Suomi"
      },
      {
        "station": "Radio Helsinki",
        "language": "FIN",
        "bannerPic": "assets/img/logos/RadioHelsinki_banner.jpg",
        "logoPic": "assets/img/logos/RadioHelsinki_logo.jpg",
        "streamURL": "http://77.86.233.1:8002/;",
        "webURL": "http://www.radiohelsinki.fi/",
        "about": "",
        "note": "",
        "type": "",
        "format": "xxx",
        "local": "Helsinki"
      },
      {
        "station": "Radio Inari",
        "language": "FIN",
        "bannerPic": "assets/img/logos/RadioInari_banner.jpg",
        "logoPic": "assets/img/logos/RadioInari_logo.jpg",
        "streamURL": "http://188.117.31.195:8000/radioinari",
        "webURL": "http://www.radiohelsinki.fi/",
        "about": "",
        "note": "",
        "type": "",
        "format": "xxx",
        "local": "Inari, Ivalo"
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
