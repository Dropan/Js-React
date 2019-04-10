import isbn from "./isbn"

export default class IsbnValidator {
    Validate(str) {
        if (isbn(str) === true) return true;
        else return false;
    }
};