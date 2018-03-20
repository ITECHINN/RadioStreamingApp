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
        "station": "Radio City (Helsinki)",
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
      },
      {
        "station": "Radio Voima",
        "bannerPic": "assets/img/logos/Voima_banner.jpg",
        "logoPic": "assets/img/logos/Voima_logo.jpg",
        "streamURL": "http://cast.radiovoima.fi:8000/voima.mp3",
        "webURL": "https://www.radiovoima.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "FUN Tampere",
        "bannerPic": "assets/img/logos/Fun_Tampere_banner.jpg",
        "logoPic": "assets/img/logos/Fun_Tampere_logo.jpg",
        "streamURL": "http://st.downtime.fi:80/fun.mp3",
        "webURL": "http://www.funtampere.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "Pispalan Radio",
        "bannerPic": "assets/img/logos/PispalanRadio_banner.jpg",
        "logoPic": "assets/img/logos/PispalanRadio_logo.jpg",
        "streamURL": "http://suomiradio.pro:8000/gramox.mp3",
        "webURL": "http://www.pispalanradio.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "Radio Moreeni",
        "bannerPic": "assets/img/logos/Moreeni_banner.jpg",
        "logoPic": "assets/img/logos/Moreeni_logo.jpg",
        "streamURL": "http://153.1.15.29:8080/moreeni.mp3",
        "webURL": "https://radio.uta.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "Radio Ramona",
        "bannerPic": "assets/img/logos/RadioRamona_banner.jpg",
        "logoPic": "assets/img/logos/RadioRamona_logo.jpg",
        "streamURL": "http://185.123.117.122:8000/ramona.mp3",
        "webURL": "http://www.radioramona.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "yle PUHE",
        "bannerPic": "assets/img/logos/yle_PUHE_banner.jpg",
        "logoPic": "assets/img/logos/yle_PUHE_logo.jpg",
        "streamURL": "http://www.yle.fi/livestream/puhe.asx",
        "webURL": "http://yle.fi/puhe",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "YleX",
        "bannerPic": "assets/img/logos/YleX_banner.jpg",
        "logoPic": "assets/img/logos/YleX_logo.jpg",
        "streamURL": "http://mediau.yle.fi:80/liveylex",
        "webURL": "https://yle.fi/ylex/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "Bassoradio",
        "bannerPic": "assets/img/logos/Basso_banner.jpg",
        "logoPic": "assets/img/logos/Basso_logo.jpg",
        "streamURL": "http://stream.basso.fi:8000/stream",
        "webURL": "http://www.basso.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "Radio Sputnik",
        "bannerPic": "assets/img/logos/RadioSputnik_banner.jpg",
        "logoPic": "assets/img/logos/RadioSputnik_logo.jpg",
        "streamURL": "http://audio.raa.fi:8000/radiosputnik",
        "webURL": "http://radiosputnik.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "HitMix",
        "bannerPic": "assets/img/logos/HitMix_banner.jpg",
        "logoPic": "assets/img/logos/HitMix_logo.jpg",
        "streamURL": "https://icelive0-80692-icelive0.dna.qbrick.com/10162/80692_HitMix.mp3",
        "webURL": "https://www.hitmix.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type"
      },
      {
        "station": "HitMix Jyväskylä",
        "bannerPic": "assets/img/logos/HitMix_banner.jpg",
        "logoPic": "assets/img/logos/HitMix_logo.jpg",
        "streamURL": "http://hel2-77-86-247-184.ext.nebulacloud.fi:8000/kompassi",
        "webURL": "https://www.hitmix.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Jyväskylä"
      },
      {
        "station": "HitMix Kuopio",
        "bannerPic": "assets/img/logos/HitMix_banner.jpg",
        "logoPic": "assets/img/logos/HitMix_logo.jpg",
        "streamURL": "http://hel2-77-86-247-184.ext.nebulacloud.fi:8000/kuopio",
        "webURL": "https://www.hitmix.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Kuopio"
      },
      {
        "station": "Iskelmä Ankkuri",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-kem.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Kemi"
      },
      {
        "station": "Iskelmä (Helsinki, Uusimaa)",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi:80/isk-hki.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Uusimaa, Helsinki, Hyvinkää, Pohja, Hanko, Porvoo"
      },
      {
        "station": "Iskelmä Janne",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-hml.mp3",
        "webURL": "https://iskelmajanne.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Hämeenlinna"
      },
      {
        "station": "Iskelmä Hyvinkää",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-hyv.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Hyvinkää"
      },
      {
        "station": "Iskelmä Jyväskylä",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-jkl.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Jyväskylä, Jämsä, Pihtipudas"
      },
      {
        "station": "Iskelmä Kotka",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-ktk.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Kaakkois-Suomi, Kotka, Kouvola, Lappeenranta, Imatra"
      },
      {
        "station": "Iskelmä Kouvola",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-kvl.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Kaakkois-Suomi, Kotka, Kouvola, Lappeenranta, Imatra"
      },
      {
        "station": "Iskelmä Kuopio",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-kuo.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Kuopio"
      },
      {
        "station": "Iskelmä Lahti",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-lah.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Lahti, Heinola"
      },
      {
        "station": "Iskelmä Lappeenranta",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-lpr.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Kaakkois-Suomi, Kotka, Kouvola, Lappeenranta, Imatra"
      },
      {
        "station": "Iskelmä Mikkeli",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-mli.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Mikkeli"
      },
      {
        "station": "Iskelmä Oulu",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-oul.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Oulu, Haapavesi, Raahe, Sievi"
      },
      {
        "station": "Iskelmä Satakunta",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-rma.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Satakunta, Pori, Rauma, Huittinen"
      },
      {
        "station": "Iskelmä Savonlinna",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-svl.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Savonlinna"
      },
      {
        "station": "Iskelmä Seinäjoki",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-snj.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Seinäjoki"
      },
      {
        "station": "Iskelmä Rovaniemi",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-rov.mp3",
        "webURL": "http://www.iskelmarovaniemi.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Rovaniemi"
      },
      {
        "station": "Iskelmä Rex",
        "bannerPic": "assets/img/logos/Iskelma_Rex_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-rex.mp3",
        "webURL": "https://radiorex.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Pohjois-Karjala, Joensuu"
      },
      {
        "station": "Iskelmä Sastamala",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-sas.mp3",
        "webURL": "https://iskelmajanne.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Hämeenkyrö, Sastamala, Kankaanpää"
      },
      {
        "station": "Iskelmä Tampere",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-tre.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Pirkanmaa, Tampere, Valkeakoski, Vilppula, Ikaalinen"
      },
      {
        "station": "Iskelmä Turku",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-tku.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Varsinais-Suomi, Turku, Loimaa, Forssa, Uusikaupunki"
      },
      {
        "station": "Iskelmä Uusimaa",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-loh.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Lohja, Helsinki, Uusimaa"
      },
      {
        "station": "Iskelmä Vaasa",
        "bannerPic": "assets/img/logos/Iskelma_banner.jpg",
        "logoPic": "assets/img/logos/Iskelma_logo.jpg",
        "streamURL": "http://stream2.bauermedia.fi/isk-vaa.mp3",
        "webURL": "https://www.iskelma.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Vaasa"
      },
      {
        "station": "Järviradio",
        "bannerPic": "assets/img/logos/JarviRadio_banner.jpg",
        "logoPic": "assets/img/logos/JarviRadio_logo.jpg",
        "streamURL": "http://109.236.85.141:7081/jarviradio",
        "webURL": "https://www.jarviradio.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Alajärvi"
      },
      {
        "station": "Spirit FM",
        "bannerPic": "assets/img/logos/SpiritFM_banner.jpg",
        "logoPic": "assets/img/logos/SpiritFM_logo.jpg",
        "streamURL": "http://audio.raa.fi:8000/hifi",
        "webURL": "http://spiritfm.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Helsinki, Turku"
      },
      {
        "station": "Steel FM",
        "bannerPic": "assets/img/logos/SteelFM_banner.jpg",
        "logoPic": "assets/img/logos/SteelFM_logo.jpg",
        "streamURL": "http://ice6.securenetsystems.net/STEELFM",
        "webURL": "http://www.steelfm.ax/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Åland, Mariehamn"
      },
      {
        "station": "Sea FM",
        "bannerPic": "assets/img/logos/SeaFM_banner.jpg",
        "logoPic": "assets/img/logos/SeaFM_logo.jpg",
        "streamURL": "http://s3.myradiostream.com:4976/",
        "webURL": "http://www.seafm.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Oulu, Kemi, Tornio, Rovaniemi"
      },
      {
        "station": "Radio Sandels",
        "bannerPic": "assets/img/logos/RadioSandels_banner.jpg",
        "logoPic": "assets/img/logos/RadioSandels_logo.jpg",
        "streamURL": "http://suomiradio.pro:8080/stream/1/",
        "webURL": "http://www.radiosandels.fi/",
        "about": "",
        "note": "note placeholder",
        "type": "translation of the music type",
        "local": "Pohjois-Savo, Iisalmi, Kuopio, Varkaus"
      },
      {
        "station": "Classic",
        "bannerPic": "assets/img/logos/Classic_banner.jpg",
        "logoPic": "assets/img/logos/Classic_logo.jpg",
        "streamURL": "http://stream.radioclassic.fi:8080/classic",
        "webURL": "http://radioclassic.fi/",
        "about": "",
        "note": "",
        "type": "",
        "local": "Tampere"
      },
      {
        "station": "Radio Dei",
        "bannerPic": "assets/img/logos/RadioDei_banner.jpg",
        "logoPic": "assets/img/logos/RadioDei_logo.jpg",
        "streamURL": "http://isojako.radiodei.fi:8000/yleisohjelma",
        "webURL": "https://www.radiodei.fi/",
        "about": "",
        "note": "",
        "type": "",
        "local": "Suomi"
      },
      {
        "station": "Radio Dei Helsinki",
        "bannerPic": "assets/img/logos/RadioDei_banner.jpg",
        "logoPic": "assets/img/logos/RadioDei_logo.jpg",
        "streamURL": "http://isojako.radiodei.fi:8000/helsinki",
        "webURL": "https://www.radiodei.fi/",
        "about": "",
        "note": "",
        "type": "",
        "local": "Helsinki"
      },
      {
        "station": "Radio Dei Kemi",
        "bannerPic": "assets/img/logos/RadioDei_banner.jpg",
        "logoPic": "assets/img/logos/RadioDei_logo.jpg",
        "streamURL": "http://isojako.radiodei.fi:8000/tornio",
        "webURL": "https://www.radiodei.fi/",
        "about": "",
        "note": "",
        "type": "",
        "local": "Kemi, Tornio"
      },
      {
        "station": "Radio Dei Oulu",
        "bannerPic": "assets/img/logos/RadioDei_banner.jpg",
        "logoPic": "assets/img/logos/RadioDei_logo.jpg",
        "streamURL": "http://isojako.radiodei.fi:8000/oulu",
        "webURL": "https://www.radiodei.fi/",
        "about": "",
        "note": "",
        "type": "",
        "local": "Oulu"
      },
      {
        "station": "Radio Dei Kokkola",
        "bannerPic": "assets/img/logos/RadioDei_banner.jpg",
        "logoPic": "assets/img/logos/RadioDei_logo.jpg",
        "streamURL": "http://isojako.radiodei.fi:8000/kruunupyy",
        "webURL": "https://www.radiodei.fi/",
        "about": "",
        "note": "",
        "type": "",
        "local": "Kokkola"
      },
      {
        "station": "Radio Dei Kristiinankaupunki",
        "bannerPic": "assets/img/logos/RadioDei_banner.jpg",
        "logoPic": "assets/img/logos/RadioDei_logo.jpg",
        "streamURL": "http://isojako.radiodei.fi:8000/kristiinankaupunki",
        "webURL": "https://www.radiodei.fi/",
        "about": "",
        "note": "",
        "type": "",
        "local": "Kristiinankaupunki"
      },
      {
        "station": "Radio Dei Pohjanmaa",
        "bannerPic": "assets/img/logos/RadioDei_banner.jpg",
        "logoPic": "assets/img/logos/RadioDei_logo.jpg",
        "streamURL": "http://isojako.radiodei.fi:8000/lapua",
        "webURL": "https://www.radiodei.fi/",
        "about": "",
        "note": "",
        "type": "",
        "local": "Pohjanmaa, Lapua"
      },
      {
        "station": "Radio Dei Rovaniemi",
        "bannerPic": "assets/img/logos/RadioDei_banner.jpg",
        "logoPic": "assets/img/logos/RadioDei_logo.jpg",
        "streamURL": "http://isojako.radiodei.fi:8000/rovaniemi",
        "webURL": "https://www.radiodei.fi/",
        "about": "",
        "note": "",
        "type": "",
        "local": "Rovaniemi"
      },
      {
        "station": "Radio Dei Turku",
        "bannerPic": "assets/img/logos/RadioDei_banner.jpg",
        "logoPic": "assets/img/logos/RadioDei_logo.jpg",
        "streamURL": "http://isojako.radiodei.fi:8000/turku",
        "webURL": "https://www.radiodei.fi/",
        "about": "",
        "note": "",
        "type": "",
        "local": "Turku"
      },
      {
        "station": "Radio Patmos",
        "bannerPic": "assets/img/logos/RadioPatmos_banner.jpg",
        "logoPic": "assets/img/logos/RadioPatmos_logo.jpg",
        "streamURL": "http://46.28.53.118:7011/radio",
        "webURL": "https://patmos.studio24.fi/",
        "about": "",
        "note": "",
        "type": "",
        "local": "Suomi, Helsinki"
      },
      {
        "station": "Aito Kajaus",
        "bannerPic": "assets/img/logos/RadioKajaus_banner.jpg",
        "logoPic": "assets/img/logos/RadioKajaus_logo.jpg",
        "streamURL": "http://radio.6net.fi:8000/radiokajaus",
        "webURL": "https://www.radiokajaus.fi/",
        "about": "",
        "note": "",
        "type": "",
        "local": "Suomi"
      },
      {
        "station": "Finest FM",
        "bannerPic": "assets/img/logos/FinestFM_banner.jpg",
        "logoPic": "assets/img/logos/FinestFM_logo.jpg",
        "streamURL": "http://212.47.220.188:8000/listen.mp3",
        "webURL": "http://web.finestfm.fi/",
        "about": "",
        "note": "",
        "type": "",
        "local": "Suomi"
      },
      {
        "station": "Radio Helsinki",
        "bannerPic": "assets/img/logos/RadioHelsinki_banner.jpg",
        "logoPic": "assets/img/logos/RadioHelsinki_logo.jpg",
        "streamURL": "http://77.86.233.1:8002/;",
        "webURL": "http://www.radiohelsinki.fi/",
        "about": "",
        "note": "",
        "type": "",
        "local": "Helsinki"
      },
      {
        "station": "Radio Inari",
        "bannerPic": "assets/img/logos/RadioInari_banner.jpg",
        "logoPic": "assets/img/logos/RadioInari_logo.jpg",
        "streamURL": "http://188.117.31.195:8000/radioinari",
        "webURL": "http://www.radiohelsinki.fi/",
        "about": "",
        "note": "",
        "type": "",
        "local": "Inari, Ivalo"
      },
      {
        "station": "",
        "bannerPic": "assets/img/logos/",
        "logoPic": "assets/img/logos/",
        "streamURL": "",
        "webURL": "",
        "about": "",
        "note": "",
        "type": "",
        "local": ""
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
