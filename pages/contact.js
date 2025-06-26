document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Change this URL to your deployed backend endpoint in production
        const backendUrl = 'https://carloray-portfolio.onrender.com/contact';

        try {
            const response = await fetch(backendUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message })
            });

            if (response.ok) {
                alert("Thank you for reaching out! Your message has been sent successfully!");
                form.reset();
            } else {
                alert("Oops! Something went wrong. Please try again later.");
            }
        } catch (error) {
            alert("Network error. Please try again later.");
        }
    });
});