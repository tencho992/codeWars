// Make a function that will return 
// a greeting statement that uses an input; 
// your program should return, 
// "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote 
// or the program may not execute properly]

//level fairly easy

function greet(name){
    let person = name
    return `Hello, ${person} how are you doing today?` 
  }

// Bob needs a fast way to calculate the 
// volume of a cuboid with three values: 
// the length, width and height of the cuboid. 
// Write a function to help Bob with this calculation.


class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}