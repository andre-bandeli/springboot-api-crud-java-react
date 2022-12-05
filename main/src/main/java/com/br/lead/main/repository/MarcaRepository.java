package com.br.lead.main.repository;

import com.br.lead.main.model.Marca;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MarcaRepository  extends CrudRepository<Marca, Long> {
}
