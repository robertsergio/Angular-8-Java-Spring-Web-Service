import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/modelo/persona';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  persona: Persona = new Persona();
  constructor(private router:Router, private service: ServiceService) { }

  ngOnInit() {
  }
  guardar(){
    
    console.log(this.persona);

    this.service.createPersona(this.persona)
    .subscribe(data => {
      alert("Persona agregada!!!");
      this.router.navigate(["listar"]);
    });
  }

}
