import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MakeupproductsComponent } from './makeupproducts/makeupproducts.component';
import { AddmakeupComponent } from './addmakeup/addmakeup.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'makeupproducts',
    component: MakeupproductsComponent,
    children: [{ path: 'addmakeup', component: AddmakeupComponent }],
  },
];
