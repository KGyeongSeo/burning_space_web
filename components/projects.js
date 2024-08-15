const makeProjectCard = (project) => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;
    return card;
};

const projectProps = [
    {
        title: 'Project 1',
        description: 'This is the first project.'
    },
    {
        title: 'Project 2',
        description: 'This is the second project.'
    }
];

const projectSection = document.querySelector('#projects');
projectProps.forEach(project => {
    projectSection.appendChild(makeProjectCard(project));
});