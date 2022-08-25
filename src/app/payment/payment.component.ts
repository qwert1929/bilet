import { Component, INJECTOR, Input, Output } from '@angular/core';
import { TICKETS } from 'src/db-data';
import { Ticket } from 'src/model/course';
import { DOCUMENT } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})


export class PaymentComponent{



  title = 'bilet';
  tickets = TICKETS;

    div1:boolean=false;
    div2:boolean=true;
    div3:boolean=true;
    div1Function(){
      this.div1=true;
    }
    div2Function(){
      this.div1=false;
    }


siteyeGit(){
  window.open('https://www.biletantalya.com/Ticket/List/AntalyaAquarium',"_self");
}
constructor() { }

  ngOnInit(): void {
  }
  
    
    
}
