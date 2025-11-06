import React from "react";
import "boxicons";
export default function Product() {
  return (
    <div class="services">
      <div class="mission">
        <div class="business">
          <h1>Product</h1>
          <div class="link">
            <a href="/Home" class="link-1">
              Home
            </a>
            <a href="/Product" class="link-2">
              > Product
            </a>
          </div>
        </div>
      </div>

      <div class="product-card">
        <div class="image-container">
          <img
            src="/o98.jfif"
            alt="Zoomed Product Image"
            class="zoomed-image"
          ></img>
          <div class="controls-container">
            <div class="control-btn like">
              <i class="fas fa-heart"></i>
            </div>
            <div class="control-btn zoom">
              <i class="fas fa-search-plus"></i>
            </div>
            <div class="control-btn favorite">
              <i class="fas fa-star"></i>
            </div>
          </div>
          <div class="badge-sale">SALE</div>
        </div>

        <div class="product-info">
          <h2 class="product-title">UltraBoost Running Shoes</h2>
          <div class="product-price">$129.99</div>
          <p class="product-description">
            Experience ultimate comfort with our premium running shoes. Designed
            for professional athletes and casual runners alike, featuring our
            patented cushioning technology and breathable mesh upper.
          </p>

          <div class="product-meta">
            <div class="meta-item">
              <i class="fas fa-box-open"></i>
              <span>Free Shipping</span>
            </div>
            <div class="meta-item">
              <i class="fas fa-undo"></i>
              <span>30-Day Returns</span>
            </div>
          </div>

          <button class="add-to-cart">Add to Cart</button>
        </div>
      </div>

      <div class="zoom-overlay">
        <i class="fas fa-times close-zoom"></i>
        <img
          src="/o99.jfif"
          alt="Zoomed Product Image"
          class="zoomed-image"
        ></img>
      </div>
    </div>
  );
}
