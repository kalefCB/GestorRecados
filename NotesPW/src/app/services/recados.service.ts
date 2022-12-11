import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecadoModel } from '../models/recado.model';
import { map, delay } from 'rxjs/operators';

interface Person {
  id: string;
  nombreRecado: string;
nombre: string;
telefono: string;
recado: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecadosService {


  private url = 'https://proyectoesfera-ad6ab-default-rtdb.firebaseio.com/';


  constructor( private http: HttpClient ) { }


  creaRecado( recado: RecadoModel ) {

    return this.http.post(`${ this.url }/recados.json`, recado)
            .pipe(
              map( (resp: any) => {
                recado.id = resp.name;
                return recado;
              })
            );

  }

  actualizarRecado( recado: RecadoModel ) {

    const recadoTemp = {
      ...recado
    };

 
    return this.http.put(`${ this.url }/recados/${ recado.id }.json`, recadoTemp);


  }

  borrarRecado( id: string ) {

    return this.http.delete(`${ this.url }/recados/${ id }.json`);

  }


  getRecado( id: string ) {

    return this.http.get(`${ this.url }/recados/${ id }.json`);

  }


  getRecados() {
    return this.http.get(`${ this.url }/recados.json`)
            .pipe(
              map( this.crearArreglo ),
              delay(0)
            );
  }



  private crearArreglo( recadosObj: any ) {

    const recados: RecadoModel[] = [];

    Object.keys( recadosObj ).forEach( key => {

      const recado: RecadoModel = recadosObj[key];
      recado.id = key;

      recados.push( recado );
    });


    return recados;

  }


}
