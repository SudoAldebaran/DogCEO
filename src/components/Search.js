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

    const fetchBreedImages = () => {
        // doc API REQUEST URL
        fetch(`https://dog.ceo/api/breed/${breed}/images`)

            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    setDogImages(data.message);
                    setError(false);
                }
                else {
                    setDogImages([]); // doc SET ARRAY TO EMPTY
                    setError(true);
                }
            }
            )
            // doc ERROR HANDLING IF BREED NOT FOUND
            .catch(() => {
                setDogImages([]);
                setError(true);
            }
            );

    };

    return (
        <div>
            <h1>Dog Breed Search</h1>
            <input type="text" placeholder="Enter breed"
                value={breed} // doc SETTING INPUT VALUE TO BREED
                onChange={(e) => setBreed(e.target.value.toLowerCase())} // doc FORCING INPUT TO LOWERCASE
            />
            <button onClick={fetchBreedImages}>Search</button>

            {/* Affichage conditionnel du message d'erreur si error est true */}
            {error && <p style={{ color: 'red' }}>This breed doesn't exist!</p>}

            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap', // Permet de passer à la ligne suivante si nécessaire
                    gap: '20px', // Espace entre chaque image
                    justifyContent: 'space-around', // Répartition égale entre les images et les bords
                    padding: '0 20px', // Espacement des bords gauche et droit du conteneur
                    marginTop: '20px',
                }}
            >
                {dogImages.map((img, index) => (
                    <div
                        key={index}
                        style={{
                            width: 'calc(33% - 20px)', // Ajuste la largeur selon l'espacement
                            height: '200px', // Hauteur fixe pour toutes les images
                            overflow: 'hidden', // Évite le débordement de l'image
                            borderRadius: '8px', // Coins arrondis si souhaité
                        }}
                    >
                        <img
                            src={img}
                            alt={breed}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover', // Ajuste l'image pour couvrir le conteneur
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;