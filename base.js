// let arr =[1,2,3,4,6,6,6,8,9,0]

// let arr2 =arr.filter((object)=>object===5)

// console.log(arr2);

// let myFunction = (a) =>{
//     console.log(a);
// }

// myFunction("dsfgfdsgdsg")




// const value = arr.find((mm)=>mm === 3)

// console.log(value);

// const string = "mira"



// arr.filter((arr)=>{
//     let 
// })

// const brototype= {
//     ceo:"nikhil kilivayil",
//     place:"calicut",
//     print:function(company){
//        return`${this.ceo}is the ceo of ${company} in ${this.place}`
//     }
// }

// const founders = {
//     ceo:"faisal",
//     place:"kochin"
// }

// let detailes=brototype.print.bind(founders,"brototype")
// brototype.print("brototype")

// console.log(detailes());


// const brototype= {
//     ceo:"nikhil kilivayil",
//     place:"calicut",
// }

// function print(company,possision){
//     console.log(`${this.ceo}is the ${possision} of ${company} in ${this.place}`);
// }

// print.apply(brototype,["amir","ceo"])

// print.call(brototype,"amir","ceo")

//  

//  let sum = arr.reduce((sum,element)=>{
//     sum = sum+element
//     return sum
//  },0)

//  console.log(sum);

// let max = arr.reduce((max,element)=>{
//     if(max < element){
//         max=element
//     }
//     return max
// })

// console.log(max);

// const x = {} 

// console.log(Object.keys(x).length );

// let interval = () =>{
//     setInterval(()=>{
//         console.log('hello');
//     },1000)
// }

// let stop = ( ) =>{
//     clearInterval(interval)
// }

// interval()

// console.log("hi");

// stop()

// 'use strict'
// x = 10
// console.log("hello");


// let arr =['1','9','3','4','6','6','6','8','3','0']

// arr = arr.map(parseInt)

// console.log(typeof arr[0]);


// let arr2 = arr.filter(x => {
//     return x%2==0
// })

// console.log(arr2);

// let arr2 = arr.reduce((max,value)=>{
//     if(max<value){
//         max=value
//     }
//     return max
// },0)

// console.log(arr2);

// let arr3 = arr.filter(x=>{
//     let dup=x
//     let pos=0
//     const arr2=[]
//     if(dup!==x){
//         arr2[pos]=x
//         pos ++
//     }
//     return arr2
// })
// console.log(arr3);


// let arr = [1, 2, 3, 4, 6, 6, 6, 8, 9, 0]

// console.log(arr.filter((x) => x % 2 == 1));  

// let arr2 = arr.map((x)=>Math.sqrt(x))
// console.log(arr2);


// let hoisting 

// console.log(hoisting);

// hoisting = 5

// function hello(){
//     let a = 10
//     let arrow= () =>{
//         console.log(this.a);
//     }
//     arrow()
// }


// hello()