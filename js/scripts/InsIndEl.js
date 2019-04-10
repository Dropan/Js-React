export default function InsIndEl(str, in1, in2) {
    if (typeof str === 'number') return Number(InsIndElStr(String(str), in1, in2));
    else if (typeof str === 'string') return InsIndElStr(str, in1, in2);
    else return false;
}
function InsIndElStr(str, in1, in2) {
    let nstr = str.split('');
    if (in1 === in2) return nstr.join('');
    else if (in1 < in2) {
        for (let i = in1; i <= str.length; i++) {
            if (i === in2) {
                nstr[i] = str[i + 1];
                nstr[i] = str[in1];
                break;
            }
            nstr[i] = str[i + 1];
        }
        console.log(str, "\n", nstr.join(''));
        return nstr.join('');
    }
    else {
        for (let i = in1; i <= str.length; i--) {
            if (i === in2) {
                nstr[i] = str[i - 1];
                nstr[i] = str[in1];
                break;
            }
            nstr[i] = str[i - 1];
        }
        console.log(str + "\n" + nstr.join(''));
        return nstr.join('');
    }
}
