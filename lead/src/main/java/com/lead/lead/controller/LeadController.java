package com.lead.lead.controller;

import com.lead.lead.model.Lead;
import com.lead.lead.service.LeadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/lead")
@CrossOrigin
public class LeadController {

    @Autowired
    private LeadService leadService;

    @PostMapping("/add")
    public Lead addLead(@RequestBody Lead lead) {
        return leadService.addLead(lead);
    }

    @GetMapping("/list")
    public List<Lead> getListLead(){
        return leadService.getLeads();
    }

    @GetMapping("/list/{id}")
    public Optional<Lead> getLeadById(@PathVariable Long id) {
        return leadService.getLeadById(id);
    }

    @PostMapping("/add/list")
    public List<Lead> addListaLead(@RequestBody List<Lead> leadList) {
        return leadService.addListaLead(leadList);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteLead(@PathVariable Long id) {
        leadService.deleteLead(id);
    }




}
