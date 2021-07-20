package pl.damianmrowinski.simplequeuebackend.app.service.ticket;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.damianmrowinski.simplequeuebackend.app.service.ticket.converter.CreateTicketDtoToTicketEntityConverter;
import pl.damianmrowinski.simplequeuebackend.app.service.ticket.converter.TicketEntityToTicketDtoConverter;
import pl.damianmrowinski.simplequeuebackend.domain.entity.ticket.Ticket;
import pl.damianmrowinski.simplequeuebackend.domain.repository.ticket.TicketRepository;
import pl.damianmrowinski.simplequeuebackend.dto.ticket.CreateTicketDto;
import pl.damianmrowinski.simplequeuebackend.dto.ticket.TicketDto;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TicketService {

    private static final Long VIP = 2L;
    private static final Long EMERGENCY = 3L;

    private final TicketRepository ticketRepository;
    private final CreateTicketDtoToTicketEntityConverter createTicketDtoToTicketEntityConverter;
    private final TicketEntityToTicketDtoConverter ticketEntityToTicketDtoConverter;

    @Value("${pin.vip}")
    private String vipPin;
    @Value("${pin.emergency}")
    private String emergencyPin;

    @Transactional
    public Optional<TicketDto> save(CreateTicketDto createTicketDto) {
        if (VIP.equals(createTicketDto.getPriority()) && !vipPin.equals(createTicketDto.getPin())) {
            return Optional.empty();
        } else if (EMERGENCY.equals(createTicketDto.getPriority()) && !emergencyPin.equals(createTicketDto.getPin())) {
            return Optional.empty();
        } else {
            Ticket ticket = createTicketDtoToTicketEntityConverter.convert(createTicketDto);
            ticketRepository.save(ticket);
            return Optional.of(ticketEntityToTicketDtoConverter.convert(ticket));
        }
    }

    @Transactional(readOnly = true)
    public List<TicketDto> findAllActiveTickets() {
        List<Ticket> tickets = ticketRepository.findAllActiveTickets();
        return tickets.stream()
                .map(ticketEntityToTicketDtoConverter::convert)
                .collect(Collectors.toList());
    }

    @Transactional
    public void deactivateFirstTicket() {
        ticketRepository.deactivateFirstTicket();
    }

}
