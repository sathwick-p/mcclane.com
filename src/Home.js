
import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src ="https://m.media-amazon.com/images/I/81qa7iF0B5L._SX3000_.png"

          alt=""
        />

        <div className="home__row">
          <Product
            id="1"
            title="SAMSUNG Galaxy S22 Ultra Cell Phone,256GB, 8K Camera & Video, S Pen, Green"
            price={1099}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61nhOdlKpDL._AC_SX679_.jpg"
          />
          <Product
            id="2"
            title="SAMSUNG Galaxy Z Fold 4 Cell Phone, 512GB, Flex Mode, Hands Free Video, Multi Window View, Foldable Display"
            price={1919}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71DhIuzEemL._AC_SX679_.jpg"
          />
          <Product
            id="3"
            title="Google Pixel 6 – 5G Android Phone - Unlocked Smartphone with Wide and Ultrawide Lens - 128GB - Stormy Black"
            price={999}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61oQtjPpM-L._AC_SX569_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4"
            title="Polaroid Go Instant Mini Camera - Red (9071) - Only Compatible with Polaroid Go Film"
            price={100}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61u7lk6Br+L._AC_SX679_.jpg"
          />
            <Product
              id="5"
              title="Polaroid Go Everything Box Camera and Instant Film Bundle (6036)" 
              price={110}
              rating={4}
              image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/614y+H-sTfL._AC_SX679_.jpg"
            />
          <Product
            id="6"
            title="Polaroid Now I-Type Instant Camera - Black & White (9059)"
            price={110}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81r1qZIBncL._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="7"
            title="Apple iPhone 13 Pro Max, 256GB, Graphite "
            price={1700}
            rating={3}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61iVuXR3dhL._AC_SX679_.jpg"
          />
          <Product
            id="8"
            title="Apple iPhone 11 [256GB, Black] + Carrier Subscription [Cricket Wireless]"
            price={650}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71iO2R+CLjL._FMwebp__.jpg"
          />
          <Product
            id="9"
            title="Apple iPad Pro (256GB, White)"
            price={700}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="10"
            title="Google Pixel Buds A-Series - Wireless Earbuds - Headphones with Bluetooth - Dark Olive"
            price={300}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61rPqsDQ-ZL._AC_SX679_.jpg"
          />
          <Product
            id="11"
            title="SAMSUNG Galaxy Buds2 True Wireless Earbuds Noise Cancelling Ambient Sound Bluetooth Lightweight Comfort Fit Touch Control, International Version (Graphite)"
            price={450}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51c-GzwdSBL._AC_SX679_.jpg"
          />
          <Product
            id="12"
            title="Apple AirPods Pro (2nd Generation) Wireless Earbuds with MagSafe Charging Case."
            price={350}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61SUj2aKoEL._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="13"
            title="SAMSUNG Galaxy Watch 4 40mm Smartwatch with ECG Monitor Tracker for Health, Fitness"
            price={200}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61dh16sj5+L._AC_SX679_.jpg"
          />
          <Product
            id="14"
            title="Apple Watch Series 8 [GPS + Cellular 41mm] Smart watch w/ Graphite Stainless Steel Case with Graphite Milanese Loop."
            price={500}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81fblqgILfL._AC_SX679_.jpg"
          />
          <Product
            id="15"
            title="Garmin quatix® 7X Solar Edition, Marine GPS Smartwatch, Solar Charging Capabilities, Durable Watch with Flashlight"
            price={350}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71r8nqqlr+L._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="16"
            title="ROG Strix G10 Gaming Desktop PC, Intel Core i7-11700, GeForce RTX 3060, 16GB DDR4 RAM, 1TB PCIe SSD"
            price={1300}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71mcuS1DkqL._AC_SX679_.jpg"
          />
          <Product
            id="17"
            title="2022 HP Pavilion Gaming Desktop PC, 32GB RAM, 1TB SSD+2TB HDD, Intel i5-10400F"
            price={900}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71jYpON06rL._AC_SX679_.jpg"
          />
          <Product
            id="18"
            title="Alienware Aurora R13 Gaming Desktop - Intel Core i7-12700F, 16GB DDR5 RAM, 512GB SSD + 1TB HDD0, Nvidia RTX 3060Ti LHR 8GB GDDR6, Air Cooled"
            price={1900}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61Qsj+79gpL._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="19"
            title="Alienware x15 R1 VR Ready Gaming Laptop, Intel Core i7-11800H, 16GB DDR4 RAM, 1TB SSD NVIDIA GeForce RTX 3070 8GB GDDR6"
            price={2000}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71RbT53F8pL._AC_SX679_.jpg"
          />
          <Product
            id="20"
            title="2022 Apple MacBook Air Laptop with M2 chip, 8GB RAM, 256GB SSD Storage"
            price={1200}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/719C6bJv8jL._AC_SX679_.jpg"
          />
          <Product
            id="21"
            title="Razer Blade 17 Gaming Laptop: NVIDIA GeForce RTX 3070 Ti - 12th Gen Intel 14-Core i9 CPU" 
            price={3200}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81ScTUenSUL._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="22"
            title="boAt Rockerz 550 Over Ear Bluetooth Headphones"
            price={200}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61gYxcIGjvL._SX679_.jpg"
          />
          <Product
            id="23"
            title="Apple AirPods Max Wireless Over-Ear Headphones. Active Noise Cancelling, Transparency Mode"
            price={400}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81NIpE9-5mL._AC_SX679_.jpg"
          />
          <Product
            id="24"
            title="Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones with Auto Noise Canceling Optimizer" 
            price={350}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61ICqyoI2NL._AC_SX679_.jpg"
          />
        </div>
        
      </div>
    </div>
  );
}

export default Home;
