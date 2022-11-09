package com.br.lead.main.repository;

import com.br.lead.main.model.Lead;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LeadRepository extends CrudRepository<Lead, Long> {
}
