package com.br.lead.main.controller;

import com.br.lead.main.model.Produtos;
import com.br.lead.main.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("api/produto/")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @GetMapping("list")
    public List<Produtos> getAll(){
        return produtoService.listarProdutos();
    }

    @GetMapping("list/{id}")
    public Optional<Produtos> getProdutoById(@PathVariable Long id) {
        return produtoService.getProdutoById(id);
    }

    @PostMapping("add")
    public Produtos addProduto(@RequestBody Produtos produtos) {
        return produtoService.adicionarProduto(produtos);
    }
}
