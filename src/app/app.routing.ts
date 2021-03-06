import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

//Layouts
import { MainComponent } from './layouts/main.component';

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";
import { CateringComponent } from "./catering/catering.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { MediaComponent } from "./media/media.component";
import { DeliveryOrderComponent } from "./delivery-order/delivery-order.component";

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: "menu",
                component: MenuComponent
            },
            {
                path: "catering",
                component: CateringComponent
            },
            {
                path: "aboutus",
                component: AboutUsComponent
            }, 
            {
                path: "media",
                component: MediaComponent
            },
            {
                path: "delivery",
                component: DeliveryOrderComponent
            }
        ]
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
