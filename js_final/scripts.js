if (window.location.pathname.includes('about.html')) {
    fetch('data.json')
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
  
    document.getElementById('toggle-vision').addEventListener('click', () => {
      const visionSection = document.getElementById('vision-section');
      visionSection.style.display = visionSection.style.display === 'none' ? 'block' : 'none';
    });
  }
  
  fetch('nav.json')
    .then(response => response.json())
    .then(data => {
      const nav = document.querySelector('nav');
      data.links.forEach(link => {
        const anchor = document.createElement('a');
        anchor.textContent = link.text;
        anchor.href = link.url;
        nav.appendChild(anchor);
      });
    })
    .catch(error => console.error('Error fetching navigation data:', error));
  
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
  