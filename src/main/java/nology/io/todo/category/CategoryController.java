package nology.io.todo.category;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import nology.io.todo.common.exceptions.NotFoundException;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@RequestMapping("/categories")
public class CategoryController {


    /* ------------------- delegate business logic to service ------------------- */
    private final CategoryService categoryService;

    CategoryController(CategoryService categoryService) { //constructor based dependency injection
        this.categoryService = categoryService;
    }

    /* -------------------------------- ENDPOINTS ------------------------------- */

    /* ----------------------------- GET /Categories ---------------------------- */
    // returns a list of available categories

    @GetMapping
    public ResponseEntity<List<Category>> getAllCategories() {
        List<Category> allCategories = this.categoryService.findAll();
        return new ResponseEntity<>(allCategories, HttpStatus.OK);
    }

    /* ---------------------------- POST /Categories ---------------------------- */
        //create new category

       @PostMapping
       public ResponseEntity<Category> createCategory(@Valid @RequestBody CreateCategoryDTO data){
           //convert DTO -> Entity and save via service
           Category saved = this.categoryService.create(data);
           //return HTTP 201 in the response body
           return new ResponseEntity<>(saved, HttpStatus.CREATED);
       }
    
    /* --------------------------- UPDATE or PATCH /Categories --------------------------- */
    //update name of existing category
       
    @PutMapping("/{id}")
     public ResponseEntity<Category> updateById(
            @PathVariable Long id,
             @Valid @RequestBody UpdateCategoryDTO data) throws NotFoundException {
         // Attempt to update via service, which returns Optional<Category>
         Optional<Category> result = this.categoryService.updateById(id, data);

         // If the Optional is empty, throw our custom NotFoundException
         Category updated = result.orElseThrow(
                 () -> new NotFoundException("Could not update category with id " + id + " it does not exist"));
         // Return HTTP 200 OK with the updated Category in the body
         return new ResponseEntity<>(updated, HttpStatus.OK);
     }
    

    /* --------------------------- DELETE /Categories --------------------------- */
    //delete existing category by id
    @DeleteMapping("/{id}")
    public ResponseEntity<Void>deleteById(@PathVariable Long id) throws NotFoundException {
        // Attempt to delete via service, which returns boolean
        boolean deleted = this.categoryService.deleteById(id);
        if (deleted){
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
        throw new NotFoundException("Could not delete category with id " + id + " it does not exist");
    }

}
// 