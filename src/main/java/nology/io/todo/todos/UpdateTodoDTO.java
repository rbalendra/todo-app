package nology.io.todo.todos;

import java.time.LocalDate;
import java.util.Set;

import jakarta.validation.constraints.NotBlank;

public class UpdateTodoDTO {

    // @NotBlank(message="Name cannot be blank")
    private String name;

    private LocalDate dueDate;
    private Boolean isCompleted;
    private Boolean isArchived;
    private Set<Long> categoryIds;
  

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
    public Boolean getIsCompleted() {
        return isCompleted;
    }
    public void setIsCompleted(Boolean isCompleted) {
        this.isCompleted = isCompleted;
    }
    public Boolean getIsArchived() {
        return isArchived;
    }
    public void setIsArchived(Boolean isArchived) {
        this.isArchived = isArchived;
    }
    public Set<Long> getCategoryIds() {
        return categoryIds;
    }
    public void setCategoryIds(Set<Long> categoryIds) {
        this.categoryIds = categoryIds;
    }

}
