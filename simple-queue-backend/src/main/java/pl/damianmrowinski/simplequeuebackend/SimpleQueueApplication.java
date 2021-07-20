package pl.damianmrowinski.simplequeuebackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class SimpleQueueApplication {

    public static void main(String[] args) {
        SpringApplication.run(SimpleQueueApplication.class, args);
    }

}
