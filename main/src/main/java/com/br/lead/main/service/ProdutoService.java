package com.br.lead.main.service;

import com.br.lead.main.model.Produtos;
import com.br.lead.main.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public Produtos listarProdutos() {
        return (Produtos) produtoRepository.findAll();
    }
    public Produtos adicionarProduto(Produtos produtos) {
        return produtoRepository.save(produtos);
    }
}
