import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes:string[]=['spiderman ','airoman','holk','thor','capitan'];
  heroeBorrado:string='';


  borrarheroes(){
 this.heroeBorrado=this.heroes.shift() || '';
  }
}
