import React from "react";

import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
          alt="Banner"
        />

        <div className="home__row">
          {/* Products -> id, title, price, rating, image */}
          <Product
            id="17315364"
            title="GEFORCE RTX 3080 Founders edition"
            price={71000}
            rating={5}
            image="https://cdn.vox-cdn.com/thumbor/RQaAUNPwN0Rs7qjisGWHsaOw3iA=/0x0:2640x1749/1200x800/filters:focal(1109x664:1531x1086)/cdn.vox-cdn.com/uploads/chorus_image/image/67444181/twarren_rtx3080.0.jpg"
          />

          <Product
            id="54378358"
            title="AMD Ryzen Threadripper 3990X Desktop Processor 64 Cores up to 4.3GHz 288MB Cache sTRX4 Socket"
            price={389000}
            rating={4}
            image="https://m.media-amazon.com/images/I/61ebxU+SzzL._AC_UY218_.jpg"
          />

          <Product
            id="78453768"
            title="ASUS ROG Zenith II Extreme TRX40 Gaming AMD 3rd Gen Ryzen Threadripper Motherboard"
            price={84999}
            rating={4}
            image="https://m.media-amazon.com/images/I/61pUVB9pJSL._AC_UY218_.jpg"
          />

          <Product
            id="54672876"
            title="Corsair Force Series MP600 1TB Gen4 PCIe X4 NVMe M.2 SSD"
            price={23199}
            rating={5}
            image="https://m.media-amazon.com/images/I/61Jo8GfQxTL._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
          {/* Products -> id, title, price, rating, image */}
          <Product
            id="76483456"
            title="Losing My Virginity by Sir Richard Branson"
            price={599}
            rating={5}
            image="https://m.media-amazon.com/images/I/71ypI887O4L._AC_UY218_.jpg"
          />

          <Product
            id="34535108"
            title="OpenGL Superbible: Comprehensive Tutorial and Reference by Sellers Graham, Wright Richard S Jr., et al."
            price={558}
            rating={4}
            image="https://m.media-amazon.com/images/I/51rJ4F27grL._AC_UL320_.jpg"
          />
        </div>

        <div className="home__row">
          {/* Products -> id, title, price, rating, image */}
          <Product
            id="43678564"
            title="The Witcher 3: Wild Hunt - Goty Edition (Digital Code)"
            price={1999}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Wbijyy39L._AC_UY218_.jpg"
          />

          <Product
            id="65378964"
            title="Baptism of Fire: Witcher 3 - Now a major Netflix show (The Witcher) by Andrzej Sapkowski and David French"
            price={420}
            rating={4}
            image="https://m.media-amazon.com/images/I/71tB+JbBzyL._AC_UY218_.jpg"
          />

          <Product
            id="46712435"
            title="Posterhouzz Wall Poster Everybody Lies | House MD TV Series"
            price={189}
            rating={5}
            image="https://m.media-amazon.com/images/I/61jMjZmvNUL._AC_UL320_.jpg"
          />
        </div>

        <div className="home__row">
          {/* Products -> id, title, price, rating, image */}
          <Product
            id="54670923"
            title="ASUS ROG Swift PG348Q 34-inch (86.36 cm) Curved Gaming Monitor - 90LM02A0-B01370 (Black)"
            price={129999}
            rating={4}
            image="https://m.media-amazon.com/images/I/81UTBqxeyFL._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
          {/* Products -> id, title, price, rating, image */}
          <Product
            id="63452874"
            title="Angels and Demons: (Robert Langdon Book 1) by Dan Brown"
            price={173}
            rating={5}
            image="https://m.media-amazon.com/images/I/61d1QJ0tPhL._AC_UY218_.jpg"
          />

          <Product
            id="54678245"
            title="Grand Theft Auto 5 (Digital Code)"
            price={748}
            rating={4}
            image="https://m.media-amazon.com/images/I/71B8BgSRLOL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
