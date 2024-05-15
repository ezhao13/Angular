import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from 'src/app/layout/main-layout/main-layout.component';
import { UserRequestComponent } from 'src/app/user-request/user-request.component';

const routes: Routes = [
  {
    path: '',  component: MainLayoutComponent,
    children: [{ path: '', component: UserRequestComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRequestRoutingModule { }
