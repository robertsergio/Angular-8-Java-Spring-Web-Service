import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../modelo/persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:8080/SpringDemo/personas";

  getPersonas(){
    return this.http.get<Persona[]>(this.url);
  }

  createPersona(persona: Persona){
    return this.http.post<Persona>(this.url, persona);
  }

  obtenerPersona(id: number){
    return this.http.get<Persona>(this.url+"/"+id);
  }

  updatePersona(persona: Persona){
    return this.http.put<Persona>(this.url+"/"+persona.id,persona);
  }
  deletePersona(persona: Persona){
    return this.http.delete<Persona>(this.url+"/"+persona.id)
  }
}
