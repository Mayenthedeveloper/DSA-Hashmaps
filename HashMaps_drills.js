const { HashMap } = require("./HashMap");
const { SeperateHashMap } = require("./SeperateHashMap");

SeperateHashMap.MAX_LOAD_RATIO = 0.5;
SeperateHashMap.SIZE_RATIO = 3;
HashMap.MAX_LOAD_RATIO = 0.5;
HashMap.SIZE_RATIO = 3;

function main() {
  const lotr = new SeperateHashMap();
  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandalf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");
  console.log('Maiar key:', lotr.get('Maiar'))
  console.log('Hobbit key:', lotr.get('Hobbit'))
}
main();

  // 8 bc of doubles and initial capacity didnt change
    // what does this do makes 2 hashmaps map1.get(str1) will have 20
    //map2.get(str2) will have 10

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10); // -> key: 'Hello World.', value: 10
    map1.set(str2,20);// -> (keys are the same) value: 20 
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20); // key: 'Hello World.', value: 20
    map2.set(str4,10);// value: 10

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}

// 2. What does it do?
// print 20 print 10;


function removeDuplicates(string) {
    let map = new HashMap();
    let resultString = "";
    for (const char of string) {
      try {
        map.get(char);
      } catch {
        map.set(char, true);
        resultString += char;
      }
    }
    return resultString;
  }

  function palindrome(string) {
    let oddChar = '';
    let oddArray = [];
    let mapChar = new HashMap();
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (mapChar.get(string[i])) {
        //if it does exsist
        count = mapChar.get(string[i]); //sets count
        count++;
        mapChar.set(string[i], count); // set the key string[i], value : count + 1
      } else {
        mapChar.set(string[i], 1); //set the key to string[i], value: 1
      }
    }
    for (let i = 0; i < string.length; i++) {
      let value = mapChar.get(string[i]);
      if (value % 2 !== 0) {
        console.log(`${string[i]} is odd`);
      } else {
        console.log(`${string[i]} is even`);
      }
    }
  }
  
  console.log(palindrome('hello'));

  function groupAnagrams(array){
    const anagrams = array.reduce((object,string)=>{
      const newObject = {...object}
      let addKey = true;
       for (const key in object) {
          if (isAnagram(key,string)) {
            addKey = false;
            newObject[key] = [...newObject[key],string];
            break;
          }
       }
       if (addKey){
        newObject[string] = [string];
       }
       return newObject;
    },{})
    return Object.values(anagrams)
  }
  
  console.log(groupAnagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))