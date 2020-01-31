import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Persona } from '../../modelo/persona';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  personas: Persona[];
  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getPersonas()
      .subscribe(data=>{
        this.personas = data;
      });
  }

  editar(persona: Persona){
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["edit"]);
  }

  delete(persona: Persona){
    this.service.deletePersona(persona)
    .subscribe(data => {
      this.personas = this.personas.filter(p => p !== persona);
      //alert("Eliminado!!!");
    })
  }
}
