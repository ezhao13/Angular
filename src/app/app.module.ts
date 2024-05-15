import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import bootstrap from "bootstrap";
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient}    from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserContext } from './model/userContext';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { UserRequestComponent } from './user-request/user-request.component';
//import { LayoutModule } from './layout/layout.module';
import { MessagesComponent } from './messages/messages.component';
//import { PasswordResetComponent } from './password-reset/password-reset.component';
import { CommonModule } from '@angular/common';
export function HttpLoaderFactory(http: HttpClient) {
 // return new TranslateHttpLoader(http);
return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

const routes: Routes = [
  //{path: 'UserManagementAngularWeb', component : PasswordResetComponent},
  //{path:'', component : AppComponent}
  {path:'', component : MainLayoutComponent}
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    BrowserModule,
    //FormsModule,
    //ReactiveFormsModule, 
    CommonModule,
    LayoutModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  
  ],
  declarations: [
    AppComponent,
    //MainLayoutComponent,
    //HeaderComponent,
    //UserRequestComponent,
    //MessagesComponent
  ],
  providers: [UserContext ],
  bootstrap: [AppComponent]
})
export class AppModule { }
