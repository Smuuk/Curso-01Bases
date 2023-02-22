import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { HeroesModule } from './heroes/listado/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { ATLAModule } from './atla/atla.module';

@NgModule({
  declarations: [
    AppComponent,
    // ContadorComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule ,
    ATLAModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
