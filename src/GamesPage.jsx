import React, { useState, useEffect } from 'react';
import './GamesPage.css';

function GamesPage({ cart, setCart }) {
  // state variables to manage products, filter, and category
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('default');
  const [category, setCategory] = useState('');

  // fetch products based on category when component mounts or category changes
  useEffect(() => {
    let url = '/Products';
    if (category) {
      url += `?category=${category}`;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, [category]);

  // handle filter change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // handle category change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // sort products based on selected filter
  const sortedProducts = [...products].sort((a, b) => {
    if (filter === 'price-high-to-low') {
      return b.price - a.price;
    } else if (filter === 'price-low-to-high') {
      return a.price - b.price;
    } else {
      return 0;
    }
  });

  // add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      {/* hero section with game introduction */}
      <section className="hero-image-games">
        <div className="hero-text">
          <h1 className="title">EMBARK ON A JOURNEY THROUGH SHADOWS</h1>
          <p><span style={{color: 'orangered', opacity: 0.8}}>EX</span>PERIENCE <span style={{color: 'orangered', opacity: 0.8}}>'DESCENT INTO DUSK'</span></p>
          <button className="round-button" onClick={() => window.location.href='/games'}>VIEW THE COLLECTION</button>
        </div>
      </section>

      {/* game description */}
      <p className='para'><span style={{color: 'orangered', fontWeight: 'bold', opacity: 0.8}}>'Descent into Dusk'</span> is a survival horror video game set in the eerie swamplands of Texas, just as the world teeters on the edge of a catastrophic war. Players step into the shoes of Jarvis, whose world is turned upside down when a loved one vanishes, lured into the depths of an ominous cult. As night falls, the swamps become shadows and whispers, where reality warps and dangers lurk in every murky corner. The game combines the terror of the unknown with the desperation of a personal quest. With each step deeper into the dusk, players must navigate through treacherous terrain, unravel the cult’s dark secrets, and survive encounters with both human and supernatural foes. The haunting atmosphere challenges players to use their wits, stealth, and scarce resources to stay alive while piecing together clues that could lead to their loved one. The game promises a harrowing journey through darkness, both literal and metaphorical, as players confront the true meaning of survival in a world gone mad.</p>
      
      {/* products section with filter and category selection */}
      <div className="games-container">
        <h1>PRODUCTS</h1>
        <div className="filter-container">
          <select onChange={handleFilterChange}>
            <option value="default">Default</option>
            <option value="price-high-to-low">Price: High to Low</option>
            <option value="price-low-to-high">Price: Low to High</option>
          </select>
          <select onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            <option value="media">Media</option>
            <option value="collectables">Collectables</option>
            <option value="apparel">Apparel</option>
          </select>
        </div>
        <div className="products-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* bottom hero section */}
      <section className="hero-image-bottom">
        <div className="hero-text">
          <h1 className="title"><span style={{color: 'orangered', opacity: 0.8}}>CULTIVATE</span> YOUR EXPERIENCE</h1>
          <p>LEARN MORE ABOUT OUR <span style={{color: 'orangered', opacity: 0.8}}>COMMUNITY HUB</span></p>
          <button className="round-button" onClick={() => window.location.href='/join'}>MORE DETAILS</button>
        </div>
      </section>
    </div>
  );
}

export default GamesPage;










