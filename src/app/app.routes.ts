import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { SearchComponent } from './components/search/search/search.component';
import { InsertarComponent } from './components/InsertarUs/insertar/insertar.component';

//Exportar una constante que será nuestro arreglo de rutas 
export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'insertar', component: InsertarComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'}
];