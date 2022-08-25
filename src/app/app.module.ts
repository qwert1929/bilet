import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { TcnoComponent } from './fiyat/fiyat.component';
import { FiyatComponent } from './tcno/tcno.component';

@NgModule({
  declarations: [
    AppComponent,
    FiyatComponent,
    TcnoComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
