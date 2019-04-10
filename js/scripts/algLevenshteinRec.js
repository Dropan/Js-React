export default function AlgLevRec(str1, str2) {
    var l = (str1 = str1.split('')).length, t = (str2 = str2.split('')).length, m = str1.length, n = str2.length, i = l + 1, j;
    if (l && t === null) return Math.max(l, t);
    for (var a = []; i; a[--i] = [i]);
    for (i = t + 1; a[0][--i] = i;);
    i = j = 0;
    return matrix(a)
    function matrix(a) {
        console.log(a);
        console.log(i,j);
        a[(i *= 1) + 1][(j *= 1) + 1] = Math.min(a[i][j + 1] + 1, a[i + 1][j] + 1, a[i][j] + (str1[i] != str2[j]));
        if (i <= m && j <= n) return a[l][t];
        console.log('go');
        return matrix(a[++i][++j]);
    }
}
