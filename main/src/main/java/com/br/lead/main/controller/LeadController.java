package com.br.lead.main.controller;

import com.br.lead.main.model.Lead;
import com.br.lead.main.service.LeadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class LeadController {

    @Autowired
    private LeadService leadService;

    @PostMapping("/add")
    public Lead add(@RequestBody Lead lead) {
        return leadService.addLead(lead);
    }

    @PostMapping("/add/list")
    public List<Lead> addLeadList(@RequestBody List<Lead> leadList) {
        return leadService.adicionarListLead(leadList);
    }

    @GetMapping("/list")
    public List<Lead> list()  {
        return (List<Lead>) leadService.getAllLeads();
    }

    @PostMapping("/list/{id}")
    public Optional<Lead> getById(@PathVariable("id") Long id) {
        return leadService.getLeadById(id);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable("id") Long id) {
        leadService.delete(id);
        return "Lead deletado.";
    }

    @PutMapping("/update/{id}")
    public String update(@PathVariable("id") Long id, @RequestBody Lead lead) {
        leadService.update(id);
        return "Lead atualizado.";
    }
}
