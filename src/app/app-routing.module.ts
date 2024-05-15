import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
//import {PasswordResetComponent} from './password-reset/password-reset.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { UserRequestComponent } from './user-request/user-request.component';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  //{path: 'UserManagementAngularWeb', component : PasswordResetComponent},
  {path:'', component : AppComponent}
  //{path:'', component : MainLayoutComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    TranslateModule
    //FormsModule, ReactiveFormsModule
    //MainLayoutComponent,
    //HeaderComponent
  ],
  declarations: [
    //MainLayoutComponent,
    //HeaderComponent,
    //UserRequestComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
