package nology.io.todo.todocategory;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import nology.io.todo.category.Category;
import nology.io.todo.todos.Todo;

@Entity
@Table(name = "todo_categories")
public class TodoCategory {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "todo_id", nullable = false)
    private Todo todo;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonIgnoreProperties("todoCategories")
    private Category category;

    public TodoCategory() {
    }

    public TodoCategory(Todo todo, Category category) {
        this.category = category;
        this.todo = todo;
    }


    /* --------------------------- getters and setters -------------------------- */
    
    public Long getId() {
        return id;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Todo getTodo() {
        return todo;
    }

    public void setTodo(Todo todo) {
        this.todo = todo;
    }

    
}
