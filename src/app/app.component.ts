import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  
  ngOnInit(): void {
    this.empezarJuego();
  }

  dificultad=6;
  oportunidades=3;
  isJugando=true;

  colores = [];
  ganador:string;
  intentos:number = 0;

  mensajeFinal:string = "";

  empezarJuego(){
    this.colores=[];
    this.ganador="";
    this.intentos=0;
    this.isJugando=true;
    this.mensajeFinal ="";

    console.log("inicie")
    for(let i=1 ;  i<=this.dificultad ; i++){
      this.colores.push(this.generarColoresRandom());
    }

    //Aqui elegimos al ganador
    var myNumeroAleatorio = Math.floor(Math.random()*(this.dificultad-1))+1;
    this.ganador=this.colores[myNumeroAleatorio];
  }

 
  colorClick(colorClickeado){
 
    this.intentos++;

    if(this.oportunidades==this.intentos){
      this.perdiste();
      this.isJugando=false;
      return;
    }

    if(colorClickeado==this.ganador){
      this.ganaste();
      this.isJugando=false;
      return;
    }

  }

  ganaste(){
    this.mensajeFinal="GANASTE!!!";
  }

  perdiste(){
    this.mensajeFinal="PERDISTE!!";
  }


  generarColoresRandom(){
    let long=6;
    const caracteres = "0123456789ABCDEF";
    var color = "";
   
    for (let i=0; i<long; i++) color += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
    color="#"+color;


    return color;

  }




}
