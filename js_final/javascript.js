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
  });