import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Badge } from '@capawesome/capacitor-badge';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage implements OnInit {
  message = '';
  constructor() { }

  async ngOnInit() {
    const supported = await Badge.isSupported();
    this.message = `This device ${supported ? 'supports' : 'does not support'} badges. `;
    const perm = await Badge.checkPermissions();
    if (perm.display !== 'granted') {
      await Badge.requestPermissions();
    }
    const status = await Badge.checkPermissions();
    this.message += ` (${status.display})`;
  }
  public async setBadge() {
    const count = this.randomIntFromInterval(1, 100);
    await Badge.set({ count });
    alert(`Badge set to ${count}`);
  }

  public async doNotification() {
    await LocalNotifications.schedule({
      notifications: [
        { title: 'test', body: 'message', id: this.randomIntFromInterval(1, 10000) }]
    })
  }

  private randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
