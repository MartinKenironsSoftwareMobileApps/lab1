let flag: boolean = true;
console.log("The value of flag is: "+flag)

let myNumber:number = 5.444;
console.log("The value of myNumber is: "+myNumber);

let myString: string = "Hello World!";
console.log("The value of myString is: "+myString);

let myArray:number[] =[1,2,3];
for(let i=0;i<myArray.length;i++){
    console.log("The value at position "+(i+1)+ " of myArray is "+myArray[i])
}

let myArray2:Array<number>=[1,2,3];
myArray2.forEach((item)=>
{
    console.log("The Value is "+item)
});

let unKnown:any = "Anything";
console.log("The value of UnKnown is: "+unKnown);