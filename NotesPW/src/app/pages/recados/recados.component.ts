import { Component, OnInit } from '@angular/core';
import { RecadosService } from '../../services/recados.service';
import { RecadoModel } from '../../models/recado.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recados',
  templateUrl: './recados.component.html',
  styleUrls: ['./recados.component.css']
})


export class RecadosComponent implements OnInit {

  recados: RecadoModel[] = [];
  cargando = false;


  

  constructor( private recadosService: RecadosService ) { }

  ngOnInit() {

    this.cargando = true;
    this.recadosService.getRecados()
      .subscribe( (resp:any) => {
        this.recados = resp;
        this.cargando = false;
      });

  }

  borrarRecado( recado: RecadoModel, i: number ) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${ recado.nombreRecado }`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {

      if ( resp.value ) {
        this.recados.splice(i, 1);
        this.recadosService.borrarRecado( recado.id ).subscribe();
      }

    });



  }


}
