//basic types
let id: number  = 5//numbers
let company: string = "Kenneth Karani"//strings

let isPublished: boolean = true//boolean

let x: any = 'Hello'//any type

let age: number
age:30
let ids: number[] = [1,2,3,4,5,6] //arrays
let arr:any[]= [1,2,"Hello",'B']
//tuple
let person:[number, string,boolean,any]=[1,"Hello",false,2]
//array tuple
let employee:[number,string][]

employee =[
    [1,"Kelly"],
    [2,"John"],
    [3,"Jill"]
]
//Union Types
//unions : a union formed from two or more other types, representing values that may be
//any one of those types. Holds more than one type
let pid: string | number =22


pid="Hello"

//Enum
//An enum is a special "class" that represents a group of constants (unchangeable variables)
enum Direction1{
    North=1, //North= 'North'
    South,
    West,
    East,
}
//console.log(Direction1.East)//displays 4 when 1 is assigned to North
//Objects in Typescript
const car:{
    //assigning types
    type:string,
    model:string,
    year:number
} = {
    type:"Toyota",
    model:"Corolla",
    year: 2009
}
//alternative method 
type car2 = {
    type:string,
    model:string,
    year:number
}
const car2={
    type:"Toyota",
    model:"Corolla",
    year: 2009
}
//type Assertion
let cid: any = 1
let customerId = <number>cid //implicitly defines customer id into a number and cannot be reassigned to 
//other value
//customerId = true will cause an error
//alternatively you can assert the type like this....
let CustomerID = cid as number


//Fuctions
function AddNum(x:number,y:number):number{
    return x + y //return a value of type number
}
//void
function log(message: string | number):void{
    console.log(message);
}
log(2) //can only accept string and numbers 
 
//interfaces maps classes 

interface UserInterface{
    readonly id:number, //cannot be reassighned
    name:string
    age?:number //optional value
}

const user2: UserInterface={
    id:1,
    name:'John'
}
//interfaces in a function
interface MathFunc{
    (x:number,y:number):number
}
const add:MathFunc=(a:number,b:number):number => a + b;
const sub:MathFunc=(a:number,b:number):number => a - b;
//classes
//Person class using an Interface
interface PersonInterface{
    readonly id:number, //cannot be reassighned
    name:string
    register():string
}
class Person1 implements PersonInterface{
    public id:number
    name:string
    //constructor
    constructor(id:number,name:string){
        this.id=id
        this.name=name
    }
    //method
    register(){
        return `${this.name} is now registered`
    }
}
//parentClass
class Person{
    //access modifiers can be private,public and protected
   public id:number
    name:string
    //constructor
    constructor(id:number,name:string){
        this.id=id
        this.name=name
    }
    //method
    register(){
        return `${this.name} is now registered`
    }
}
const James= new Person(1,"James Kamau")
//sub class or Child Class
class Employee extends Person{
    position: string

    constructor(id:number, name:string, position:string){
        super(id,name)
        this.position=position
    }
}
const emp = new Employee(2, "Ken","Developer")
emp.register();
//Generics 
function getArray(items: any[]):any[]{
return new Array().concat(items)
}
let numArray = getArray([1,2,3,4,5])
let strArray= getArray(['Jackie','Miranda','Johannes'])
numArray.push('hello')//can push a string to an array of numbers
//a generic function
function getArray2<T>(items: T[]):T[]{
    return new Array().concat(items)
    }
    let numArray2 = getArray2([1,2,3,4,5])
    let strArray3= getArray2(['Jackie','Miranda','Johannes'])
   // numArray2.push('hello') -- cannot push a string into an numbers array
    //strArray3.push(5) -- cannot push a number into a strings array