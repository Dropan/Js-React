export default function RetListPropAndVal(o) {
    for (var key in o)
        console.log("Свойство: " + key + "\nЗначение: " + o[key]);
    return true;
}
