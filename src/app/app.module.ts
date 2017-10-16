import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TaskList } from '../pages/tasklist/tasklist';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyCsq7ZJKUu4QvKY9zUTdVI2TK5PXwyxiZs",
  authDomain: "ionic2do-3e5c1.firebaseapp.com",
  databaseURL: "https://ionic2do-3e5c1.firebaseio.com",
  projectId: "ionic2do-3e5c1",
  storageBucket: "",
  messagingSenderId: "52330945566"
};

@NgModule({
  declarations: [ 
    MyApp,
    TaskList
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TaskList
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
