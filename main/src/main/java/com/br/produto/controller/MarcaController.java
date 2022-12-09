package com.br.produto.controller;

import com.br.produto.model.Marca;
import com.br.produto.service.MarcaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/marca/")
public class MarcaController {

    @Autowired
    private MarcaService marcaService;

    @PostMapping("add")
    public Marca addMarca(@RequestBody Marca marca) {
        return marcaService.adicionarMarca(marca);
    }

    @GetMapping("list")
    public List<Marca> getAllMarcas() {
        return marcaService.getAllMarcas();
    }

    @GetMapping("list/{id}")
    public Optional<Marca> getMarcaById(Long id) {
        return marcaService.getMarcaById(id);
    }
}
