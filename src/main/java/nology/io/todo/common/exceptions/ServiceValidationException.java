package nology.io.todo.common.exceptions;

import nology.io.todo.common.ValidationErrors;

public class ServiceValidationException extends Exception {

    private ValidationErrors errors;

    public ServiceValidationException(ValidationErrors errors) {
        this.errors = errors;
    }

    public ValidationErrors getErrors() {
        return errors;
    }   
    
}
