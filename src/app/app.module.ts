import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule} from '@angular/common/http'
import { MyHttpService} from "./utility/service/myhttp.service"

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IndexPage } from '../pages/index/index';
import { DetailPage } from '../pages/detail/detail';
import { CartPage } from '../pages/cart/cart';
import { LoginPage } from '../pages/login/login';
import { PayPage } from '../pages/pay/pay';
import { OrderConfirmPage } from '../pages/order-confirm/order-confirm';
import { UserCenterPage } from '../pages/user-center/user-center';
import { NotFoundPage} from '../pages/not-found/not-found';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    IndexPage,
    DetailPage,
    CartPage,
    LoginPage,
    PayPage,
    OrderConfirmPage,
    UserCenterPage,
    NotFoundPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    IndexPage,
    DetailPage,
    CartPage,
    LoginPage,PayPage,
    OrderConfirmPage,
    UserCenterPage,
    NotFoundPage
  ],
  providers: [
    MyHttpService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
