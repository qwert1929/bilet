import { Component, INJECTOR, Input, Output ,OnInit} from '@angular/core';
import { TICKETS } from 'src/db-data';
import { Ticket } from 'src/model/course';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-tcno',
  templateUrl: './tcno.component.html',
  styleUrls: ['./tcno.component.css']
})
export class FiyatComponent implements OnInit {
  x: number;

  constructor() { }

  ngOnInit(): void {
  }
  fiyat:number;
    tcKontrolFonk(tcno:any) {
      console.log("girdi");
      var tckontrol,toplam; tckontrol = tcno; tcno = tcno.value; toplam = Number(tcno.substring(0,1)) + Number(tcno.substring(1,2)) +
      Number(tcno.substring(2,3)) + Number(tcno.substring(3,4)) +
      Number(tcno.substring(4,5)) + Number(tcno.substring(5,6)) +
      Number(tcno.substring(6,7)) + Number(tcno.substring(7,8)) +
      Number(tcno.substring(8,9)) + Number(tcno.substring(9,10));
      const strtoplam = String(toplam); 
      const onunbirlerbas = strtoplam.substring(strtoplam.length,strtoplam.length-1);
      
      if(onunbirlerbas == tcno.substring(10,11)) {
        //alert("doğru");
        console.log("girdi");
        this.fiyat = 50;
        return this.indirimli(this.fiyat);
      } 
      else{
        // alert("yanlış");
        this.fiyat = 100;
        return this.fiyat;
      }
      
    }

    indirimli(x:number){

      this.fiyat=(this.x*6)/10;

      return this.fiyat;
    }

}