import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Output() changementCompteur = new EventEmitter();
  @Input('res') result:number;
  constructor() { }

  ngOnInit() {
  }

  public incrementer(){
    this.result++;
    this.outChangementCompteur();
  }
  public decrementer(){
    this.result--;
    this.outChangementCompteur();
  }

  public outChangementCompteur(): void{
    this.changementCompteur.emit({
      valeur1: this.result,
      //valeur2: "!"+ this.result + "!" 
    }) ;
  }
  
}
