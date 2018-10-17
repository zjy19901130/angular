import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ToastController } from 'ionic-angular';

import { NotFoundPage } from '../not-found/not-found';
import { CartPage } from '../cart/cart';

import { MyHttpService } from '../../app/utility/service/myhttp.service'
import {LoginPage} from '../login/login'
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  details={};
  notfound = NotFoundPage;
  cart =  CartPage;

  constructor(
    private myService:MyHttpService,
    public toastCtrl:ToastController,
    public myHttp:HttpClient,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
    this.myHttp.get("http://localhost/ajia_code/data/product/details.php?lid="+this.navParams.data.fid)
    .subscribe((result:any)=>{
      console.log('result',result);
      this.details= result.details;
      console.log(this.details);
    });
  }

  addToCart(){
    var url ="http://localhost/ajia_code/data/cart/add.php?lid="+this.navParams.data.fid+"&buyCount=1"
    //用升级后的网络请求服务来发送请求
    this.myService.sendRequest(url,(result:any)=>{
       // console.log("result",result);
        var addResult = "";
        if(result.code ==200){
          addResult='添加成功'
        }else{
          if(result.code ==300){
            this.navCtrl.push(LoginPage);
          }
          addResult = '添加失败'
        }
        //添加到购物车之后，显示一个toast！
        var myToast = this.toastCtrl.create(
          {
            message:addResult,
            duration:2000
          }
        );
        myToast.present();
      })

    //发网络请求未封装
    // this.myHttp.get("http://localhost/ajia_code/data/cart/add.php?lid="+this.navParams.data.fid+"&buyCount=1",{withCredentials:true})
    // .subscribe((result:any)=>{
    //   console.log("result",result);
    //   var addResult = "";
    //   if(result.code ==200){
    //     addResult='添加成功'
    //   }else{
    //     addResult = '添加失败'
    //   }
    //   //添加到购物车之后，显示一个toast！
    //   var myToast = this.toastCtrl.create(
    //     {
    //       message:addResult
    //     }
    //   );
    //   myToast.present();
    // });

  }

}
