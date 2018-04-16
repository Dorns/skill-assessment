import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./views/login/login.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";

import { AuthGuard } from './services/auth-guard.service';
import { TesteComponent } from "./views/teste/teste.component";
import { ThankyouJrComponent } from "./views/thankyou/thankyou-jr/thankyou-jr.component";
import { ThankyouPlComponent } from "./views/thankyou/thankyou-pl/thankyou-pl.component";
import { ThankyouSrComponent } from "./views/thankyou/thankyou-sr/thankyou-sr.component";

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent
    },
    {
        path: 'teste', 
        canActivate: [AuthGuard],
        component: TesteComponent
    },
    {
        path: 'thank-you-jr', 
        canActivate: [AuthGuard],
        component: ThankyouJrComponent
    },
    {
        path: 'thank-you-pl', 
        canActivate: [AuthGuard],
        component: ThankyouPlComponent
    },
    {
        path: 'thank-you-sr', 
        canActivate: [AuthGuard],
        component: ThankyouSrComponent
    }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
