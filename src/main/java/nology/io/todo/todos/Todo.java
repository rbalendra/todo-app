package nology.io.todo.todos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import nology.io.todo.todocategory.TodoCategory;

@Entity
@Table(name = "todos")
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    /* ---------------------------------- tasks --------------------------------- */
    @NotBlank
    @Column(nullable = false)
    private String name;

    @NotNull
    @Column(nullable = false)
    // @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dueDate; // the date the task is due

    @Column(nullable = false)
    private boolean isCompleted = false;   // whether the task is completed or not

    @Column(nullable = false)
    private boolean isArchived = false; // whether the task is archived or not

    
    /* ---------------- relationship between categories and tasks --------------- */
    @OneToMany(mappedBy = "todo", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties("todo")
    private List<TodoCategory> todoCategories = new ArrayList<>();
 
    /* ------------------------------ constructors ------------------------------ */
    
    public Todo() {
    }

    public Todo(String name, LocalDate dueDate, boolean isCompleted) {
        this.name = name;
        this.dueDate = dueDate;
        this.isCompleted = isCompleted;
    }   
    /* ------------------------------- getters and setters ------------------------------- */

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDate dueDate){
        this.dueDate = dueDate;
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public boolean isArchived() {
        return isArchived;
    }

    public void setIsCompleted(boolean isCompleted) {
        this.isCompleted = isCompleted;
    }

    public void setArchived(boolean archived) {
        this.isArchived = archived;
    }

    public List<TodoCategory> getTodoCategories() {
        return todoCategories;
    }

    public void setTodoCategories(List<TodoCategory> todoCategories) {
        this.todoCategories = todoCategories;
    }





}
