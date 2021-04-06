const theme = 'Holi Theme 🌈';
console.log(theme); // writes Holi Theme 🌈 to the console

function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal" ;
}

checkEqual(1, 2);

function rangeOfNumbers(startNum, endNum) {
  if(startNum === endNum){
    return [endNum];
  }else{
    return [startNum].concat(rangeOfNumbers(startNum +1, endNum));
  }
};

class Thermostat {
  constructor(fahren){
      this.fahren = fahren;
  }

  get temperature(){
      let celc =  ((5/9) *(this.fahren - 32));
      return celc;
  }
  set temperature(celtemp){
      this.fahren = ((celtemp * 9)/5 + 32);
  }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature;     // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature;         // 26 in Celsius

const createPerson = (name, age, gender) => {
  "use strict";
  return { name, age, gender };
};