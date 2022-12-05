package com.br.lead.main.repository;

import com.br.lead.main.model.Produtos;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends CrudRepository<Produtos, Long> {
}
