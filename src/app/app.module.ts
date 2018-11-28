import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from '@ionic-native/status-bar';

import { BarcodeScannerPage } from "../pages/barcode-scanner/barcode-scanner";
import { HomePage } from "../pages/home/home";
import { MyApp } from './app.component';
import { DashboardPage } from '../pages/dashboard/dashboard';

import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';


@NgModule({
  declarations: [
    BarcodeScannerPage,
    MyApp,
    HomePage,
    DashboardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BarcodeScannerPage,
    MyApp,
    HomePage,
    DashboardPage
  ],
  providers: [
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    GooglePlus,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
