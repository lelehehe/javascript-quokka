function sum() {
    var result = 0; 
    for(var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

var data = sum(2, 3, 4);
data;