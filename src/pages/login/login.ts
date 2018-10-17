import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  uname="";
  upwd="";
  constructor(public navCtrl: NavController, public navParams: NavParams,private myService:MyHttpService) {
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad LoginPage');
  }
  
  doLogin(){
    //实现登录操作
    //获取用户名和密码发给服务器
    var params="uname="+this.uname+"&upwd="+this.upwd;
    var url="http://localhost/ajia_code/data/user/login.php?"+params;
    //根据服务器端返回的结果发给服务器
    this.myService.sendRequest(url,(result:any)=>{
        if(result.code == 200){
           if(this.navCtrl.canGoBack()){
              this.navCtrl.pop();
           }
        }else{
          //显示一个Toast
          this.myService.showToast("登录失败！");
        }
    });

  }
}
