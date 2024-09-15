// doc NECESSARY LIBRARIES IMPORT
import React, { useEffect, useState } from 'react';

// doc MAIN FUNCTION HOME
function Home() {
    const [dogImage, setDogImage] = useState('');

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
                backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent gray overlay
                zIndex: 1 // Ensures overlay is above the image but below the text
            }} />
            {/* doc WELCOME TEXT */}
            <h1 style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white', // Text color for visibility
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Optional: text shadow for better readability
                zIndex: 2 // Ensures text is above the overlay
            }}>
                Welcome
            </h1>
        </div>
    );
}

// doc EXPORT HOME => CAN BE IMPORTED FROM OTHER FILES
export default Home;
