package pl.damianmrowinski.simplequeuebackend.domain.entity.ticket;

import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    private Long priority;

    private boolean active;

    @CreationTimestamp
    private LocalDateTime creationDate;

    public Ticket(String username, Long priority, boolean active) {
        this.username = username;
        this.priority = priority;
        this.active = active;
    }

}
