package nology.io.todo.todos;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import nology.io.todo.common.exceptions.NotFoundException;
import org.springframework.web.bind.annotation.PutMapping;



@RestController
@RequestMapping("/todos") // maps requests to /todos to this controller
public class TodoController {
    
    private final TodoService todoService; // delegates the business logic to the service layer

    TodoController(TodoService todoService) { // constructor based dependency injection
        this.todoService = todoService;
    }

    /* -------------------------------- ENDPOINTS ------------------------------- */
/* ------------------------------- GET TODOS ------------------------------- */
    @GetMapping
    public ResponseEntity<List<Todo>> getAllTodos(@RequestParam(required = false) Long categoryId,
              @RequestParam(required = false) String sortBy,
            @RequestParam(required = false, defaultValue = "asc") String sortOrder,
            @RequestParam(required = false) Boolean completed) throws NotFoundException {
        List<Todo> allTodos;
        if (categoryId != null) {
            allTodos = this.todoService.findByCategoryIdActive(categoryId);
        } else {
            allTodos = this.todoService.findAllActive();
        }

      

        // Sort the results
        if (sortBy != null) {
            allTodos = sortTodos(allTodos, sortBy, sortOrder);
        }
        return new ResponseEntity<>(allTodos, HttpStatus.OK);
    }
    
    // this method is create to sort the todos based on the provided criteria
    private List<Todo> sortTodos(List<Todo> todos, String sortBy, String sortOrder) {
        Comparator<Todo> comparator = switch (sortBy.toLowerCase()) {
            case "date", "duedate" -> Comparator.comparing(Todo::getDueDate);
            case "name" -> Comparator.comparing(Todo::getName, String.CASE_INSENSITIVE_ORDER);
            case "created" -> Comparator.comparing(Todo::getId); 
            default -> Comparator.comparing(Todo::getDueDate);
        };
        
        if ("desc".equalsIgnoreCase(sortOrder)) {
            comparator = comparator.reversed();
        }
        
        return todos.stream().sorted(comparator).collect(Collectors.toList());
    }

    /* ----------------------------- GET TODO BY ID ----------------------------- */
    @GetMapping("/{id}")
    public ResponseEntity<Todo> getTodoById(@PathVariable Long id) throws NotFoundException{
        Todo todo = this.todoService.findById(id);
        return new ResponseEntity<>(todo, HttpStatus.OK);
    }


    /* ------------------------------- POST todos ------------------------------- */
    @PostMapping
    public ResponseEntity<Todo> createTodo(@Valid @RequestBody CreateTodoDTO data) throws NotFoundException {
        // convert DTO -> Entity and save via service
        Todo saved = this.todoService.createTodo(data);
        // return HTTP 201 in the response body
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }
    
    /* ----------------------------- Archive/delete ----------------------------- */
    @DeleteMapping("/{id}")
    public ResponseEntity<Todo> archiveTodo(@PathVariable Long id) throws NotFoundException {
        Todo archivedTodo = this.todoService.archiveTodo(id); 
        return new ResponseEntity<>(archivedTodo, HttpStatus.OK);
    }
    
    /* --------------------------------- update --------------------------------- */
    @PatchMapping("/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable Long id, @Valid @RequestBody UpdateTodoDTO data)
            throws NotFoundException {
        Todo updatedTodo = this.todoService.updateTodo(id, data);
        return new ResponseEntity<>(updatedTodo, HttpStatus.OK);
    }

  

}
