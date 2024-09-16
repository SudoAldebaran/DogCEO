// doc NECESSARY LIBRARIES IMPORT
import React, { useEffect, useState } from 'react';

// doc MAIN FUNCTION GALLERY
function Gallery() {
    const [dogImages, setDogImages] = useState([]);

    // doc API REQUEST
    useEffect(() => {
        // doc HTTP GET REQUEST FROM THE API => 9 RANDOM PICTURES
        fetch('https://dog.ceo/api/breeds/image/random/9')
        // doc WHEN RESPONSE RECEIVED => JSON CONVERT
        .then(response => response.json())
        // doc WHEN JSON DATA RECEIVED => UPDATE setDogImage WITH URL
        .then(data => setDogImages(data.message));
    }, []);

    // doc WHAT useEffect DISPLAY
    return (
        <div style={{ textAlign: 'center', padding: '0 20px' }}>
          <h1 style={{ margin: '20px 0', fontSize: '2em' }}>Dog Gallery</h1>
          {/* doc IMAGES DIV */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap', // doc NEXT LINE IF NECESSARY
              gap: '20px', // doc SPACE BETWEEN EACH IMAGE
              justifyContent: 'space-around', // doc EQUAL SPACE BETWEEN IMAGES AND EDGES
              padding: '0 20px',
              marginBottom: '25px' // doc ADD SPACE BELOW THE IMAGES
            }}
          >
            {dogImages.map((img, index) => (
              <div
                key={index}
                style={{
                  width: 'calc(33% - 20px)', // doc WIDTH ADJUSTMENT BY SPACING
                  height: '200px',
                  overflow: 'hidden', // doc STOPPING IMAGES OVERFLOW
                  borderRadius: '8px',
                  border: '3px solid black', // doc ADD BLACK BORDER
                }}
              >
                <img
                  src={img}
                  alt="Dog"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', // doc ADJUST THE IMAGE TO COVER THE DIV
                  }}
                />
              </div>
            ))}
          </div>
        </div>
    );
}

// doc EXPORT GALLERY => CAN BE IMPORTED FROM OTHER FILES
export default Gallery;
