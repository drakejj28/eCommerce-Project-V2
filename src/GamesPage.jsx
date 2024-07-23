import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './GamesPage.css'

function GamesPage() {
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState('default')

  useEffect(() => {
    fetch('/Products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error))
  }, [])

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const sortedProducts = [...products].sort((a, b) => {
    if (filter === 'price-high-to-low') {
      return b.price - a.price
    } else if (filter === 'price-low-to-high') {
      return a.price - b.price
    } else {
      return 0
    }
  })

  return (
    <div>
      <h1>Games</h1>
      <p>Welcome to our community! Please fill out the form below to join us.</p>
      {}
      
      <div className="games-container">
        <div className="filter-container">
          <select onChange={handleFilterChange}>
            <option value="default">Default</option>
            <option value="price-high-to-low">Price: High to Low</option>
            <option value="price-low-to-high">Price: Low to High</option>
          </select>
        </div>
        <div className="products-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GamesPage




