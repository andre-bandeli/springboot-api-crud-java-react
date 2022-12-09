package com.br.produto.service;

import com.br.produto.model.Produtos;
import com.br.produto.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public List<Produtos> listarProdutos() {
        return (List<Produtos>) produtoRepository.findAll();
    }

    public Optional<Produtos> getProdutoById(Long id) {
        return produtoRepository.findById(id);
    }
    public Produtos adicionarProduto(Produtos produtos) {
        return produtoRepository.save(produtos);
    }
}
