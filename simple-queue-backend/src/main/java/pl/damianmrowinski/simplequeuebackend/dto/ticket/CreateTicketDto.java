package pl.damianmrowinski.simplequeuebackend.dto.ticket;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Getter
@RequiredArgsConstructor
public class CreateTicketDto {

    @Min(value = 1, message = "min priority = 1")
    @Max(value = 3, message = "max priority = 3")
    private final long priority;

    @NotEmpty
    @Size(min = 5, max = 50, message = "username must be between 5 and 50 characters")
    private final String username;

    @Size(min = 4, max = 4)
    private final String pin;

}
