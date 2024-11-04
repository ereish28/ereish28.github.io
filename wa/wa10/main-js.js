const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 200 fahrenheit outside, so :insertx: flew to mars. When they arrived to :inserty:, they landed in a crater, then :insertz:. an 8-legged alien appeared — :insertx: weigs 5 pounds, and it was red outside.';
const insertX = ['Rocky Rebecca', 'Big Bart', 'Dancing Dana'];
const insertY = ['7-Eleven', 'JCPenny', 'Safeway'];
const insertZ = ['set on fire and disinigrated', 'exploded', 'morphed into a butterfly and flew away'];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    newStory = newStory.replaceAll(':insertx:',xItem);
    newStory = newStory.replaceAll(':inserty:',yItem);
    newStory = newStory.replaceAll(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);
    newStory = newStory.replaceAll('200 fahrenheit', temperature);
    newStory = newStory.replaceAll('5 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}