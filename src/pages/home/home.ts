import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Badge } from '@ionic-native/badge';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private badge: Badge) {

  }

  async requestPermission() {
    try {
      let hasPermission = await this.badge.hasPermission();
      console.log(hasPermission);
      if (!hasPermission) {
        let permission = await this.badge.registerPermission();
        console.log(permission);
      }
    } catch (e) {
      console.error(e);
    }
  }

  async setBadges(badgeNumber: number = 0) {
    let d = new Date();
    badgeNumber = d.getSeconds();

    try {
      let badges = await this.badge.set(1);
      console.log(badges);
    } catch (e) {
      console.error(e);
    }
  }
  async getBadges() {
    try {
      let badgeAmount = await this.badge.get();
      console.log(badgeAmount);
    }
    catch (e) {
      console.error(e);
    }
  }

  async increaseBadges(badgeNumber: string) {
  try {
    let badge = await this.badge.increase(Number(badgeNumber));
    console.log(badge);
  } catch (e) {
    console.error(e);
  }
}

async decreaseBadges(badgeNumber: string) {
  try {
    let badge = await this.badge.decrease(Number(badgeNumber));
    console.log(badge);
  } catch (e) {
    console.error(e);
  }
}

async clearBadges(){
  try {
    let badge = await this.badge.clear();
    console.log(badge);
  }
  catch(e){
    console.error(e);
  }
}

}
