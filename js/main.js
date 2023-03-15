//50 miles= distanceToPump
//25mpg
//2g left
//multiply fuel left with mpg
//if that equals
//you have enough to make it
//if not youre out of luck

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (fuelLeft * mpg === distanceToPump){
      return true
    } else {
      return false
    }
}
