package com.br.produto.repository;

import com.br.produto.model.Produtos;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends CrudRepository<Produtos, Long> {
}
