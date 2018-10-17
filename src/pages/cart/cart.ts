import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service'
import { LoginPage } from '../login/login'
//import { IndexPage} from '../index/index'
import {OrderConfirmPage} from '../order-confirm/order-confirm'
/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  
  cartList=[];
  isAllSelect=false;//记录是否全选
  constructor(public navCtrl: NavController, public navParams: NavParams,public myHttp:MyHttpService) {
  }

  ionViewDidEnter() {
      var url ="http://localhost/ajia_code/data/cart/list.php" ;
      this.myHttp.sendRequest(url,(result:any)=>{
          
          if(result.code==300){
            this.navCtrl.push(LoginPage);
          }else if(result.code==200){
            this.cartList=result.data;
            //给购物车list中的每个商品，添加一个isselected属性
            //遍历this。list数组中的每一个对象，添加一个属性isSelected用来记录当前商品是否被选中
            for(var i=0;i<this.cartList.length;i++){
              this.cartList[i].isSelected=false;
            }
          }
      });
  }
  
  //跳转到首页(ionTabs第0个tab被选中)
  jumpToIndex(){
     //this.navCtrl.push(IndexPage); 
      this.navCtrl.parent.select(0);
  }

  //处理全选时的行为
  slectAll(){
    //遍历list中所有的商品，将isSelected跟isAllSelect保持一致
    for(var i=0;i<this.cartList.length;i++){
       this.cartList[i].isSelected=this.isAllSelect;
    }
  }
  //处理某一个商品操作选中
  selectOne(){
    var result=true;
    for(var i=0;i<this.cartList.length;i++){
          result=result && this.cartList[i].isSelected
     }
     
    this.isAllSelect=result;
  }

  //计算被选中的商品的价格总和
  calcAll(){
     var totalPrice=0;
     for(var i=0;i<this.cartList.length;i++){
        var p = this.cartList[i];
        if(p.isSelected){
            totalPrice+=(p.count*p.price);
        }
     }
     return totalPrice;
  }

  //修改商品数量 isAdd 为true，自增，为false，自减
  modifyCount(isAdd,index){
    if(isAdd){
      this.cartList[index].count++;
    }else{
      if(this.cartList[index].count == 1){
        return
      }
      this.cartList[index].count--;
    }
  }
  
  //跳转到订单确认页
  jumpToOC(){
    this.navCtrl.push(OrderConfirmPage);
  }

  
}
