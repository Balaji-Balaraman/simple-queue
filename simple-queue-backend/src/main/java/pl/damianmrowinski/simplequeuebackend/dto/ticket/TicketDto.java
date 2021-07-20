package pl.damianmrowinski.simplequeuebackend.dto.ticket;

import java.time.LocalDateTime;

import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
@Data
public class TicketDto {

    private final Long id;
    private final String username;
    private final Long priority;
    private final LocalDateTime creationDate;
    private final Boolean active;

}
