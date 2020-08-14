function getProduct(arr) {
    var temp = [];
    var product = 1;
    for(var i=0; i<arr.length; i++){
        temp[i] = product;
        product *= arr[i];
        console.log(product)
        console.log(arr[i])
    }

    product = 1;
    for(var i=arr.length-1; i>=0; i--){
        temp[i] *= product;
        product *= arr[i];
        console.log(product)
    }

    return temp;
}

console.log(getProduct([1, 2, 3, 4]));
