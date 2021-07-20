package pl.damianmrowinski.simplequeuebackend.job;

import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import pl.damianmrowinski.simplequeuebackend.app.service.ticket.TicketService;

@Component
@RequiredArgsConstructor
public class DeactivateTicketJob {

    private final TicketService ticketService;

    @Scheduled(fixedRate = 20000)
    public void refreshTicketsTable() {
        ticketService.deactivateTicket();
    }

}
