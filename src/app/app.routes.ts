import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LandingComponent } from './components/pages/landing/landing.component';

export const routes: Routes = [
    {
        path:"",
        component: LoginComponent
    },
    {
        path:"register",
        component:RegisterComponent
    },
    {
        path:'inicio',
        component:LandingComponent
    },
    {
        path: "**",
        component: LoginComponent
    }
];
