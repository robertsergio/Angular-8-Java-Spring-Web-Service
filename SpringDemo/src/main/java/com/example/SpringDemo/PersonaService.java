
package com.example.SpringDemo;

import java.util.List;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonaService {
    List<Persona> listar();
    Persona obtener(int id);
    Persona add(Persona p);
    Persona edit(Persona p);
    Persona delete(int id);
    
}
