import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  varDynamique: string ;
  varAge: number ;
  cadeau: string; 
  hobby: hobby;

  constructor() { 
    this.varDynamique = 'Connard' ;
    this.varAge = 40 ;
    this.cadeau = 'vas te faire';
    this.hobby = {
      hobbyUn : 'Branlette' ,
      hobbyDeux : 'Netflix' ,
      hobbyTrois : 'Bouffe' , 
    };

  }

  ngOnInit(): void {}
    }


    interface hobby {

      hobbyUn: string;
      hobbyDeux: string;
      hobbyTrois: string;
      




}
