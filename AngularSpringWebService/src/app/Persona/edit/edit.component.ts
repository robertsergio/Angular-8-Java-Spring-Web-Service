import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/persona';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  persona : Persona = new Persona();
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.editar();
  }

 editar(){
    let id = localStorage.getItem("id");
    this.service.obtenerPersona(+id)
    .subscribe(data =>{
      this.persona = data;
    });
 }

 actualizar(persona:Persona){
   this.service.updatePersona(persona)
   .subscribe(data =>{
     this.persona = data;
     alert("Actualizado!!!");
     this.router.navigate(["listar"]);
   })
 }
}
