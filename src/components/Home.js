// doc NECESSARY LIBRARIES IMPORT
import React, { useEffect, useState } from 'react';

// doc MAIN FUNCTION HOME
function Home() {
    const [dogImage, setDogImage] = useState('');
    const [welcomeText, setWelcomeText] = useState('Welcome'); // doc STATE FOR THE WELCOME TEXT

    // doc API REQUEST
    useEffect(() => {
        // doc HTTP GET REQUEST FROM THE API => RANDOM PICTURE
        fetch('https://dog.ceo/api/breeds/image/random')
            // doc WHEN RESPONSE RECEIVED => JSON CONVERT
            .then(response => response.json())
            // doc WHEN JSON DATA RECEIVED => UPDATE setDogImage WITH URL
            .then(data => setDogImage(data.message));
    }, []);

    // doc WHAT useEffect DISPLAYS
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
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // doc SEMI-TRANSPARENT GRAY OVERLAY
                    zIndex: 1 // doc ENSURES OVERLAY IS ABOVE THE IMAGE BUT BELOW THE TEXT
                }} />
                {/* doc WELCOME TEXT */}
                <h1
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white', // doc TEXT COLOR FOR VISIBILITY
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // doc OPTIONAL: TEXT SHADOW FOR BETTER READABILITY
                        zIndex: 2 // doc ENSURES TEXT IS ABOVE THE OVERLAY
                    }}
                    onMouseEnter={() => setWelcomeText('Waf Waf')} // doc CHANGE TEXT ON HOVER
                    onMouseLeave={() => setWelcomeText('Welcome')} // doc REVERT TEXT ON MOUSE LEAVE
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
                    Welcome to <strong>Canine Vista</strong>, your go-to platform for exploring everything about dogs! Whether you're here to browse through delightful dog images or to search for specific breeds, we've got you covered.
                </p>
                <p>
                    <strong>Features available on our site:</strong>
                </p>
                <ul style={{ listStyleType: 'disc', textAlign: 'left', margin: '0 auto', maxWidth: '600px' }}>
                    <li><strong>Dog Gallery:</strong> Browse a collection of wonderful dog photos showcasing the charm and uniqueness of various breeds.</li>
                    <li><strong>Breed Search:</strong> Display all available dog photos based on the breed you search for.</li>
                </ul>
                <p>
                    At <strong>Canine Vista</strong>, we aim to provide dog enthusiasts with an engaging and informative experience. Explore our gallery, search for breeds, and immerse yourself in the world of dogs!
                </p>
                <p>
                    Enjoy your visit and feel free to share your feedback with us!
                </p>
            </section>
        </div>
    );
}

// doc EXPORT HOME => CAN BE IMPORTED FROM OTHER FILES
export default Home;
