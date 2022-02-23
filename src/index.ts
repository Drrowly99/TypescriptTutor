let id : number = 4
let string : string = 'this is a string'
let x: any = 39
let bool: boolean = false

let ids: number[] = [5,5,3,2,]
let idz: any[] = ['5','4',5]

//Tuple
let person: [number, string, boolean] = [1, 'divine', true]
//Tuple array
let employee: [number, string, boolean][] 

employee = [
    [1, 'DIDI', true],
    [5, 'top', false],
    [6, 'forbe', true]
]
employee.forEach(e => {
   
    if(e[0] == 5){
        console.log(e)
    }
});
console.log(employee.length)


//Union
let uid : string | number = 22 + 'string'

//Enum

enum Direction{
    up = 4,
    down,
    left = 'left',
    right = 'right'

}
// console.log(Direction.right)

//Objects
type User = {
    mid: number,
    name: string
}
const user: User = {
    mid: 1,
    name: 'john'
}

// Type Assertion
let cid: any = '1'
//let customerId = <number>cid
let customerId = cid as number

//Functions
function addNum(x: number, y: number): number {
    return x + y 
}
// console.log(addNum(9,7))
function log(message: string | number): void {
   console.log(message)
}
log('message is dope ' + 100 + ' ' + 'plus')

//Interface
interface UserInterface {
    readonly mid: number,
    name: string,
    age?: number
}
const user1: UserInterface = {
    mid: 1,
    name: 'john'
}
// user1.mid = 5

interface MathFunc {
    (x:number, y:number):number
}
const add: MathFunc = (x:number,y:number) : number => x+y
let math:MathFunc= (x:number,y:number):number=>{
   return x+y
}
function sub(x:number,y:number):number{
    return x-y
}


//person interface
interface PersonInterface {
    mid: number,
    name: string,
    age?: number
    register(): string
}
class Person implements PersonInterface{
     mid: number
     name: string

    constructor(mid: number,  name: string){
        this.mid = mid
        this.name = name
    }

    register(){ //method
        return `${this.name} is a developer to the core`
    }
}
const Iso = new Person(5, 'Divine Edet')
const philip = new Person(5, 'Philip Ita')
console.log(philip.register())

//Extending classes
class Employee extends Person{
    position: string


    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(5, 'Mufasa', 'programmer')
console.log(emp.register())

//Generics
function getArray <T>(items: T[]): T[]{
    return new Array().concat(items)
}
let numarr = getArray <number>([1,2,3,4,5])
let stringarr = getArray<string>(['tom', 'Ford', 'elect'])
// <numarr.push('tit')>