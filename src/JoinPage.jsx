import React, { useState } from 'react';
import './JoinPage.css';

function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }
    if (!formData.message) formErrors.message = 'Message is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      // Submit form
      console.log('Form submitted:', formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
      <section className="hero-image-join">
        <div className="hero-text">
          <h1 className="title">JOIN THE CONVERSATION</h1>
          <p><span style={{color: 'orangered', fontWeight: 'bold', opacity: 0.8}}>ECHO</span> YOUR IDEAS, ENHANCING THE SHARED VISION</p>
          <button className="round-button" onClick={() => window.location.href='/'}>REVISIT OUR MISSION</button>
        </div>
      </section>

      <section className="join">
        <h2>COMMUNITY HUB</h2>    
        <p className="join-para">
        At <span style={{color: 'orangered', fontWeight: 'bold', opacity: 0.8}}>Artisan Echoes Interactive</span>, we’re not just a game studio – we’re a vibrant community of creators, artists, and gamers who live for immersive storytelling and unforgettable experiences. Our community hub is the place to be, and we want <span style={{color: '#800000', fontWeight: 'bold', opacity: 0.8}}>YOU</span> to be a part of it! Whether you're a seasoned developer, an aspiring artist, or just a gaming enthusiast, there's a spot for you here. Join us in shaping the future of interactive entertainment, where your ideas and creativity can shine and make a real impact. 
        <br /><br />
        Want to get the latest updates? Drop us a message in the contact form below to sign up for our emails and get our newsletter. Be the first to know about exclusive updates, events, and more!</p>
      </section>

      <section className="join">
        <h2>VLOG</h2>    
        <p className='join-para'>Our <span style={{color: 'orangered', fontWeight: 'bold', opacity: 0.8}}>YouTube</span> channel is your go-to spot for vlogs filled with insights, behind-the-scenes action, and awesome content! Dive into the creative minds of our developers, artists, and writers as they share their journey, challenges, and inspirations. Whether you’re into game design, narrative development, or just want to explore the gaming universe, our vlogs have it all. From in-depth tutorials and pro tips to personal stories and the latest industry trends, you’ll find endless knowledge and inspiration. Join our squad of viewers and contributors, and stay in the loop with the freshest updates in the gaming world.</p>
      </section>

      <section className="join">
        <h2>SOCIAL MEDIA</h2>    
          <ul className='join-para'>
            <li><span style={{color: 'orangered', fontWeight: 'bold', opacity: 0.8}}>X</span> : Stay connected with us on X <span style={{color: '#800000', fontWeight: 'bold', opacity: 0.8}}>@ArtisanEchoesInteractive</span> for real-time updates, sneak peeks, and join in on lively discussions. Be the first to know about our upcoming projects and events. Our feed is the perfect spot to connect with fellow enthusiasts, share your thoughts, and dive into exciting conversations. Don’t miss out on the fun and excitement – follow us now and be part of our vibrant community! </li>
            <li><span style={{color: 'orangered', fontWeight: 'bold', opacity: 0.8}}>Insatgram</span> : Explore the world of Artisan Echoes on IG. Immerse yourself in a visual journey featuring our unique concept art, detailed character designs, and the relaxed studio vibes that bring our games to life. Follow us to witness the creative process in action, from initial rough sketches to stunning final renders. Enjoy exclusive behind-the-scenes peeks, watch our talented team at work, and get inspired by the artistry and dedication that fuel every project. Our Instagram is your ultimate destination for everything related to <span style={{color: '#800000', fontWeight: 'bold', opacity: 0.8}}>Artisan Echoes Interactive</span>. Don’t miss out on the creativity and passion that drive our games.</li>
            <li><span style={{color: 'orangered', fontWeight: 'bold', opacity: 0.8}}>META</span> : Dive into our Meta community and connect with gamers, artists, and storytellers just like you. Smash that like button to stay in the loop with all the freshest updates, join in on engaging discussions, and share your own adventures. Our Meta fam is all about inclusivity, where you can connect with like-minded individuals, get tips from our crew, and be part of a super supportive and passionate squad. Come chill and let’s create something unique together.</li>
          </ul>
      </section>

      <section className="contact-form-section">
        <h2>BE HEARD</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name | Nickname :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Share | Message :</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit" className="submit-button">REACH OUT</button>
        </form>
      </section>

      <section className="hero-image-join-bottom"></section>
    </div>
  );
}

export default JoinPage;
