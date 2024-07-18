import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { authGuard } from './services/guards/auth.guard';
import { loginGuard } from './services/guards/login.guard';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
        title: 'Home',
        canActivate:[authGuard]
    },
    {
        path:'login', 
        component: LoginComponent, 
        title: 'Login',
        canActivate:[loginGuard]
    }
];
