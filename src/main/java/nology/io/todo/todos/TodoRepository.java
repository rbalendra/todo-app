package nology.io.todo.todos;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TodoRepository extends JpaRepository<Todo, Long> {
  

    List<Todo> findByIsArchivedFalse(); // returns todos that are not archived
    // sql will be SELECT * FROM todos WHERE is_archived = false
    List<Todo> findByTodoCategoriesCategoryIdAndIsArchivedFalse(Long categoryId);
   
   
}