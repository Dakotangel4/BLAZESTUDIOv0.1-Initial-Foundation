/**
 * Portfolio content lives here so each image, title, category, description,
 * and link can be replaced without changing the card layout.
 */
export const projects = [
  {
    image: 'assets/projects/project-01.jpg',
    title: 'Project 01',
    category: 'Business Website',
    description: 'A modern responsive website designed to establish a professional online presence.',
    url: 'https://example.com/project-01',
  },
  {
    image: 'assets/projects/project-02.jpg',
    title: 'Project 02',
    category: 'E-commerce Website',
    description: 'A clean online shopping experience designed around products and customer conversion.',
    url: 'https://example.com/project-02',
  },
  {
    image: 'assets/projects/project-03.jpg',
    title: 'Project 03',
    category: 'Business Landing Page',
    description: 'A focused landing page designed to communicate a business offering clearly.',
    url: 'https://example.com/project-03',
  },
  {
    image: 'assets/projects/project-04.jpg',
    title: 'Project 04',
    category: 'Mobile App',
    description: 'A custom mobile interface designed around a simple and intuitive user experience.',
    url: 'https://example.com/project-04',
  },
  {
    image: 'assets/projects/project-05.jpg',
    title: 'Project 05',
    category: 'Brand Website',
    description: 'A modern digital presence combining strong visual identity with responsive web design.',
    url: 'https://example.com/project-05',
  },
  {
    image: 'assets/projects/project-06.jpg',
    title: 'Project 06',
    category: 'Dashboard UI',
    description: 'A clean interface designed to make complex information easier to understand and manage.',
    url: 'https://example.com/project-06',
  },
  {
    image: 'assets/projects/project-07.jpg',
    title: 'Project 07',
    category: 'Digital Platform',
    description: 'A responsive digital platform designed around usability, accessibility, and performance.',
    url: 'https://example.com/project-07',
  },
];

function createProjectCard(project, index) {
  const card = document.createElement('article');
  card.className = 'project-card';
  card.innerHTML = `
    <div class="project-image-wrap">
      <img class="project-image" src="${project.image}" alt="${project.title} temporary project preview" loading="${index < 3 ? 'eager' : 'lazy'}" />
    </div>
    <div class="project-card-body">
      <div class="project-card-heading">
        <span class="project-number">${String(index + 1).padStart(2, '0')}</span>
        <span class="project-category">${project.category}</span>
      </div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer" aria-label="View ${project.title} website">
        View Website <span aria-hidden="true">↗</span>
      </a>
    </div>
  `;
  return card;
}

export function initProjects() {
  const grid = document.querySelector('[data-projects-grid]');
  if (!grid) return;

  projects.forEach((project, index) => {
    grid.appendChild(createProjectCard(project, index));
  });
}