import isbn10 from "./isbn10"
import isbn13 from "./isbn13"

export default function isbn(str) {
    if (str.length == 10)
        if (isbn10(str) === true) return true;
        else false;
    else if (str.length == 13)
        if (isbn13(str) === true) return true;
        else false;
}