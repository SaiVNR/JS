// Write a JavaScript program to create the dot products of two given 3D vectors.

// Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.

function vectorProduct(vector1, vector2) {
    var product = 0;
    for(var i = 0; i < 3; i++) product += vector1[i] * vector2[i];
    return product;
}