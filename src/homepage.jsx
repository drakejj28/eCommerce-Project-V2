import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

function Homepage() {
    return (
        <section>
            <section className="hero-image">
                <div className="hero-text">
                    <h1 className="title">ARTISAN ECHOES INTERACTIVE</h1> 
                    <p><span style={{color: 'orangered', opacity: 0.8}}>AMPLIFYING</span> THE VOICES OF REAL ARTISTS</p>
                    <button className="round-button" onClick={() => window.location.href='/join'}>JOIN THE CONVERSATION</button>
                </div>
            </section>

            <section className="mission">
                <h2>OUR MISSION</h2>
                <p className="amplify">to <span style={{color: 'orangered', fontWeight: 'bold', opacity: 0.8}}>amplify</span> the voices of real artists</p>
                <p className="mission-para">At <span style={{color: 'orangered', fontWeight: 'bold', opacity: 0.8}}>Artisan Echoes Interactive</span>, we believe in the transformative power of art within the digital realm. Our mission is to create a tapestry of interactive experiences that not only entertain but also resonate with the soulful expressions of genuine artistry. We are committed to crafting video games that serve as canvases for real artists, <span style={{color: 'orangered', fontWeight: 'bold', opacity: 0.8}}>amplifying</span> their voices and visions to audiences worldwide. Through innovation, collaboration, and a deep respect for the organic creative process, we strive to illuminate the untold stories and unseen perspectives that enrich our lives and culture.
                We aim to blend innovation with collaboration, ensuring that every game we create is a unique masterpiece. By embracing the organic creative process, we strive to illuminate untold stories and unseen perspectives that enrich our lives and culture. Our games are not just about playing; they’re about experiencing art in a way that is immersive, engaging, and deeply personal. Join us on this journey to explore the limitless possibilities of digital artistry and be part of a community that values creativity and authenticity.</p>
            </section>

            <section className="slider">
                <div className="slide">
                    <h2>💡 OUR PHILOSOPHY 🧠</h2>
                    <h2>A.R.T.I.S.T.</h2>
                    <ul>
                        <li><span style={{color: '#800000', fontWeight: 'bold', opacity: 0.8}}>AUTHENTICITY :</span> We stay true to the artist's voice and vision.</li>
                        <li><span style={{color: 'orangered', fontWeight: 'bold', opacity: 0.8}}>RESONANCE :</span> Our creations <span style={{color: '#800000', fontWeight: 'bold', opacity: 0.8}}>echo</span> with emotional depth and cultural significance.</li>
                        <li><span style={{color: '#800000', fontWeight: 'bold', opacity: 0.8}}>TENACITY :</span> We persist in the face of challenges to bring unique narratives to life.</li>
                        <li><span style={{color: 'orangered', fontWeight: 'bold', opacity: 0.8}}>INNOVATION :</span> We embrace technology and creativity to break new ground in storytelling.</li>
                        <li><span style={{color: '#800000', fontWeight: 'bold', opacity: 0.8}}>SUSTAINABILITY :</span> We commit to ethical practices that support both artists and the environment.</li>
                        <li><span style={{color: 'orangered', fontWeight: 'bold', opacity: 0.8}}>TOGETHERNESS :</span> We believe in the power of community and shared artistic journeys.</li>
                    </ul>
                </div>
                <div className="slide">
                    <h2>STAY IN  🔗  THE LOOP</h2>
                    <p>Join our community of art enthusiasts and gamers! <span style={{color: 'orangered', fontWeight: 'bold', opacity: 0.8}}>Subscribe</span> to our newsletter for exclusive updates on new game releases, behind-the-scenes looks at game development, upcoming events, and spotlights on the incredible artists we collaborate with. Be the first to know about our latest adventures in storytelling and innovation.</p>
                    <button className="round-button" onClick={() => window.location.href='/join'}>CONNECT</button>
                </div>
                <div className="slide">
                    <h2>🎮 CAREERS 📈</h2>
                    <p><span style={{color: 'orangered', fontWeight: 'bold', opacity: 0.8}}>Artisan Echoes Interactive</span> is more than just a game studio; we are a collective of storytellers, artists, and innovators dedicated to <span style={{color: 'orangered', fontWeight: 'bold', opacity: 0.8}}>amplifying</span> the voices of real artists through interactive experiences. If you share our passion for crafting games that push creative boundaries and tell meaningful stories, we invite you to explore our career opportunities.</p>
                    <button className="round-button" onClick={() => window.location.href='/join'}>VIEW OPPORTUNITIES</button>
                </div>
            </section>
        </section>
    );    
}

export default Homepage;



