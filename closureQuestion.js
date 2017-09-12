var closureAlert = function() {
    var x = 0; 
    var alerter = function() {
        console.log(++x);
    }
    return alerter;
}

var myAlert = closureAlert();
var myAlert2 = closureAlert();

myAlert();
myAlert();    //question: what do we get here?
myAlert2();   //question: what do we get here?
