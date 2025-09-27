function groupAnagrams(strs) {
  let map = {};

  for (let str of strs) {
    let key = str.split('').sort().join(''); // sorted word as key
        console.log("keys->",key);
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(str);
  }

  return Object.values(map);
}

// Example
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
