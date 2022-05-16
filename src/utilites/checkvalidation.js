import validator from 'validator';


export const checkValidity = ( value, rules ) => {
        let isValid = true;
        if ( !rules ) {
            return true;
        }
    
        if ( rules.required ) {
            isValid = value.trim() !== '' && isValid;
        }
    
        if ( rules.minLength ) {
            isValid = value.length >= rules.minLength && isValid
        }
    
        if ( rules.maxLength ) {
            isValid = value.length <= rules.maxLength && isValid
        }
    
        if ( rules.isEmail ) {
           
            isValid = validator.isEmail(value) && isValid
        }
    
        if ( rules.isNumeric ) {
         
            isValid =validator.isNumeric && isValid
        }
    
        return isValid;
    }
    