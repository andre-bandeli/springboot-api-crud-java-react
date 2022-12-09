package com.br.produto.service;

import com.br.produto.model.Marca;
import com.br.produto.repository.MarcaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MarcaService {

    @Autowired
    private MarcaRepository marcaRepository;

    public List<Marca> getAllMarcas(){
        return (List<Marca>) marcaRepository.findAll();
    }

    public Marca adicionarMarca(Marca marca) {
        return marcaRepository.save(marca);
    }

    public Optional<Marca> getMarcaById(Long id) {
        return marcaRepository.findById(id);
    }

    public List<Marca> adicionarListaMarcas(List<Marca> marcas) {
        return (List<Marca>) marcaRepository.saveAll(marcas);
    }

    public void deleteMarca(Long id) {
        marcaRepository.deleteById(id);
    }
}
