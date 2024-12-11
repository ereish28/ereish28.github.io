document.addEventListener('DOMContentLoaded', function () {
    console.log("Script loaded and running...");

    // Fetch navigation data
    fetch('nav.json')
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
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
        .catch(error => console.error('Error fetching navigation data:', error));

    // Function to initialize a carousel
    function initializeCarousel(containerSelector) {
        console.log("Initializing carousels for:", containerSelector);
        const carousels = document.querySelectorAll(containerSelector);

        carousels.forEach(container => {
            const carousel = container.querySelector('.carousel');
            const images = carousel.querySelectorAll('.carousel-image-container');
            const prevButton = container.querySelector('.prev');
            const nextButton = container.querySelector('.next');
            let currentIndex = 0;

            function updateCarousel() {
                if (images.length > 0) {
                    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
                }
            }

            if (prevButton && nextButton) {
                prevButton.addEventListener('click', () => {
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                    updateCarousel();
                });

                nextButton.addEventListener('click', () => {
                    currentIndex = (currentIndex + 1) % images.length;
                    updateCarousel();
                });
            }

            updateCarousel();
        });
    }

    // Render Projects from JSON
    function renderProjects(projects) {
        console.log("Rendering projects:", projects);
        const categories = ['HTML', 'CSS', 'JS'];
        const tabsContainer = document.querySelector('.tabs');
        const tabContentsContainer = document.querySelector('#tab-contents');

        // Clear existing tabs and content
        tabsContainer.innerHTML = '';
        tabContentsContainer.innerHTML = '';

        categories.forEach(category => {
            console.log(`Processing category: ${category}`);
            const categoryProjects = projects.filter(project => project.category === category);
            if (categoryProjects.length === 0) {
                console.log(`No projects found for ${category}. Skipping...`);
                return;
            }

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

            categoryProjects.forEach(project => {
                const projectContainer = document.createElement('div');
                projectContainer.classList.add('project-container');
                projectContainer.innerHTML = `
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                `;

                // Add project links
                const linksContainer = document.createElement('div');
                linksContainer.classList.add('project-links');
                project.links.forEach(link => {
                    const linkElement = document.createElement('p');
                    linkElement.innerHTML = `<a href="${link.url}" target="_blank">${link.text}</a>`;
                    linksContainer.appendChild(linkElement);
                });
                projectContainer.appendChild(linksContainer);

                // Add carousel
                const carouselContainer = document.createElement('div');
                carouselContainer.classList.add('carousel-container', 'projects-carousel');
                const carousel = document.createElement('div');
                carousel.classList.add('carousel');
                project.images.forEach(image => {
                    const imgContainer = document.createElement('div');
                    imgContainer.classList.add('carousel-image-container');
                    imgContainer.innerHTML = `<img src="${image}" class="carousel-image" alt="${project.name}">`;
                    carousel.appendChild(imgContainer);
                });
                carouselContainer.appendChild(carousel);
                carouselContainer.innerHTML += `
                    <span class="prev">&lt;</span>
                    <span class="next">&gt;</span>
                `;
                tabContent.appendChild(projectContainer);
                tabContent.appendChild(carouselContainer);
            });

            tabContentsContainer.appendChild(tabContent);
        });

        initializeTabs();
        initializeCarousel('.carousel-container');
    }

    // Initialize Tabs
    function initializeTabs() {
        console.log("Initializing tabs...");
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

        if (tabs[0]) {
            tabs[0].classList.add('active');
            tabContents[0].classList.add('active');
        }
    }

    if (window.location.pathname.includes('about.html')) {
        console.log("Initializing About Page Carousel");
        initializeCarousel('.about-carousel');
    }

    if (window.location.pathname.includes('projects.html')) {
        console.log("Fetching projects data...");
        fetch('projects.json')
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                return response.json();
            })
            .then(data => renderProjects(data.projects))
            .catch(error => console.error('Error fetching project data:', error));
    }
});
