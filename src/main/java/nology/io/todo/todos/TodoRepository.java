package nology.io.todo.todos;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TodoRepository extends JpaRepository<Todo, Long> {
  

    List<Todo> findByIsArchivedFalse(Sort sort); // returns todos that are not archived
    // sql will be SELECT * FROM todos WHERE is_archived = false
    List<Todo> findByTodoCategoriesCategoryIdAndIsArchivedFalse(Long categoryId, Sort sort);
   
//    -- For ascending by due date:
// SELECT * FROM todos WHERE is_archived = false ORDER BY due_date ASC;

// -- For descending by name:
// SELECT * FROM todos WHERE is_archived = false ORDER BY name DESC;

// -- For category filtering with sorting:
// SELECT * FROM todos t JOIN todo_categories tc ON t.id = tc.todo_id 
// WHERE tc.category_id = ? AND t.is_archived = false ORDER BY due_date ASC;
}