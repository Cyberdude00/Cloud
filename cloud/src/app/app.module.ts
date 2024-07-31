import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Asegúrate de que la ruta sea correcta

import { appRoutes } from './app.routes'; // Importa las rutas

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    // Otros componentes aquí
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes) // Configura las rutas en el módulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
