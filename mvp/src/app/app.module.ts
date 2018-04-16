import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutes } from "./app.routes";

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './services/auth.service';
import { AuthGuard } from 'app/services/auth-guard.service';

import { FormsModule } from '@angular/forms';
import { MenuComponent } from './views/menu/menu.component';
import { RodapeComponent } from './views/rodape/rodape.component';
import { TesteComponent } from './views/teste/teste.component';

import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserModel } from './services/user.model';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ThankyouJrComponent } from './views/thankyou/thankyou-jr/thankyou-jr.component';
import { ThankyouPlComponent } from './views/thankyou/thankyou-pl/thankyou-pl.component';
import { ThankyouSrComponent } from './views/thankyou/thankyou-sr/thankyou-sr.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    RodapeComponent,
    TesteComponent,
    ThankyouJrComponent,
    ThankyouPlComponent,
    ThankyouSrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    AngularFirestoreModule
  ],
  providers: [AuthService, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
