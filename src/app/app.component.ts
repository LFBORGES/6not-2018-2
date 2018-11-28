import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { BarcodeScannerPage } from "../pages/barcode-scanner/barcode-scanner";
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild(Nav) nav: Nav;
  pages: [{title: string, component: any}]; 

  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    firebase.initializeApp({
      apiKey: "AIzaSyC6CWeHX1_auZkZC36gBc-E69q0gXkuYNk",
      authDomain: "chamadapp1090481613027.firebaseapp.com",
      databaseURL: "https://chamadapp1090481613027.firebaseio.com",
      projectId: "chamadapp1090481613027",
      storageBucket: "chamadapp1090481613027.appspot.com",  
      messagingSenderId: "417740793775"
    });
    
    this.pages= [
      {title: 'Barcode', component: BarcodeScannerPage}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page: {title: string, component: any}): void {
    this.nav.push(page.component);
  }

}

