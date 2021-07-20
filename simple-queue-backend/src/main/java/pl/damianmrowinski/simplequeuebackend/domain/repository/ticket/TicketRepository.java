package pl.damianmrowinski.simplequeuebackend.domain.repository.ticket;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pl.damianmrowinski.simplequeuebackend.domain.entity.ticket.Ticket;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long> {

    @Query(
            value = "SELECT * FROM ticket " +
                    "WHERE active = true " +
                    "ORDER BY priority DESC, creation_date",
            nativeQuery = true
    )
    List<Ticket> findAllActiveTickets();

    @Modifying
    @Query(
            value = "UPDATE ticket SET active = false WHERE id=( " +
                    "SELECT id FROM ticket " +
                    "WHERE active = true AND priority IN(1,2,3) " +
                    "ORDER BY priority DESC, creation_date " +
                    "LIMIT 1)",
            nativeQuery = true)
    void deactivateTicket();
}
