import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';
import { LanguageProvider } from '../../providers/language/language';
import { RateProvider } from '../../providers/rate/rate';
import { AltCurrencyPage } from './alt-currency/alt-currency';

import { AboutPage } from './about/about';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  providers: [RateProvider]
})
export class SettingsPage {
  appName: string;
  currentLanguage: string;
  languages: Array<any>;

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private app: AppProvider,
    private language: LanguageProvider,
    private rate: RateProvider
  ) {
    this.appName = this.app.info.nameCase;

    this.currentLanguage = this.language.getCurrent();
    this.languages = this.language.getAvailables();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  altCurrencyModal() {
    let modal = this.modalCtrl.create(AltCurrencyPage);
    modal.present();
  }

  setLanguage(lang: string) {
    this.currentLanguage = lang;
    this.language.set(lang);
  }

  openAboutPage() {
    this.navCtrl.push(AboutPage);
  }

}