import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DniComponent } from './componentes/dni/dni.component';
import { ImcComponent } from './componentes/imc/imc.component';

@NgModule({
  declarations: [
    AppComponent,
    DniComponent,
    ImcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
