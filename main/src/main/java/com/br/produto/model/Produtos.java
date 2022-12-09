package com.br.produto.model;

import com.sun.istack.NotNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Produtos {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @NotNull
    private String nome_modelo;

    @NotNull
    private Double preco;

    private String descricao;

    public Produtos(Long id, String nome_modelo, Double preco, String descricao) {
        this.id = id;
        this.nome_modelo = nome_modelo;
        this.preco = preco;
        this.descricao = descricao;
    }

    public Produtos() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome_modelo() {
        return nome_modelo;
    }

    public void setNome_modelo(String nome_modelo) {
        this.nome_modelo = nome_modelo;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
