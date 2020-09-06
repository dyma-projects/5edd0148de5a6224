import { Component, OnInit ,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;
  @ViewChild("input") el:ElementRef;
  constructor() { }

  ngOnInit() {
  }

  public actualiser(){
    //onsole.log(this.el);
    //onsole.log(this.el.nativeElement);
    this.valeur = this.el.nativeElement.value;
  }

}
