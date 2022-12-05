package com.br.lead.main.controller;

import com.br.lead.main.model.Produtos;
import com.br.lead.main.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/produto/")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @GetMapping("list")
    public Produtos getAll(){
        return produtoService.listarProdutos();
    }

    @PostMapping("add")
    public Produtos addProduto(@RequestBody Produtos produtos) {
        return produtoService.adicionarProduto(produtos);
    }
}
