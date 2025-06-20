# TODO-APP - Full Stack Application 

# BACK END
A RESTful API backend for a todo/task management application built with Spring Boot and MySQL.
Todo (Task Manager) is a full stack CRUD application designed to add everyday tasks whether to clean the dishes or read a page or two of your favourite novel. Basic functionality includes Create, update and delete. 

## BACKEND Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [To Run Locally](#to-run-locally)
- [Database Seeding](#database-seeding)
- [Error Handling](#error-handling)
- [Testing](#testing)

## Features

- **Todo Management**: Create, read, update, and delete todos
- **Category Management**: Organise todos with categories
- **Many-to-Many Relationships**: Todos can belong to multiple categories
- **Task Completion Tracking**: Mark todos as completed/incomplete
- **Soft Delete**: Archive todos instead of permanent deletion
- **Sorting & Filtering**: Sort todos by date/name and filter by category
- **Data Validation**: Input validation with proper error responses
- **CORS Support**: Cross-origin resource sharing for frontend integration


## Tech Stack

- **Backend Framework**: Spring Boot 3.5
- **Language**: Java
- **Database**: MySQL
- **ORM**: Spring Data JPA (Hibernate)
- **Build Tool**: Maven
- **Testing**: JUnit 5, Spring Boot Test
- **Validation**: Spring Boot Validation
- **JSON Processing**: Jackson



## Project Structure

```
📦src
 ┣ 📂main
 ┃ ┣ 📂java
 ┃ ┃ ┗ 📂nology
 ┃ ┃ ┃ ┗ 📂io
 ┃ ┃ ┃ ┃ ┗ 📂todo
 ┃ ┃ ┃ ┃ ┃ ┣ 📂category
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Category.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CategoryController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CategoryRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CategoryService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CreateCategoryDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UpdateCategoryDTO.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂exceptions
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜NotFoundException.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ServiceValidationException.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ValidationErrors.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂config
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ModelMapperConfig.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜WebConfig.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂todocategory
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜TodoCategory.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜TodoCategoryDTO.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂todos
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CreateTodoDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Todo.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜TodoController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜TodoRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜TodoService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UpdateTodoDTO.java
 ┃ ┃ ┃ ┃ ┃ ┗ 📜TodoApplication.java
 ┃ ┗ 📂resources
 ┃ ┃ ┣ 📂static
 ┃ ┃ ┣ 📂templates
 ┃ ┃ ┣ 📜application.properties
 ┃ ┃ ┗ 📜banner.txt
 ┗ 📂test
 ┃ ┣ 📂java
 ┃ ┃ ┗ 📂nology
 ┃ ┃ ┃ ┗ 📂io
 ┃ ┃ ┃ ┃ ┗ 📂todo
 ┃ ┃ ┃ ┃ ┃ ┣ 📂todo
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CategoryEndToEndTest.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜TodoEndToEndTest.java
 ┃ ┃ ┃ ┃ ┃ ┗ 📜TodoApplicationTests.java
 ┃ ┗ 📂resources
 ┃ ┃ ┣ 📂schemas
 ┃ ┃ ┃ ┣ 📜todo-list-schema.json
 ┃ ┃ ┃ ┗ 📜todo-schema.json
 ┃ ┃ ┗ 📜application.properties
```

## API Endpoints

### Todo Endpoints
| Method | Endpoint | Description | Parameters |
|--------|----------|-------------|------------|
| `GET` | `/todos` | Get all active todos | `categoryId`, `sortBy`, `sortOrder` |
| `POST` | `/todos` | Create a new todo | Request body: `CreateTodoDTO` |
| `GET` | `/todos/{id}` | Get todo by ID | Path: `id` |
| `PATCH` | `/todos/{id}` | Update todo | Path: `id`, Body: `UpdateTodoDTO` |
| `DELETE` | `/todos/{id}` | Archive todo (soft delete) | Path: `id` |

### Category Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/categories` | Get all categories |
| `POST` | `/categories` | Create a new category |
| `DELETE` | `/categories/{id}` | Delete category |

### Request/Response Examples
```json
POST /todos
{
    "name": "Complete project documentation",
    "dueDate": "2024-01-15",
    "isCompleted": false,
    "categoryIds": [1, 2]
}

PATCH /todos/1
{
    "isCompleted": true,
    "categoryIds": [1]
}
```
## To Run Locally
### Prerequisites
- Java 17 or higher
- Maven 3.6+
- mySQL 8.0+

### Setup Steps
1) Clone the repository
```md
git clone <repository-url>
cd todo
```
2) Configure MySQL Database
- Create a MySQL database named todo_db
- Update database credentials in application.properties
```java
# Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/todo_db
spring.datasource.username=your_username
spring.datasource.password=your_password

# JPA Configuration
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```
3) Run the Application
```bash
mvn spring-boot:run
```
4) Access the API in POSTMAN
- Base URL: ``http://localhost:8080``
- API endpoints: ``http://localhost:8080/todos, http://localhost:8080/categories``

5) Build for production
```bash
   # Create JAR file
./mvnw clean package


# Run the JAR
java -jar target/todo-0.0.1-SNAPSHOT.jar
```

## Database Seeding
### The application uses Spring Data JPA with Hibernate for database management:

Schema Generation: Auto-generated from entity classes
Tables Created:
- ``todos`` - Main todo items
- ``categories`` - Todo categories
- ``todo_categories`` - Join table for many-to-many relationship

```sql
-- Categories
INSERT INTO categories (name) VALUES ('Work'), ('Personal'), ('Shopping');

-- Todos
INSERT INTO todos (name, due_date, is_completed, is_archived) 
VALUES ('Buy groceries', '2024-01-15', false, false);
```

## Error Handling
- Validation Errors: 400 Bad Request with detailed field errors
- Resource Not Found: 404 Not Found for non-existent resources
- Server Errors: 500 Internal Server Error with generic messages
- CORS Errors: Proper CORS headers for cross-origin requests

## Testing
### Testing Framework
- **Unit Tests**: JUnit 5
- **Integration Tests**: Spring Boot Test with REST Assured
- **Database**: H2 in-memory database for testing
- **JSON Schema Validation**: Custom schemas for API response validation

### Test Configuration
The tests use H2 in-memory database with the following configuration:
- **Database**: H2 (in-memory)
- **URL**: `jdbc:h2:mem:testdb`
- **Schema**: Auto-created and dropped per test run
- **H2 Console**: Enabled for debugging

### API Testing with REST Assured
Integration tests use REST Assured for API endpoint testing:
- **HTTP Client**: REST Assured for making API calls
- **Response Validation**: JSON schema validation against predefined schemas
- **Database State**: Clean state for each test with H2's create-drop strategy

### JSON Schema Validation
Custom JSON schemas validate API responses:
- [`todo-schema.json`](src/test/resources/schemas/todo-schema.json) - Validates single todo responses
- [`todo-list-schema.json`](src/test/resources/schemas/todo-list-schema.json) - Validates todo list responses

### Test Data Management
- **Isolation**: Each test runs with a fresh H2 database instance
- **Cleanup**: Automatic cleanup with `create-drop` DDL strategy
- **Seeding**: Test data created programmatically in test methods
   
