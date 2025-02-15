const productForm = document.getElementById('productForm');
const outputDiv = document.getElementById('output');

productForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Clear previous output
    outputDiv.innerHTML = '';

    // Gather product details
    const productName = document.getElementById('productName').value;
    const productQuantity = document.getElementById('productQuantity').value;
    const productPrice = document.getElementById('productPrice').value;
    const productCondition = document.getElementById('productCondition').value;
    const contactNumber = document.getElementById('contactNumber').value;

    // Display the product overview
    const overviewDiv = document.createElement('div');
    overviewDiv.className = 'product-overview';
    overviewDiv.innerHTML = `
        <h2>Product Overview</h2>
        <p><strong>Product Name:</strong> ${productName}</p>
        <p><strong>Quantity:</strong> ${productQuantity}</p>
        <p><strong>Price:</strong> $${parseFloat(productPrice).toFixed(2)}</p>
        <p><strong>Condition:</strong> ${productCondition}</p>
        <p><strong>Contact Number:</strong> ${contactNumber}</p>
    `;
    outputDiv.appendChild(overviewDiv);

    // Gather image files from each box
    const imageFiles = [];
    for (let i = 1; i <= 5; i++) {
        const fileInput = document.getElementById(`image${i}`);
        if (fileInput.files.length > 0) {
            imageFiles.push(fileInput.files[0]);
        }
    }

    // Display the uploaded images in the output area
    imageFiles.forEach(file => {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imgDiv = document.createElement('div');
            imgDiv.className = 'image-preview';
            imgDiv.style.backgroundImage = `url(${e.target.result})`;
            outputDiv.appendChild(imgDiv);
        };
        reader.readAsDataURL(file);
    });

    // Redirect to the listing page after submission (for demo purposes)
    setTimeout(() => {
        window.location.href = 'listing.html'; // Change to the actual URL where products are listed
    }, 3000); // Optional: Show overview for 3 seconds before redirecting
});
