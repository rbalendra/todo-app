package nology.io.todo.todos;

import java.time.LocalDate;
import java.util.Set;

import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CreateTodoDTO { // need to know if it is valid data from the client
    
    @NotBlank(message = "Title cannot be blank")
    private String name;

    @NotNull(message = "Due date cannot be null")
    @FutureOrPresent(message = "Due date must be today or in the future")
    private LocalDate dueDate;

    private boolean isCompleted = false; // default value

    private Set<Long> categoryIds; // IDs of categories associated with the todo

/* --------------------------- getters and setters -------------------------- */

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean isCompleted) {
        this.isCompleted = isCompleted;
    }

    public Set<Long> getCategoryIds() {
        return categoryIds;
    }

    public void setCategoryIds(Set<Long> categoryIds) {
        this.categoryIds = categoryIds;
    }
}
