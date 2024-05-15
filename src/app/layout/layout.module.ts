import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
//import { BsModalModule } from 'ng2-bs3-modal';
//import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {AppComponent} from '../app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MessagesComponent } from '../messages/messages.component';
import { UserRequestComponent } from '../user-request/user-request.component';
import { UserRequestModule } from '../user-request/user-request.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    TranslateModule,
    //BsModalModule,
    //MatTabsModule,
    UserRequestModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule
    ],
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    MessagesComponent,
    UserRequestComponent,
    //AppComponent,
    ConfirmDialogComponent
    
  ],
})
export class LayoutModule { }
