function stringLength(string){
    let counter = 0;
    string.split('').forEach(() => {
    counter = counter + 1;
    });
    if( counter >= 1 && counter <= 10){
        return counter;
    }
    else{
        return false;
    }
}

module.exports = stringLength;