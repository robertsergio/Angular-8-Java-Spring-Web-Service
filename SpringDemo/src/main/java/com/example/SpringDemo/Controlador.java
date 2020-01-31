
package com.example.SpringDemo;

import com.example.SpringDemo.Persona;
import com.example.SpringDemo.PersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/personas")
public class Controlador {
    
    @Autowired
    PersonaService service;
    
    
    public String get(){
        return "ok";
    }
    
    @GetMapping
    public List<Persona> listar(){
        return service.listar();
    }
    
    @PostMapping
    public Persona agregar(@RequestBody Persona p){
        return service.add(p);
    }
    
    @GetMapping(path = {"/{id}"})
    public Persona obtener(@PathVariable("id") int id){
        return service.obtener(id);
    }
    
    @PutMapping(path = {"/{id}"})
    public Persona editar(@RequestBody Persona p, @PathVariable("id") int id){
        p.setId(id);
        return service.edit(p);
    }
    @DeleteMapping(path = {"/{id}"})
    public Persona delete(@PathVariable("id") int id){
        return this.service.delete(id);
    }
}
