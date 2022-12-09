package com.user.user.controller;

import com.user.user.model.Usuario;
import com.user.user.response.JwtResponse;
import com.user.user.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping("/api/usuario")
public class UsuarioController {

    @Autowired
    Usuario usuario;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    private UsuarioService usuarioService;


    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stram()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles));
    }



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
