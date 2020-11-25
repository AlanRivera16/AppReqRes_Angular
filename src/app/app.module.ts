import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar/navbar.component';
import { SearchComponent } from './components/search/search/search.component';
import { HomeComponent } from './components/home/home/home.component';
import { InsertarComponent } from './components/InsertarUs/insertar/insertar.component';

//Para hacer funcionar nuestras rutas
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

//Para hacer peticiones HTTP
import { HttpClientModule } from '@angular/common/http';

// Trabajr con formularios
import { FormsModule} from '@angular/forms';
//Para trabajar con formularios reactivos 
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    InsertarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
