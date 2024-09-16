// doc REACT LIBRARIES
import React, { useState } from 'react';

// doc MAIN FUNCTION SEARCH
function Search() {
    // doc BREED VALUE
    const [breed, setBreed] = useState('');
    // doc IMAGES ARRAY
    const [dogImages, setDogImages] = useState([]);
    // doc ERRORS
    const [error, setError] = useState(false);
    // doc MODAL IMAGE STATE
    const [selectedImage, setSelectedImage] = useState(null);

    const fetchBreedImages = () => {
        // doc API REQUEST URL
        fetch(`https://dog.ceo/api/breed/${breed}/images`)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    setDogImages(data.message);
                    setError(false);
                } else {
                    setDogImages([]); // doc SET ARRAY TO EMPTY
                    setError(true);
                }
            })
            // doc ERROR HANDLING IF BREED NOT FOUND
            .catch(() => {
                setDogImages([]);
                setError(true);
            });
    };

    // doc FUNCTION TO CLOSE MODAL
    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ marginBottom: '50px', marginTop: '50px' }}>Dog Breed Search</h1> {/* Ajout de l'espace sous le titre */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                <input
                    type="text"
                    placeholder="Enter breed"
                    value={breed} // doc SETTING INPUT VALUE TO BREED
                    onChange={(e) => setBreed(e.target.value.toLowerCase())} // doc FORCING INPUT TO LOWERCASE
                    style={{
                        padding: '10px',
                        borderRadius: '20px',
                        border: '1px solid #ccc',
                        outline: 'none',
                        width: '300px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    }}
                />
                <button
                    onClick={fetchBreedImages}
                    style={{
                        padding: '10px 20px',
                        borderRadius: '20px',
                        border: 'none',
                        backgroundColor: 'rgb(56, 95, 113)',
                        color: 'white',
                        cursor: 'pointer',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        transition: 'background-color 0.3s ease',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgb(56, 95, 113)'}
                >
                    Search
                </button>
            </div>

            {/* Affichage conditionnel du message d'erreur si error est true */}
            {error && <p style={{ color: 'red' }}>This breed doesn't exist!</p>}

            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    justifyContent: 'space-around',
                    padding: '0 20px',
                    marginTop: '20px',
                    marginBottom: '25px',
                }}
            >
                {dogImages.map((img, index) => (
                    <div
                        key={index}
                        style={{
                            width: 'calc(33% - 20px)',
                            height: '200px',
                            overflow: 'hidden',
                            borderRadius: '8px',
                            border: '3px solid black',
                            transition: 'transform 0.3s ease',
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        // doc ONCLICK FUNCTION TO OPEN MODAL
                        onClick={() => setSelectedImage(img)}
                    >
                        <img
                            src={img}
                            alt={breed}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
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
                        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark transparent background
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: '999',
                    }}
                    onClick={closeModal} // Close modal when clicking outside the image
                >
                    <div
                        style={{
                            position: 'relative',
                            width: '80%',
                            maxWidth: '600px',
                            height: 'auto',
                            padding: '10px',
                            backgroundColor: 'white', // Background for image
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
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                borderRadius: '50%',
                                width: '30px',
                                height: '30px',
                                cursor: 'pointer',
                                fontSize: '16px',
                            }}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Search;
