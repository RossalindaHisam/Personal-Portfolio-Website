
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
        description: '...',
        image: 'seni.png',
        technologiesUsed: ['HTML5', 'CSS3','JavaScript','FileReader API','Responsive Design (Flexbox)'],
        link: 'http://localhost:8080/Rossalinda(072799)/project1/Art.html'
    },
    {
        title: 'Project 2: Online Recipe Book',
        description: '...',
        image: 'rr.png',
        technologiesUsed: ['HTML5', 'CSS3','JavaScript','Responsive Design (Grid Layout)'],
        link: 'http://localhost:8080/Rossalinda(072799)/project%202/OnlineRecipeBook.html'
    },
    {
        title: 'Project 3: Personal To-Do List',
        description: '...',
        image: 'lol.png',
        technologiesUsed: ['HTML5', 'CSS3','JavaScript','Responsive Design (Flexbox)'],
        link: 'http://localhost:8080/Rossalinda(072799)/project%203/PTDLA.html'
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
