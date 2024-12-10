document.addEventListener('DOMContentLoaded', function() {
    console.log("Script loaded and running..."); // Confirm script execution

    // Fetch navigation data
    fetch('nav.json')
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

    // Function to initialize a carousel
    function initializeCarousel(containerSelector) {
        const carousels = document.querySelectorAll(containerSelector);

        carousels.forEach(container => {
            const carousel = container.querySelector('.carousel');
            const images = carousel.querySelectorAll('.carousel-image-container');
            const prevButton = container.querySelector('.prev');
            const nextButton = container.querySelector('.next');
            let currentIndex = 0;

            function updateCarousel() {
                carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
            }

            if (nextButton && prevButton) {
                nextButton.addEventListener('click', () => {
                    currentIndex = (currentIndex + 1) % images.length; // Loop back to start
                    updateCarousel();
                });

                prevButton.addEventListener('click', () => {
                    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to end
                    updateCarousel();
                });
            }
        });
    }


// Render Projects from JSON
function renderProjects(projects) {
    const categories = ['CSS', 'HTML', 'JS'];
    const tabsContainer = document.querySelector('.tabs');
    const tabContentsContainer = document.querySelector('#projects-tabs');

    categories.forEach(category => {
        // Create tab button
        const tabButton = document.createElement('button');
        tabButton.classList.add('tab-button');
        tabButton.dataset.tab = category.toLowerCase();
        tabButton.textContent = `${category} Projects`;
        tabsContainer.appendChild(tabButton);

        // Create tab content
        const tabContent = document.createElement('div');
        tabContent.id = category.toLowerCase();
        tabContent.classList.add('tab-content');

        // Filter and display projects in this category
        const categoryProjects = projects.filter(project => project.category === category);
        categoryProjects.forEach(project => {
            const projectContainer = document.createElement('div');
            projectContainer.classList.add('project-container');
            projectContainer.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
            `;
            tabContent.appendChild(projectContainer);


// Add carousel for each project
const carouselContainer = document.createElement('div');
carouselContainer.classList.add('carousel-container');
const carousel = document.createElement('div');
carousel.classList.add('carousel');

project.images.forEach(image => {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('carousel-image-container');
    imgContainer.innerHTML = `<img src="${image}" class="carousel-image" alt="${project.name}">`;
    carousel.appendChild(imgContainer);
});

const prevButton = document.createElement('span');
prevButton.classList.add('prev');
prevButton.textContent = '<';
const nextButton = document.createElement('span');
nextButton.classList.add('next');
nextButton.textContent = '>';

carouselContainer.appendChild(carousel);
carouselContainer.appendChild(prevButton);
carouselContainer.appendChild(nextButton);
tabContent.appendChild(carouselContainer);
});

tabContentsContainer.appendChild(tabContent);
});

// Reinitialize tab and carousel functionality
initializeTabs();
initializeCarousel('.carousel-container');
}

// Initialize Tabs
function initializeTabs() {
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

// Set the first tab as active by default
if (tabs[0]) {
tabs[0].classList.add('active');
tabContents[0].classList.add('active');
}
}

// Fetch and Render Projects
if (window.location.pathname.includes('projects.html')) {
fetch('/js_final/projects.json')
.then(response => {
if (!response.ok)
    throw new Error(`HTTP error! Status: ${response.status}`);
return response.json();
})
.then(data => renderProjects(data.projects))
.catch(error => console.error('Error fetching project data:', error));
}
});