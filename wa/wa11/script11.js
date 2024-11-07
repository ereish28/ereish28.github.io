const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['IMG1.JPG', `IMG2.JPG`, `IMG3.JPG`, `IMG4.JPG`, `IMG5.JPG`];
const alts = {
  'IMG1.JPG' : 'Image of a cathedral from a distance',
  'IMG2.JPG' : 'Cathedral in Brussels, Belgium',
  'IMG3.JPG' : 'Grand Place - Brussels, Belgium',
  'IMG4.JPG' : 'Hand painted ceiling',
  'IMG5.JPG' : 'Gold statue of a man on a horse'
}

/* Declaring the alternative text for each image file */

/* Looping through images */


for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  }



const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });


