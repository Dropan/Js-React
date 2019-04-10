export default function AlgLevUnRec(str1, str2) {
    var l = (str1 = str1.split('')).length, t = (str2 = str2.split('')).length, m = str1.length, n = str2.length;
    if (l && t === null) return Math.max(l, t);
    for (var a = [], i = l + 1; i; a[--i] = [i]);
    for (i = t + 1; a[0][--i] = i;);
    for (i = -1; ++i < m;)
        for (let j = -1; ++j < n;)
            a[(i *= 1) + 1][(j *= 1) + 1] = Math.min(a[i][j + 1] + 1, a[i + 1][j] + 1, a[i][j] + (str1[i] != str2[j]));
    console.log("Matrix:\n", a, "\nDistance: " + a[l][t]);
    return a[l][t];
}