package nology.io.todo.todos;

import java.util.Set;
import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import nology.io.todo.category.Category;
import nology.io.todo.category.CategoryRepository;
import nology.io.todo.common.exceptions.NotFoundException;
import nology.io.todo.todocategory.TodoCategory;

@Service
public class TodoService {
    
    private final TodoRepository todoRepository;
    private final CategoryRepository categoryRepository;
    // Constructor based dependency injection is used to inject the TodoRepository and CategoryRepository

    public TodoService(TodoRepository todoRepository, CategoryRepository categoryRepository) { // constructor based dependency injection
        this.todoRepository = todoRepository;
        this.categoryRepository = categoryRepository;
    }

/* -------------------------- get all active todos -------------------------- */

public List<Todo> findAllActive(String sortBy, String sortOrder) {
    Sort sort = createSort(sortBy, sortOrder);
    return todoRepository.findByIsArchivedFalse(sort);
}

/* -------------------------- GET SINGLE TODO BY ID ------------------------- */

public Todo findById(Long id) throws NotFoundException {
    return todoRepository.findById(id)
        .orElseThrow(() -> new NotFoundException("Todo not found " + id));
}



/* -------------------------- get todos by category ------------------------- */

    // fetch all non-archived todos belonging to specific category ID and validates if the category exists
 
    public List<Todo> findByCategoryIdActive(Long categoryId, String sortBy, String sortOrder) {
        Sort sort = createSort(sortBy, sortOrder);
        return todoRepository.findByTodoCategoriesCategoryIdAndIsArchivedFalse(categoryId, sort);
    }

    private Sort createSort(String sortBy, String sortOrder) {
        String field = switch (sortBy != null ? sortBy.toLowerCase() : "duedate") {
            case "name" -> "name";
            case "date", "duedate" -> "dueDate";
            default -> "dueDate";
        };
        
        Sort.Direction direction = "desc".equalsIgnoreCase(sortOrder) 
            ? Sort.Direction.DESC 
            : Sort.Direction.ASC;
        
        return Sort.by(direction, field);
    }

    /* -------------------------- // Create a new todo -------------------------- */
    public Todo createTodo(CreateTodoDTO data) throws NotFoundException {
        Todo todo = new Todo();
        todo.setName(data.getName().trim());
        todo.setDueDate(data.getDueDate());
        todo.setIsCompleted(data.isCompleted());

        todo = todoRepository.save(todo); // save the todo first to get the ID

        Set<Long> categoryIds = data.getCategoryIds();
        if (categoryIds != null && !categoryIds.isEmpty()) { // check for ids
            for (Long catId : categoryIds) {
                Category category = categoryRepository.findById(catId)
                        .orElseThrow(() -> new NotFoundException("Category not found: " + catId));
                TodoCategory todoCategory = new TodoCategory(todo, category);
                todo.getTodoCategories().add(todoCategory);
            }
        }
        return todoRepository.save(todo);
    }
    
    /* ------------------------ update an exisiting todo ------------------------ */
    public Todo updateTodo(Long id, UpdateTodoDTO data) throws NotFoundException {
        Todo existing = todoRepository.findById(id).orElseThrow(() -> new NotFoundException("Todo not found " + id));
        
        if (data.getName() != null) {
            existing.setName(data.getName().trim());
        }

        if (data.getDueDate() != null) {
            existing.setDueDate(data.getDueDate());
        }

        if (data.getIsCompleted() != null) {
            existing.setIsCompleted(data.getIsCompleted());
        }

        if (data.getCategoryIds() != null) {
            existing.getTodoCategories().clear();
            Set<Long> categoryIds = data.getCategoryIds();
            for (Long catId : categoryIds) {
                Category category = categoryRepository.findById(catId)
                        .orElseThrow(() -> new NotFoundException("Category not found: " + catId));

        TodoCategory todoCategory = new TodoCategory(existing, category);
        existing.getTodoCategories().add(todoCategory);
              
            }

        }
        return todoRepository.save(existing);
    }


    /* ----------------------------- Archive a todo ----------------------------- */
    public Todo archiveTodo(Long id) throws NotFoundException {
        Todo todo = todoRepository.findById(id).orElseThrow(() -> new NotFoundException("Todo not found " + id));

        todo.setArchived(true); // soft delete by setting archived to true

        return todoRepository.save(todo);
        }

}
