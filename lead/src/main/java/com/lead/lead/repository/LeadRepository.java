package com.lead.lead.repository;

import com.lead.lead.model.Lead;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LeadRepository extends CrudRepository<Lead, Long> {
}
