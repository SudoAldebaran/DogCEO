// doc NECESSARY LIBRARIES IMPORT
import React, { useEffect, useState } from 'react';

// doc MAIN FUNCTION GALLERY
function Gallery() {
    const [dogImages, setDogImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null); // doc MODAL IMAGE STATE

    // doc API REQUEST
    useEffect(() => {
        // doc HTTP GET REQUEST FROM THE API => 9 RANDOM PICTURES
        fetch('https://dog.ceo/api/breeds/image/random/9')
        // doc WHEN RESPONSE RECEIVED => JSON CONVERT
        .then(response => response.json())
        // doc WHEN JSON DATA RECEIVED => UPDATE setDogImage WITH URL
        .then(data => setDogImages(data.message));
    }, []);

    // doc FUNCTION TO CLOSE MODAL
    const closeModal = () => {
        setSelectedImage(null);
    };

    // doc WHAT useEffect DISPLAYS
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
                  transition: 'transform 0.3s ease', // doc TRANSITION EFFECT
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} // doc ZOOM ON HOVER
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} // doc RESET ZOOM
                onClick={() => setSelectedImage(img)} // doc CLICK TO OPEN MODAL
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

          {/* doc MODAL FOR ENLARGED IMAGE */}
          {selectedImage && (
            <div
                style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)', // doc DARK TRANSPARENT BACKGROUND
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: '999',
                }}
                onClick={closeModal} // doc CLOSE MODAL WHEN CLICKING OUTSIDE THE IMAGE
            >
                <div
                    style={{
                        position: 'relative',
                        width: '80%',
                        maxWidth: '600px',
                        height: 'auto',
                        padding: '10px',
                        backgroundColor: 'white', // doc BACKGROUND FOR IMAGE
                        borderRadius: '8px',
                        textAlign: 'center',
                    }}
                >
                    <img
                        src={selectedImage}
                        alt="Enlarged dog"
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                        }}
                    />
                    <button
                        onClick={closeModal}
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            backgroundColor: 'transparent', // doc REMOVE BACKGROUND COLOR
                            color: '#333', // doc DEFAULT CROSS COLOR
                            border: 'none', // doc REMOVE BORDER
                            cursor: 'pointer',
                            fontSize: '24px', // doc ENLARGE CROSS SIZE
                            transition: 'color 0.3s ease', // doc ADD TRANSITION ON HOVER
                            marginTop: '-6px',
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = 'white'} // doc CHANGE COLOR ON HOVER
                        onMouseOut={(e) => e.currentTarget.style.color = '#333'} // doc RESET COLOR ON MOUSE OUT
                    >
                        &times;
                    </button>
                </div>
            </div>
          )}
        </div>
    );
}

// doc EXPORT GALLERY => CAN BE IMPORTED FROM OTHER FILES
export default Gallery;
