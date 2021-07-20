package pl.damianmrowinski.simplequeuebackend.app.service.ticket.converter;

import org.springframework.stereotype.Component;
import pl.damianmrowinski.simplequeuebackend.domain.entity.ticket.Ticket;
import pl.damianmrowinski.simplequeuebackend.dto.ticket.TicketDto;

@Component
public class TicketEntityToTicketDtoConverter {

    public TicketDto convert(Ticket ticket) {
        return new TicketDto(
                ticket.getId(),
                ticket.getUsername(),
                ticket.getPriority(),
                ticket.getCreationDate(),
                ticket.isActive()
        );
    }

}
