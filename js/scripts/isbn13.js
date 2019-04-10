export default function isbn13(str) {
    if (str.length != 13) return false;
    if (str.slice(0, 3) !== '978' && '979') return false;
    let sumpr = 0, strk = [];
    for (let i = 0; i <= str.length - 1; i++)
        if (str[i] === '-') strk[i] = str.splice(i, 1);
        else strk[i] = str[i];
    strk[str.length - 1] = '0';
    for (let i = 0; i <= str.length - 1; i++)
        if (i % 2 == 0) sumpr += Number(strk[i]);
        else sumpr += Number(strk[i]) * 3;
    if (Number(str[str.length - 1]) === (10 - (sumpr % 10)) && 10) return true;
    else return false;
}