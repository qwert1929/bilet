import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiyatComponent } from './fiyat/fiyat.component';
import { TcnoComponent } from './tcno/tcno.component';

@NgModule({
  declarations: [
    AppComponent,
    FiyatComponent,
    TcnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
