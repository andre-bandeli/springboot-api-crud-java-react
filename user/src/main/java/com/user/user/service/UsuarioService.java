package com.user.user.service;

import com.user.user.model.Usuario;
import com.user.user.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario adicionarUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Optional<Usuario> getUsuarioById(Long id) {
        return usuarioRepository.findById(id);
    }

    public List<Usuario> listUsuarios() {
        return (List<Usuario>) usuarioRepository.findAll();
    }

    public List<Usuario> adicionarListaUsuarios(List<Usuario> usuarioList) {
        return (List<Usuario>) usuarioRepository.saveAll(usuarioList);
    }

    public void deletaUsuario(Long id) {
        usuarioRepository.deleteById(id);
    }

    public void updateUsuario(Long id) {
        usuarioRepository.findById(id).map(
                usuario -> {
                    usuario.setNome(usuario.getNome());
                    usuario.setEmail(usuario.getEmail());
                    usuario.setUsername(usuario.getUsername());
                    usuario.setPassword(usuario.getPassword());
                    return "atualizado!!";
                }
        );
    }
}
