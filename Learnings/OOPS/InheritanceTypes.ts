// Single Level Inheritance (single parent child)
console.log('Single Level Inheritance ')

class Students {
    name: string = 'Tim';
    Age: number = 20;
    inheritanceLevel() {
        console.log('Single Level')
    }
}

class studentA extends Students {
    name: string = 'SA';
    inheritanceLevel() {
        console.log('Single Parent Child relation')
    }
}
let studA = new studentA();
studA.inheritanceLevel();


//Hierarchical Inheritance (Single Parent ,Multiple child)
console.log('Hierarchical Inheritance')

class Login {
    user: string = 'Admin'
    isLoggedIn() {
        return `${this.user} is Logged In`
    }
    inheritanceLevel() {
        console.log('hierarchical Inheritance: Single Parent ,Multiple child')
    }
}
class employee1 extends Login {
    user: string = 'Employee A'
    isLoggedIn() {
        return `${this.user} is Logged In`
    }
}
class employee2 extends Login {
    user: string = 'Employee B'
    isLoggedIn() {
        return `${this.user} is Logged In`
    }
}
let employeeA = new employee1();
employeeA.inheritanceLevel();
console.log(employeeA.isLoggedIn());

let employeeB = new employee2();
console.log(employeeB.isLoggedIn());


//Multi-Level Inheritance (Grandparent - Parent - child relation)
console.log('Multi-Level Inheritance')

class grandParent {
    name: string = 'Peter'
    grand() {
        console.log('I am Grand parent')
    }
}
class parent extends grandParent {
    parentLevel() {
        console.log('Parent class')
    }
}
class child extends parent {
    child() {
        console.log(`I am child class: ${this.name}. I inherit both grandparent and parent properties`)

    }
}
let c = new child();
c.child();


//Hybrid Inheritance : combo of 2 or more types of inheritance (single, multi , hierarical)

// Super --> used by e1 and e2 (Hierarical)
// Super --> used by e1 (Parent) ---> e1 is used by e (Multi-level)
// Super --> used by e1 ---> it can be named as single level as well or
//  we can create one more class using this super one

console.log('Hybird Inheritance')
class Super {
    user: string = 'Admin'
    isLoggedIn() {
        console.log(`${this.user} is Logged In`)
    }
    inheritanceLevel() {
        console.log('Hybrid')
    }
}
class e1 extends Super {
    user: string = 'Employee A'
    isLoggedIn() {
        return `${this.user} is Logged In. I am using Super class properties`
    }
}
class e2 extends Super {
    user: string = 'Employee B'
    isLoggedIn() {
        return `${this.user} is Logged In.I am using Super class properties`
    }
}

class e extends e1 {
    m() {
        console.log(' Super is my grandparent and e1 is my parent and I am child.So its multi-level')
    }
}

let em = new e1();
em.user;
console.log(em.isLoggedIn());

let em2 = new e2();
em2.user;
console.log(em2.isLoggedIn());

let eMulti = new e();
eMulti.m();


// 1. SINGLE LEVEL

// Parent
//   ↓
// Child


// 2. HIERARCHICAL

//         Parent
//         /    \
//      Child  Child


// 3. MULTILEVEL

// Grandparent
//      ↓
//    Parent
//      ↓
//    Child


// 4. HYBRID

//               Parent
//              /      \
//           Child     Child
//             ↓
//          Grandchild

//       Hierarchical
//           +
//       Multilevel
//           =
//         Hybrid