import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';

import { routes } from './app.routes';

import { AngularFireModule } from 'angularfire2';
import { AuthService} from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { UploadComponent } from './upload/upload.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCOL_GgaWIYbQAdSvZzF0RH9w8nnQRG_jU",
  authDomain: "aomai-f24a2.firebaseapp.com",
  databaseURL: "https://aomai-f24a2.firebaseio.com",
  projectId: "aomai-f24a2",
  storageBucket: "aomai-f24a2.appspot.com",
  messagingSenderId: "1050288730700"
};


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    LoginComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthService,AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
