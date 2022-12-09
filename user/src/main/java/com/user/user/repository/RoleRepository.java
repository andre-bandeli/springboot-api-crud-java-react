package com.user.user.repository;

import com.user.user.model.ERole;
import com.user.user.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
    Boolean existsByUsername(String useraname);
    Boolean existsByUsername(String email);

}
