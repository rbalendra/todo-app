package nology.io.todo.todocategory;

public class TodoCategoryDTO {
    private Long id;
    private String categoryName;
    private Long categoryId;

    public TodoCategoryDTO(TodoCategory todoCategory) {
        this.id = todoCategory.getId();
        this.categoryName = todoCategory.getCategory().getName();
        this.categoryId = todoCategory.getCategory().getId();
    }

    // getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getCategoryName() { return categoryName; }
    public void setCategoryName(String categoryName) { this.categoryName = categoryName; }
    
    public Long getCategoryId() { return categoryId; }
    public void setCategoryId(Long categoryId) { this.categoryId = categoryId; }
}