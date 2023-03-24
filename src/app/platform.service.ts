import { Injectable, NgZone } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { App } from '@capacitor/app';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  capStyle: boolean;

  constructor(private platform: Platform, private alertController: AlertController) {
    this.initialize();
  }

  initialize() {
    this.platform.resume.subscribe(() => {
      if (!this.capStyle) {
          this.presentAlert('Resume');
      }
    });

    App.addListener('appStateChange', ({ isActive }) => {
      console.log('appStateChange isActive', isActive);
      if (isActive) {
        if (this.capStyle) {
          this.presentAlert('Resume');
        }
      }
    });
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}


