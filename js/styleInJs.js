const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '2px solid mediumseagreen';
    section.style.marginBottom = '20px';
    section.style.borderRadius = '20px';
    section.style.backgroundColor = 'lightgrey';
}

// const placesContainer = document.getElementById('places');
// placesContainer.style.backgroundColor = 'yellowgreen';

const placesContainer = document.getElementById('places');
placesContainer.classList.add('text-large');
placesContainer.ul.classList.remove('important-places');
