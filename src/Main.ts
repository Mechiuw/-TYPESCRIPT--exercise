//1
function sum(a1:any,a2:any){
    return a1 + a2;
}
console.log(sum(2,4));

//2
const xarray = [5,10,15,20];
function arr(s:any[]){
    return s.reduce((ac,cu) => ac + cu,0);
}
console.log(arr(xarray));

//3
const Person = {
    name : "mark",
    age : 18
}
function mapObj(x1:object){
    return {...x1};
}

console.log(mapObj(Person));

//4
class Rectangle {
    width:any;
    height:any;

    calculateArea(){
        return this.width * this.height;
    }
}
const rex = new Rectangle();
rex.width = 10;
rex.height = 20;
console.log(rex.calculateArea());

//5
function generics(x:Array<String>){
    return x[0];
}
const arrays = ["gta 6", "is","awesome"];
console.log(generics(arrays));

//6
function reversed(word:string){
    const chars = word.split('').reverse();
    const cmb = chars.join("");
    return cmb;
}

console.log(reversed("ta gnikool uoy tahw"));

//7 ascending
function sortArrayAsc(arx:Array<number>){
    return arx.sort((a:any,b:any) => a - b);
}
//7 descending
function sortArrayDesc(arx:Array<number>){
    return arx.sort((a:any,b:any) => b - a);
}
const arrax = [7,32,74,475,2,15];
console.log(sortArrayAsc(arrax));
console.log(sortArrayDesc(arrax));

//8
type Doll = {
    name : string;
} 
const doll1: Doll = { name : "anabelle" }
const doll2: Doll = { name : "jackie" }
const doll3: Doll = { name : "brownie" }
const objArr: Doll[] = [ doll1,doll2,doll3 ];
function mapOb(pp: Doll[]): Doll[] {
    return pp.sort((a,b) => a.name.localeCompare(b.name));
}
console.log(mapOb(objArr));

//9
class Circle {
    phi = 3.14;
    radius: any;
    calculateArea(){
        return this.phi * this.radius;
    } 
    calculateCircumfence(){
        
        return 2 * this.phi * this.radius;
    }
}
const firstCircle = new Circle();
firstCircle.radius = 20;
console.log(firstCircle.calculateArea());
console.log(firstCircle.calculateCircumfence());

//10
function mapKeys(obj:any){
    return Object.keys(obj);
}
const student1 = { 'a' : 1, 'b' : 2 }
const student2 = { 'c' : 3, 'd' : 4 }
console.log('keys 1 : ',mapKeys(student1));
console.log('keys 2 : ',mapKeys(student2));

//11
function recursively(arl: number[], index: number = 0): void {
    if (index >= arl.length) {
        return;
    }
    if (arl[index] % 2 !== 0) {
        console.log('odd');
    } 
    recursively(arl, index + 1);
}
const arl = [22, 5, 3, 34, 7, 8, 82, 2, 4, 6, 7, 33, 10];
recursively(arl);

//12
function algoPalindrome(str1:string){
    const sep2 = str1.split('').reverse().join('');
    if(str1 == sep2){
        console.log("palindrome");
    }
    else {
        console.log("not palindrome");
    }
}
algoPalindrome("civic");

//13
const xax = [6,2,4,3,5,9,1];
function bubbleSort(b:number[]) :void{
    let x:number;
    for(let i = 0; i < b.length;i++){
        for(let j = 0; j < b.length - 1 - i;j++){
            if(b[j] > b[j + 1]){
                x = b[j];
                b[j] = b[j+1];
                b[j+1] = x;
            }
        }
    }
    b.forEach(x => console.log(x))
}
bubbleSort(xax);

//14
const conq = [1,2,3,4,6,7];
function binarySearch(arr:number[],look:number){
    let a = arr.find(x => x.valueOf() == look);
    if(a){
        console.log(`found ${a}`);
    } else {
        console.log(`not found ${look}`);
    }
   
}
binarySearch(conq,7);
 





 
