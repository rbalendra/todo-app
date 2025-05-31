package nology.io.todo.category;

import jakarta.validation.constraints.NotBlank;

public class CreateCategoryDTO {
    
    @NotBlank(message = "Category name must not be blank")
    private String name;

    public CreateCategoryDTO() { //for instantiation by Spring

    }
    
    public CreateCategoryDTO(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}
