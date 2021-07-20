package pl.damianmrowinski.simplequeuebackend.app.service.ticket.converter;

import org.springframework.stereotype.Component;
import pl.damianmrowinski.simplequeuebackend.domain.entity.ticket.Ticket;
import pl.damianmrowinski.simplequeuebackend.dto.ticket.CreateTicketDto;

@Component
public class CreateTicketDtoToTicketEntityConverter {

    public Ticket convert(CreateTicketDto createTicketDto) {
        return new Ticket(
                createTicketDto.getUsername(),
                createTicketDto.getPriority(),
                true
        );
    }

}
