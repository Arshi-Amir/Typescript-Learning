// base , exponent , result * = base , counter < exponent

function calculatePower() : void{
    let base:number = 4;
    let exponent : number = 3;  // 4*4*4
    let result : number = 1 ;
    let counter = 0
      while (counter < exponent) {
        result = result * base;
        counter++;
      }
      console.log(result)

}
calculatePower();


function calculatePowerMethod2(base : number , exponent : number) : void{
    let result : number = 1 ;
    let counter = 0
      while (counter < exponent) {
        result = result * base;
        counter++;
      }
      console.log(result)

}
calculatePowerMethod2(2,3);