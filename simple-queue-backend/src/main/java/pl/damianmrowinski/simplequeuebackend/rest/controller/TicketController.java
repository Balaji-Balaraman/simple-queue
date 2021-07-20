package pl.damianmrowinski.simplequeuebackend.rest.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.damianmrowinski.simplequeuebackend.app.service.ticket.TicketService;
import pl.damianmrowinski.simplequeuebackend.dto.ticket.CreateTicketDto;
import pl.damianmrowinski.simplequeuebackend.dto.ticket.TicketDto;

import java.util.List;

@RestController
@RequestMapping(path = "/tickets")
@AllArgsConstructor
public class TicketController {

    private final TicketService ticketService;

    @PostMapping
    public ResponseEntity<?> saveTicket(@RequestBody @Validated CreateTicketDto createTicketDto) {
        return ticketService.save(createTicketDto)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.badRequest().build());
    }

    @GetMapping
    public List<TicketDto> findAllActiveTickets() {
        return ticketService.findAllActiveTickets();
    }

}
