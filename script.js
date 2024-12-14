// JavaScript to handle product click and search

document.addEventListener("DOMContentLoaded", function() {
    // Select all product elements
    const products = document.querySelectorAll(".product");

    // Add click event listener to each product
    products.forEach(product => {
        product.addEventListener("click", function() {
            // Find the image inside the product and get its alt text
            const image = product.querySelector("img");
            if (image && image.alt) {
                const searchQuery = image.alt;

                // Open a search in a new tab (defaulting to Google)
                const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
                const amazonSearchUrl = `https://www.amazon.com/s?k=${encodeURIComponent(searchQuery)}`;

                // Uncomment one of the below lines depending on which platform you want
                window.open(googleSearchUrl, "_blank"); // Opens Google Search
                // window.open(amazonSearchUrl, "_blank"); // Opens Amazon Search
            }
        });
    });

    // Feedback form submission handling
    const feedbackButton = document.querySelector(".feedback-box button");
    const feedbackTextarea = document.querySelector(".feedback-box textarea");

    feedbackButton.addEventListener("click", function() {
        const feedback = feedbackTextarea.value.trim();
        if (feedback) {
            // Send feedback to Amazon support mail
            const mailtoLink = `mailto:support@amazon.com?subject=Feedback&body=${encodeURIComponent(feedback)}`;
            window.location.href = mailtoLink;
        } else {
            alert("Please enter your feedback before submitting.");
        }
    });
});
