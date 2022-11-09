package com.br.lead.main.service;

import com.br.lead.main.model.Lead;
import com.br.lead.main.repository.LeadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LeadService {

    @Autowired
    private LeadRepository leadRepository;

    public Lead addLead(Lead lead) {
        return leadRepository.save(lead);
    }

    public Optional<Lead> getLeadById(Long id) {
        return leadRepository.findById(id);
    }

    public List<Lead> adicionarListLead(List<Lead> leadList) {
        return (List<Lead>) leadRepository.saveAll(leadList);
    }

    public Lead getAllLeads() {
        return (Lead) leadRepository.findAll();
    }

    public void delete(Long id) {
        leadRepository.deleteById(id);
    }

    public void update(Long id) {
        leadRepository.findById(id).map(lead -> {
            lead.setNome(lead.getNome());
            lead.setDdd(lead.getDdd());
            lead.setTelefone(lead.getTelefone());
            lead.setEmail(lead.getEmail());
            leadRepository.save(lead);
            return "ok";
        });
    }
}
