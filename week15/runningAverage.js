// Create a function runningAverage() 
// that returns a callable function object. 
// Update the series with each given value and 
// calculate the current average.
// EX:
// rAvg = runningAverage();
// rAvg(10) = 10.0;
// rAvg(11) = 10.5;
// rAvg(12) = 11;


function runningAverage() {
    let total = 0;
    let count = 0;
  
    
    
    return function average(value) {
      total += value;
      count++;
      
      return Math.round((total / count) * 100) / 100;
    };
}