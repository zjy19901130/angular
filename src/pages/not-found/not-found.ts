import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotFoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-not-found',
  templateUrl: 'not-found.html',
})
export class NotFoundPage {
  countdown = 3;
  myTimer=null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.countdown=3;
    this.myTimer=setInterval(()=>{
      this.countdown--;
      if(this.countdown<=0){
        if(this.navCtrl.canGoBack()){
          this.navCtrl.pop();
        }else{
          clearInterval(this.myTimer);
        }
      
      }
    },1000)
    
  }

  ionViewWillLeave(){
    clearInterval(this.myTimer);
  }
}
