// doc NECESSARY LIBRARIES IMPORT
import React, { useEffect, useState } from 'react';

// doc MAIN FUNCTION HOME
function Home() {
    const [dogImage, setDogImage] = useState('');
    const [welcomeText, setWelcomeText] = useState('Welcome'); // État pour le texte

    // doc API REQUEST
    useEffect(() => {
        // doc HTTP GET REQUEST FROM THE API => RANDOM PICTURE
        fetch('https://dog.ceo/api/breeds/image/random')
            // doc WHEN RESPONSE RECEIVED => JSON CONVERT
            .then(response => response.json())
            // doc WHEN JSON DATA RECEIVED => UPDATE setDogImage WITH URL
            .then(data => setDogImage(data.message));
    }, []);

    // doc WHAT useEffect DISPLAY
    return (
        <div>
            <div style={{ position: 'relative', width: '100%', height: '400px' }}>
                {/* doc RANDOM DOG IMAGE */}
                <img
                    src={dogImage}
                    alt="Random Dog"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }}
                />
                {/* doc OVERLAY */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent gray overlay
                    zIndex: 1 // Ensures overlay is above the image but below the text
                }} />
                {/* doc WELCOME TEXT */}
                <h1
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white', // Text color for visibility
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Optional: text shadow for better readability
                        zIndex: 2 // Ensures text is above the overlay
                    }}
                    onMouseEnter={() => setWelcomeText('Waf Waf')} // Change text on hover
                    onMouseLeave={() => setWelcomeText('Welcome')} // Revert text on mouse leave
                >
                    {welcomeText}
                </h1>
            </div>

            {/* doc TEXT PRESENTATION SECTION */}
            <section style={{
                padding: '20px',
                textAlign: 'center',
                backgroundColor: 'rgba(240,233,221,255)',
                color: 'charcoal',
                fontFamily: 'Roboto, Sans-serif'
            }}>
                <h2>Welcome to Canine Vista!</h2>
                <p>
                    We are delighted to welcome you to <strong>Canine Vista</strong>, your ultimate destination for all things dog-related! Our site is designed for dog lovers, owners, and anyone who wants to learn more about these amazing animals.
                </p>
                <p>
                    <strong>What you'll find here:</strong>
                </p>
                <ul style={{ listStyleType: 'disc', textAlign: 'left', margin: '0 auto', maxWidth: '600px' }}>
                    <li><strong>Dog Gallery:</strong> Explore our collection of adorable dog photos. Each image captures the beauty and unique personality of these loyal companions.</li>
                    <li><strong>Breed Search:</strong> Discover detailed information on different dog breeds. Learn all about the characteristics, needs, and quirks of each breed to find the perfect companion for you.</li>
                    <li><strong>Inspirations and Tips:</strong> Find inspiring ideas and practical tips for taking care of your dog. From nutrition to healthcare, we have resources to help you provide the best for your loyal friend.</li>
                </ul>
                <p>
                    At <strong>Canine Vista</strong>, we believe every dog deserves recognition and love. That's why we've created a platform where you can connect with other dog lovers, share your experiences, and enrich your knowledge about our four-legged friends.
                </p>
                <p>
                    We hope you enjoy your visit and find everything you need to celebrate your love for dogs. Feel free to explore our site and let us know your feedback!
                </p>
            </section>

        </div>
    );
}

// doc EXPORT HOME => CAN BE IMPORTED FROM OTHER FILES
export default Home;
