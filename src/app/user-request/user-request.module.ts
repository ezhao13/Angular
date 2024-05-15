import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UserRequestRoutingModule } from './user-request-routing.module';
//import { UserRequestComponent } from './user-request.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    UserRequestRoutingModule
  ],
  declarations: [
    //UserRequestComponent
  ]
})
export class UserRequestModule { }
