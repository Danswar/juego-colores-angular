import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  @Input() colorHexa; 
  @Input() habilitado:boolean;

  @Output() onColorClick =  new EventEmitter();

  constructor() {}

  ngOnInit() {}


  eventoClick(){
    if(this.habilitado){
      this.habilitado=false;
      this.onColorClick.emit(this.colorHexa);
    }
  }

  

}
