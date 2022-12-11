import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';


import { RecadosService } from '../../services/recados.service';


import { RecadoModel } from 'src/app/models/recado.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recado',
  templateUrl: './recado.component.html',
  styleUrls: ['./recado.component.css']
})
export class RecadoComponent implements OnInit {

  recado: RecadoModel = new RecadoModel();


  constructor( private recadosService: RecadosService,
               private route: ActivatedRoute,
               private router:Router ) { }

  ngOnInit() {

    const id = ''+this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo' ) {

      this.recadosService.getRecado( id )
      .subscribe( (resp: any) => {
        this.recado = resp;
        this.recado.id = id;
      });

    }

  }

  guardar( form: NgForm ) {

    if ( form.invalid ) {
      console.log('Formulario no válido');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false,
      showConfirmButton:false,
    });
    Swal.showLoading(Swal.getDenyButton());


    let peticion: Observable<any>;

    if ( this.recado.id ) {
      peticion = this.recadosService.actualizarRecado( this.recado );
      // this.router.navigateByUrl('/recados')
    } else {
      peticion = this.recadosService.creaRecado( this.recado );
      // this.router.navigateByUrl('/recado')
    }

    peticion.subscribe( resp => {

      Swal.fire({
        title: this.recado.nombreRecado,
        text: 'Se actualizó correctamente',
        icon: 'success'
      });

    });



  }

}
