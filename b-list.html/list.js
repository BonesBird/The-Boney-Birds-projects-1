const bucketList = [
  'Go to space',
  'smoke a jay',
  'listen Pink Floyd to the wall',
  'pet my cat',
];
// Write JS to append each array item to the DOM here
// 1: get the bucketlist element
const buckeListUl = document.getElementById('bucketList');
// 2: create a new li element e.g. document.createElement();
const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');
const item4 = document.createElement('li');

item1.innerText = bucketList[0];
item2.innerText = bucketList[1];
item3.innerText = bucketList[2];
item4.innerText = bucketList[3];

buckeListUl.append(item1);
buckeListUl.append(item2);
buckeListUl.append(item3);
buckeListUl.append(item4);

console.log('bucketList');
  // 3: update the .innerText of the new element
  // 4: append the new element to the bucketlist <ul> .append()