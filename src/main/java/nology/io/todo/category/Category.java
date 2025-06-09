package nology.io.todo.category;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
import nology.io.todo.todocategory.TodoCategory;

@Entity
@Table(name="categories")   //maps to categories table
public class Category {
    
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(nullable= false, unique=true)
    private String name;

/* ------------------------------ relationship ------------------------------ */
@OneToMany(mappedBy = "category",
            cascade=CascadeType.ALL, orphanRemoval = true) // cascade + orphanRemoval so that when a Category is deleted all TodoCategory join rows are deleted first
    @JsonIgnoreProperties({ "todo", "category" }) // ignore the todo and category properties in the TodoCategory class
    
    private List<TodoCategory> todoCategories = new ArrayList<>();

/* ------------------------------ constructors ------------------------------ */
    public Category() {
    }


/* --------------------------- getters and setters -------------------------- */
    public Long getId() {
        return id;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
        
    public List<TodoCategory> getTodoCategories() {
        return todoCategories;
    }


    public void setTodoCategories(List<TodoCategory> todoCategories) {
        this.todoCategories = todoCategories;
    }




}
