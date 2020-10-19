function socksForSale(socks){
    socks.sort(function(a, b){
        return a - b;
    });
    var counter = 0;
    for(var i=0; i<socks.length - 1; i++){
        if(socks[i] === socks[i+1]){
            counter++;
            i++;    
        }
    }
    return counter;
}

var socks = [10, 10, 10, 10, 20, 30, 30, 30, 30, 30, 30, 30, 40, 40, 40, 40, 40];
socksForSale(socks); //returns 7