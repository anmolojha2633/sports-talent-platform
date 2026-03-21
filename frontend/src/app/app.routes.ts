import { Routes } from '@angular/router';
import { LandingComponent } from './features/home/landing/landing';
import { LoginComponent } from './features/auth/login/login';
import { SignupComponent} from './features/auth/signup/signup';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent},
    { path: 'auth/login', component: LoginComponent },
  { path: 'auth/signup', component: SignupComponent }
  
];