import { Routes } from '@angular/router';
import { FormComponent } from './Components/form/form.component';
import { HomeComponent } from './Components/home/home.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { PdpPageComponent } from './Components/pdp-page/pdp-page.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'form',
        component: FormComponent
    },
    {
        path: 'Databinding',
        component: DataBindingComponent
    },
    {
        path: 'productList',
        component: ProductListComponent
    },
    {
        path: 'product/:id',
        component: PdpPageComponent
    },
    {
        path: "**",
        component: PagenotfoundComponent
    }
];
