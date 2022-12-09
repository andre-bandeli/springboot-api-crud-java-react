package com.br.produto.repository;

import com.br.produto.model.Marca;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MarcaRepository  extends CrudRepository<Marca, Long> {
}
