package nology.io.todo.category;

import java.lang.reflect.GenericArrayType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name="categories")   //maps to categories table
public class Category {
    
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(nullable= false, unique=true)
    private String name;

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
    





}
