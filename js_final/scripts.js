document.addEventListener('DOMContentLoaded', function() {
    fetch('nav.json')
      .then(response => response.json())
      .then(data => {
        const nav = document.querySelector('nav');
        const ul = document.createElement('ul');
        data.links.forEach(link => {
          const li = document.createElement('li');
          const anchor = document.createElement('a');
          anchor.textContent = link.text;
          anchor.href = link.url;
          li.appendChild(anchor);
          ul.appendChild(li);
        });
        nav.appendChild(ul);
      })
      .catch(error => console.error('Error fetching navigation data:', error));
  
    if (window.location.pathname.includes('about.html')) {
      fetch('json.json')
        .then(response => response.json())
        .then(data => {
          document.querySelector('h1').textContent = data.title;
          document.querySelector('.description').textContent = data.description;
          const sectionsContainer = document.querySelector('.sections');
          data.sections.forEach(section => {
            const sectionDiv = document.createElement('div');
            sectionDiv.innerHTML = `
              <h2>${section.header}</h2>
              <p>${section.content}</p>
            `;
            sectionsContainer.appendChild(sectionDiv);
          });
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
  
    function showImage(index) {
      const carousel = document.querySelector('.carousel');
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }
  
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalImages;
      showImage(currentIndex);
    });
  
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      showImage(currentIndex);
    });
  
    if (window.location.pathname.includes('projects.html')) {
      fetch('projects.json')
        .then(response => response.json())
        .then(data => {
          const projectsContainer = document.querySelector('.projects');
          data.projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.innerHTML = `
              <h2>${project.name}</h2>
              <p>${project.description}</p>
            `;
            projectsContainer.appendChild(projectDiv);
          });
        })
        .catch(error => console.error('Error fetching projects data:', error));
    }
  
    if (window.location.pathname.includes('contact.html')) {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
          event.preventDefault();
          alert('Thank you for reaching out!');
        });
      }
    }
  });
  