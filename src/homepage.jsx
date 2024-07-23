import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

function homepage() {
    return (
        <section>
            <section className="hero-image">
                <div className="hero-text">
                    <h1 className="title">ARTISAN ECHOES INTERACTIVE</h1> 
                    <p><span style={{color: 'orangered', opacity: 0.8}}>AMPLIFYING</span> THE VOICES OF REAL ARTISTS</p>
                    <Link to="/join" className="round-button">JOIN THE CONVERSATION</Link>
                </div>
            </section>

            <section className="mission">
                <h2>OUR MISSION</h2>
                <p className="amplify">to <span style={{color: 'orangered', fontWeight: 'bold', opacity: 0.8}}>amplify</span> the voices of real artists</p>
                <p className="mission-para">At Artisan Echoes Interactive, we believe in the transformative power of art within the digital realm. Our mission is to create a symphony of interactive experiences that not only entertain but also resonate with the soulful expressions of genuine artistry. We are committed to crafting video games that serve as canvases for real artists, amplifying their voices and visions to audiences worldwide. Through innovation, collaboration, and a deep respect for the organic creative process, we strive to illuminate the untold stories and unseen perspectives that enrich our lives and culture.</p>
            </section>
        </section>
    );    
  }
  
  export default homepage;
