function reverseString(string){
    arr = [];
    string.split('').forEach((e) => {
    arr.unshift(e)
    a = arr.join('');
})
return String(a);
}

module.exports = reverseString;