package nology.io.todo.category;

import java.lang.foreign.Linker.Option;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import jakarta.validation.Valid;

@Service
public class CategoryService {
   
    private final CategoryRepository categoryRepository; // dependency injection where the repository is injected into the service

    // constructor based dependency injection
    public CategoryService(CategoryRepository categoryRepository) { 
        this.categoryRepository = categoryRepository;
    }


 //  this method will convert the DTO to an entity and save it to the database
    public Category create(CreateCategoryDTO data) {
        Category newCategory = new Category();
        newCategory.setName(data.getName().trim());
        Category savedCategory = this.categoryRepository.save(newCategory);
        return savedCategory;
    }



    public List<Category> findAll() {
        return this.categoryRepository.findAll();
    }

    public Optional<Category> findById(Long id) {
        return this.categoryRepository.findById(id);
    }


    public Optional<Category> updateById(Long id, UpdateCategoryDTO data) {
        Optional<Category> foundCategory = this.findById(id);
       
        if (foundCategory.isEmpty()) {
            return Optional.empty(); // or throw NotFoundException
        }
        Category categoryFromDB = foundCategory.get();
        categoryFromDB.setName(data.getName().trim());
        Category savedCategory = this.categoryRepository.save(categoryFromDB);
        // save the updated category back to the database
        return Optional.of(savedCategory);

    }

    public boolean deleteById(Long id) {
        Optional<Category> foundCategory = this.findById(id);
        if (foundCategory.isEmpty()) {
            return false; // or throw NotFoundException
        }
        Category categoryFromDB = foundCategory.get();
        this.categoryRepository.delete(categoryFromDB);
        return true; // deletion successful
    }
    
}
