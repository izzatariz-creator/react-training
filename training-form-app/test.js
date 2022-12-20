function validateEmailFormat(fieldName, value) {
    if (value.length <= 0) {
        return `${fieldName} must be filled out.`;
    } else if (!/\S+@\S+\.\S+/.test(value)) {
        return `${fieldName} must be a valid format`;
    } else return `EMAIL IS OK`;
}

console.log(validateEmailFormat("email", "izzat@gmail.com"));

