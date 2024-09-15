// doc NECESSARY LIBRARIES IMPORT
import React, {useEffect, useState} from 'react';

// doc MAIN FUNCTION GALLERY
function Gallery() {
    const [dogImages, setDogImages] = useState([]);

    // doc API REQUEST
    useEffect(() => {
        // doc HTTP GET REQUEST FROM THE API => 6 RANDOM PICTURE
        fetch('https://dog.ceo/api/breeds/image/random/6')
        // doc WHEN RESPONSE RECEIVED => JSON CONVERT
        .then(response => response.json())
        // doc WHEN JSON DATA RECEIVED => UPDATE setDogImage WITH URL
        .then(data => setDogImages(data.message));
    }, []);

    // doc WHAT useEffect DISPLAY
    return (
        <div>
          <h1>Dog Gallery</h1>
          {/* doc IMAGES DIV */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap', // doc NEXT LINE IF NECESSARY
              gap: '20px', // doc SPACE BETWEEN EACH IMAGE
              justifyContent: 'space-around', // doc EQUAL SPACE BETWEEN IMAGES AND EDGES
              padding: '0 20px', 
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
                }}
              >
                <img
                  src={img}
                  alt="Dog"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', // doc ADJUST THE IMAGE TO COVER THE DIV Ajuste l'image pour couvrir le conteneur
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