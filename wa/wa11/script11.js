const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['IMG1.jpg', `IMG2.jpg`, `IMG3.jpg`, `IMG4.jpg`, `IMG5.jpg`]; 

 
/* Declaring the alternative text for each image file */
const alts = {
  'IMG1.jpg' : 'Image of a cathedral from a distance',
  'IMG2.jpg' : 'Cathedral in Brussels, Belgium',
  'IMG3.jpg' : 'Grand Place - Brussels, Belgium',
  'IMG4.jpg' : 'Hand painted ceiling',
  'IMG5.jpg' : 'Gold statue of a man on a horse'
}

/* Looping through images */
for (const image of images) {
    const newImage = document.createElement('img');
    const imgSrc = `images/${image}`;
    console.log("Trying to load image at:", imgSrc);

    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  }


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


