import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { HttpClient } from '@angular/common/http'; //可优化

import { DetailPage } from '../detail/detail';
import { MyHttpService } from '../../app/utility/service/myhttp.service';

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  carousel=[];
  newArrivalItems=[];
  recommendeItems=[];

  detail= DetailPage;

  constructor(
    private myService:MyHttpService,
    // public myHttp:HttpClient,  //可优化
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad IndexPage');
    var url ='http://localhost/ajia_code/data/product/';
    this.myService.sendRequest(url,(result:any)=>{
       // console.log(result);
        this.carousel= result.carouselItems;
        
        //保存新品上市：newArrivalItems,显示ionScroll
        this.newArrivalItems= result.newArrivalItems;
       // console.log('newArrivalItems',this.newArrivalItems);
  
        //保存推荐商品：recommendedItems,显示在ionList中
        this.recommendeItems = result.recommendedItems;
       // console.log('recommendedItems',this.recommendeItems);
      });

    // this.myHttp.get("http://localhost/ajia_code/data/product/")
    // .subscribe((result:any)=>{
    //   console.log(result);
    //   this.carousel= result.carouselItems;
      
    //   //保存新品上市：newArrivalItems,显示ionScroll
    //   this.newArrivalItems= result.newArrivalItems;
    //   console.log('newArrivalItems',this.newArrivalItems);

    //   //保存推荐商品：recommendedItems,显示在ionList中
    //   this.recommendeItems = result.recommendedItems;
    //   console.log('recommendedItems',this.recommendeItems);
    // });
  }

  jump(fid){
    this.navCtrl.push(DetailPage,{fid});
    //this.navCtrl.pop()
  }

}
