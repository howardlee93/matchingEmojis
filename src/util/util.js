//util

//if array is pair
//if array is same

import emojis from './emoji.json';


// export const validate = (array) =>{
//     let dup = false;

//     for (let i = 0; i < array.length; i++){
//         if (array.indexOf(array[i]) !== i){
//             dup = true
//         }
//     }

//     return dup && array.length === 2 
// }

export const validate = (array) =>{
    let dup = false;
    if (array[0] === array[1]) dup = true

    return dup && array.length === 2 
}

export const generateArray = (level)=>{
    let arr= [];
    for (let i = 1; i <= level **2; i++){
        arr.push(emojis[i])// arr.push(i); //emojis[i]
    }
    let dup = Math.floor(Math.random()*arr.length +1);
    //pick random num from arr
    //select random num not dup and replace
    //pick random num from arr
    //select random num not dup and replace

    arr = arr.slice(arr.indexOf(dup)).concat(arr.slice(0,arr.indexOf(dup)))
    arr.pop();
    arr.push(arr[dup]);

    //randomize
    return shuffle(arr);
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }