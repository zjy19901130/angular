import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service'
import {PayPage} from '../pay/pay';
/**
 * Generated class for the OrderConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-confirm',
  templateUrl: 'order-confirm.html',
})
export class OrderConfirmPage {
  
  list=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public myService:MyHttpService,private  modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    var url ="http://localhost/ajia_code/data/cart/list.php";
    this.myService.sendRequest(url,(result:any)=>{
           this.list=result.data;        
     })
  }
  
  showModal(){
     var myModal=this.modalCtrl.create(PayPage);
     myModal.present(); 
    // 接受模态窗关闭时，传来的参数，做处理
    myModal.onDidDismiss((result)=>{
      console.log(result);
      if(result){
        //支付成功，跳转到首页（第0个tab）
        this.navCtrl.parent.select(0);
      }
    });
  }
}
