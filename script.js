// Add this line at the beginning of your script.js
const projectsContainer = document.getElementById('project-container');
// script.js
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

// Tukar teks "Read More" dan "Read Less" serta sembunyikan/paparkan teks tambahan
function toggleReadMore() {
    const dots = document.querySelector('.dots');
    const moreText = document.querySelector('.more-text');
    const btn = document.getElementById('read-more-btn');

    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        moreText.style.display = 'none';
        btn.innerHTML = 'Read More';
    } else {
        dots.style.display = 'none';
        moreText.style.display = 'inline';
        btn.innerHTML = 'Read Less';
    }
}
document.addEventListener("DOMContentLoaded", function () {
	
	const instagramButton = document.querySelector('.bxl-instagram');
    instagramButton.addEventListener('click', () => {
    window.open('https://www.instagram.com/srossallindah/', '_blank');
	
	
});
const projects = [
    {
        title: 'Project 1: Virtual Art Gallery',
        description: 'The Virtual Art Gallery project provides an immersive online platform for art enthusiasts to explore and showcase artwork. Users can upload their own images, contributing to a dynamic and ever-expanding virtual art collection. The gallery features a sleek and user-friendly interface, allowing for easy navigation and appreciation of diverse artworks.',
        image: 'seni.png',
        technologiesUsed: ['HTML5', 'CSS3','JavaScript','FileReader API','Responsive Design (Flexbox)'],
        link:'https://rossalindahisam.github.io/Personal-Portfolio-Website/Art.html'
    },
    {
        title: 'Project 2: Online Recipe Book',
        description:'Culinary Delights is an online recipe book that allows users to explore and contribute their favorite recipes. The platform features a dynamic display of recipes with detailed information on ingredients and instructions. Users can also add new recipes to share with the community, creating a diverse collection of culinary creations.',
        image: 'rr.png',
        technologiesUsed: ['HTML5', 'CSS3','JavaScript','Responsive Design (Grid Layout)'],
        link:'https://rossalindahisam.github.io/Personal-Portfolio-Website/OnlineRecipeBook.html'
    },
    {
        title: 'Project 3: Personal To-Do List',
        description: 'The Personal To-Do List is a simple and efficient task management tool designed to help users organize their daily activities. Users can easily add tasks with due dates, mark them as completed, and track their progress. The interface provides a clean and intuitive design, making it convenient for users to manage their to-do lists effectively.',
        image: 'lol.png',
        technologiesUsed: ['HTML5', 'CSS3','JavaScript','Responsive Design (Flexbox)'],
        link:'https://rossalindahisam.github.io/Personal-Portfolio-Website/PTDLA.html'
    }
];



    // Function to create project cards
function createProjectCard(project) {
    const projectCard = document.createElement('div');
    projectCard.classList.add('projects-box');

    const image = new Image();
    image.src = project.image;
    image.alt = `${project.title} Image`;

    // Log any errors that occur when loading the image
    image.onerror = function () {
        console.error(`Error loading image for project: ${project.title}`);
    };

    projectCard.appendChild(image);

    projectCard.innerHTML += `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
       
        <p>Technologies Used: ${project.technologiesUsed.join(', ')}</p>
        <a href="${project.link}" class="btn">View Project</a>
    `;

    return projectCard;
}
    // Append project cards to the projects container
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsContainer.appendChild(projectCard);
    });
});    

function validateForm() {
    var fullName = document.querySelector('.contact form input[placeholder="Full Name"]').value;
    var email = document.querySelector('.contact form input[placeholder="Email Address"]').value;
    var mobileNumber = document.querySelector('.contact form input[placeholder="Mobile Number"]').value;
    var emailSubject = document.querySelector('.contact form input[placeholder="Email Subject"]').value;
    var message = document.querySelector('.contact form textarea').value;

    // Add additional validation logic as needed
    if (fullName.trim() === '' || email.trim() === '' || mobileNumber.trim() === '' || emailSubject.trim() === '' || message.trim() === '') {
        alert('Please fill in all required fields.');
        return false;
    }

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate mobile number (you can add more specific rules if needed)
    var mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobileNumber)) {
        alert('Please enter a valid mobile number.');
        return false;
    }

    // Additional validation logic can be added here

    return true; // Form is valid, proceed with submission
}
