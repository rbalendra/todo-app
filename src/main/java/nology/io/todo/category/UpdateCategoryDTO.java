package nology.io.todo.category;

import jakarta.validation.constraints.NotBlank;

public class UpdateCategoryDTO {

        @NotBlank(message = "Category name must not be blank")
        private String name;
        
    public UpdateCategoryDTO() {
    } // for instantiation by Spring


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
