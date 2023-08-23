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
