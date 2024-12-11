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

            // Add project name and description
            const projectTitle = document.createElement('h3');
            projectTitle.textContent = project.name;
            projectContainer.appendChild(projectTitle);

            const projectDescription = document.createElement('p');
            projectDescription.textContent = project.description;
            projectContainer.appendChild(projectDescription);

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
            projectContainer.appendChild(carouselContainer); // Append carousel to project container
            tabContent.appendChild(projectContainer); // Append project container to tab content
        });

        tabContentsContainer.appendChild(tabContent); // Append tab content to the main container
    });

    initializeTabs();
    initializeCarousel('.carousel-container');
}
