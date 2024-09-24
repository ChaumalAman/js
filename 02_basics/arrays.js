//declaration
const array=[0,1,2,3,4,5]

const heroes =["Shaktiman","nagraj"]

const arr2= new Array(0,1,2,3,4,5)
  
array.push(6)  // add new element at end
array.pop() // deletes last element at end
array.unshift(9) // add new element at start but time consuming
array.shift() // deletes element at start
// console.log(array);

// console.log(array.includes(8));
// console.log(array.indexOf(3));

const strarr =arr2.join()
// console.log(typeof strarr);

//slice and splice

// console.log("1",array);

const slar=array.slice(1,3) // copy of array is taken
// console.log(slar);
// console.log("2",array);

const spar = array.splice(1,3) // original array is there
// console.log(spar);
// console.log("3",array);



const marvel_heroes=["Ironman", "thor", "Hulk"]

const dc_heroes = ["Superman", "Flash", "Batman" ]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes); // output => [ 'Ironman', 'thor', 'Hulk', [ 'Superman', 'Flash', 'Batman' ] ] change in original array

const all__heroes =marvel_heroes.concat(dc_heroes)
// console.log(all__heroes); // output =>[ 'Ironman', 'thor', 'Hulk', 'Superman', 'Flash', 'Batman' ] new arr created and joins oly one arr

//spread operator. it can add multiple arrays 

const all_new_heroes =[ ...marvel_heroes, ...dc_heroes, ...heroes]
// console.log(all_new_heroes); //output => ['Ironman','thor','Hulk','Superman', 'Flash','Batman', 'Shaktiman', 'nagraj']

const another_array=[1,2,3,[4,6],[5,[4,7]]];

const flat_another_array=another_array.flat(Infinity) 

console.log(flat_another_array);

console.log(Array.isArray("Thor"));
console.log(Array.from("Thor"));
const score1=100
const score2=200

console.log(Array.of(score1,score2))
 