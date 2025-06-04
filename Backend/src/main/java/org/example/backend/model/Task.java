package org.example.backend.model;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document(collection = "tasks")
public class Task {
    @Id
    private String id;

    @NotBlank
    private String title;

    private String description;

    @NotBlank
    private String status;

    private LocalDateTime createdAt = LocalDateTime.now();
}

