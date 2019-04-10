export default function isbn10(str) {
    if (str.length != 10) return false;
    for (var i = 0, sumpr = 0; i <= str.length - 2; i++){
        if(str[i]==='-') str.splice(i,1)
        sumpr += Number(str[i]) * (str.length - i);
    }
    if (str[str.length - 1] === 'x')
        str.split('')[str.length - 1] = '10';
    if ((sumpr + (Number(str[str.length - 1]))) % 11 == 0) return true;
    else return false;
}