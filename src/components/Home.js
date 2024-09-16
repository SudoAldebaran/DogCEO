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
                <h2>Bienvenue sur Canine Vista !</h2>
                <p>
                    Nous sommes ravis de vous accueillir sur <strong>Canine Vista</strong>, votre destination ultime pour tout ce qui concerne les chiens ! Notre site est conçu pour les passionnés de chiens, les propriétaires et tous ceux qui souhaitent en savoir plus sur ces incroyables animaux.
                </p>
                <p>
                    <strong>Ce que vous trouverez ici :</strong>
                </p>
                <ul style={{ listStyleType: 'disc', textAlign: 'left', margin: '0 auto', maxWidth: '600px' }}>
                    <li><strong>Galerie de Chiens :</strong> Explorez notre collection de photos de chiens adorables. Chaque image capture la beauté et la personnalité unique de ces compagnons fidèles.</li>
                    <li><strong>Recherche de Races :</strong> Découvrez des informations détaillées sur différentes races de chiens. Apprenez tout sur les caractéristiques, les besoins et les particularités de chaque race pour trouver le compagnon parfait pour vous.</li>
                    <li><strong>Inspirations et Conseils :</strong> Trouvez des idées inspirantes et des conseils pratiques pour prendre soin de votre chien. De la nutrition aux soins de santé, nous avons des ressources pour vous aider à offrir le meilleur à votre fidèle ami.</li>
                </ul>
                <p>
                    Chez <strong>Canine Vista</strong>, nous croyons que chaque chien mérite de la reconnaissance et de l'amour. C’est pourquoi nous avons créé une plateforme où vous pouvez vous connecter avec d’autres passionnés de chiens, partager vos expériences et enrichir vos connaissances sur nos amis à quatre pattes.
                </p>
                <p>
                    Nous espérons que vous apprécierez votre visite et trouverez tout ce dont vous avez besoin pour célébrer votre amour pour les chiens. N'hésitez pas à explorer notre site et à nous faire part de vos commentaires !
                </p>
            </section>
        </div>
    );
}

// doc EXPORT HOME => CAN BE IMPORTED FROM OTHER FILES
export default Home;
