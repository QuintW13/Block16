// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;


function randomGen(){
    return {
        name: (NAMES)[Math.floor(Math.random()*(NAMES.length))],
        Occupation: (OCCUPATIONS)[Math.floor(Math.random()*(OCCUPATIONS.length))],
        Price: Math.floor(Math.random()*(PRICE_RANGE.max - PRICE_RANGE.min +1))+PRICE_RANGE.min
    }
}   

function randomGens(){
    const freelanceArr = []
    for(let i=0;i<100;i++){
       const newFree = randomGen()
       freelanceArr.push(newFree)
    }
    return(freelanceArr)
}
const freelancer =randomGens()

function getSum() {
    
    let sum =0
    for(let i=0; i<freelancer.length;i++){
      
      sum = sum + freelancer[i].Price
      
    }
    return sum
  }

function getAvg() {
    
    let getAvg = getSum()/freelancer.length
    return getAvg
  }
console.log(getAvg())

const Avg = getAvg(){
    
}









//const createFree = ()