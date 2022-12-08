package com.user.user.controller;

import com.user.user.model.Usuario;
import com.user.user.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/add")
    public Usuario addUsuario(@RequestBody Usuario usuario) {
        return usuarioService.adicionarUsuario(usuario);
    }

    @GetMapping("/list")
    public List<Usuario> listAllUsuarios() {
        return usuarioService.listUsuarios();
    }

    @GetMapping("/list/{id}")
    public Optional<Usuario> getUsuarioById(@PathVariable Long id) {
        return usuarioService.getUsuarioById(id);
    }

    @PostMapping("/add/list")
    public List<Usuario> addListaUsuario(List<Usuario> usuarioList) {
        return usuarioService.adicionarListaUsuarios(usuarioList);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUsuario(Long id) {
        usuarioService.deletaUsuario(id);
    }

}
