const makeCard = (header, content) => {
    const card = document.createElement('li');
    card.innerHTML = /*html*/`
        <h2>${header}</h2>
        <p>${content}</p>
    `;
    return card;
};

const body = document.querySelector('body');
body.appendChild(makeCard('header', 'content'));