document.addEventListener('DOMContentLoaded', function() {
    console.log("Script loaded and running..."); // Confirm script execution

    // Fetch navigation data
    fetch('/js_final/nav.json')
        .then(response => {
            if (!response.ok) 
                throw new Error(`HTTP error! Status: ${response.status}`);
            return response.json();
        })
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
        .catch(error => console.error('Error fetching navigation data:', error)); // Log fetch errors

    // Dynamic content for about.html
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
            .catch(error => console.error('Error fetching about page data:', error)); // Log errors
    }

    // Dynamic content for projects.html
    if (window.location.pathname.includes('projects.html')) {
        console.log("Projects page detected");

    // Tab functionality
        const tabs = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                tab.classList.add('active');
                document.getElementById(tab.dataset.tab).classList.add('active');
            });
        });

  // Carousel functionality for each tab
  const carousels = document.querySelectorAll('.carousel-container');

  carousels.forEach(container => {
      const carousel = container.querySelector('.carousel');
      const images = carousel.querySelectorAll('.carousel-image-container');
      const prevButton = container.querySelector('.prev');
      const nextButton = container.querySelector('.next');
      let currentIndex = 0;

      function updateCarousel() {
          carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
      }

      nextButton.addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % images.length;
          updateCarousel();
      });

      prevButton.addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + images.length) % images.length;
          updateCarousel();
      });
  });
}

    // Contact form functionality for contact.html
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