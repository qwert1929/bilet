import { Component, INJECTOR, Input, Output } from '@angular/core';
import { TICKETS } from 'src/db-data';
import { Ticket } from 'src/model/course';
import { DOCUMENT } from '@angular/common';

var  a: number;
var result;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent{

  
  title = 'bilet';
  tickets = TICKETS;

    //incele, close butonlarının çalışmasını sağlayan yapı
    div1:boolean=false;
    div2:boolean=true;
    div3:boolean=true;
    div1Function(){
      this.div1=true;
    }
    div2Function(){
      this.div1=false;
    }


// siteyeGit(){
//   window.open('https://www.biletantalya.com/Ticket/List/AntalyaAquarium',"_self");
// }

constructor() { }
  ngOnInit(): void {
  }

  }




