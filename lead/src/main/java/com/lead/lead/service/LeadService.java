package com.lead.lead.service;

import com.lead.lead.model.Lead;
import com.lead.lead.repository.LeadRepository;
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

    public List<Lead> getLeads() {
        return (List<Lead>) leadRepository.findAll();
    }

    public Optional<Lead> getLeadById(Long id) {
        return leadRepository.findById(id);
    }

    public List<Lead> addListaLead(List<Lead> leadList) {
        return (List<Lead>) leadRepository.saveAll(leadList);
    }

    public void deleteLead(Long id) {
        leadRepository.deleteById(id);
    }
}
