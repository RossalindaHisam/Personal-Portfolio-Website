document.addEventListener('DOMContentLoaded', function () {
    // Display default art images
    const defaultArt = [
        'default1.jpg',
        'default2.jpg',
        'default3.jpg',
        'default4.jpg', // Add more default images as needed
        'default5.jpg',
        'default6.jpg'
    ];

    const gallery = document.getElementById('gallery');

    let currentRow;

    defaultArt.forEach(function (imageName, index) {
        if (index % 3 === 0) {
            // Create a new row for every three images
            currentRow = document.createElement('div');
            currentRow.className = 'artwork-row';
            gallery.appendChild(currentRow);
        }

        const artwork = document.createElement('div');
        artwork.className = 'artwork';

        const image = document.createElement('img');
        image.src = 'images/' + imageName; // Assume your images are in an 'images' folder

        artwork.appendChild(image);
        currentRow.appendChild(artwork);
    });

    // Add event listener for file input
    document.getElementById('fileInput').addEventListener('change', handleFileSelect);
});

function handleFileSelect(event) {
    const fileInput = event.target;
    const files = fileInput.files;

    for (const file of files) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const gallery = document.getElementById('gallery');
            const artwork = document.createElement('div');
            artwork.className = 'artwork';

            const image = document.createElement('img');
            image.src = e.target.result;

            artwork.appendChild(image);
            gallery.appendChild(artwork);
        };

        reader.readAsDataURL(file);
    }

    // Reset the file input
    fileInput.value = '';
}
