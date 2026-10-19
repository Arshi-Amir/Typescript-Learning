//You can read the property, but you cannot change it after the object is created/initialized.
class Employee {
      constructor(public readonly name : string , public readonly age : number , public joiningYear : number){}
}

let e = new Employee('Tom' , 25 , 2000);
// e.age = 26   since it is readonly property so it cannot be changed


//const vs readonly

// 1- const it is used with variables   while readonly(modifier) is class level property
// 2- const cant be reassigned nor declared without initization
//  while readonly :  a property that can only be set at declaration or in the constructor.
//3- const is enforced at compile time and at runtime.readonly is TypeScript only, checked at compile time and erased in the emitted JS.
