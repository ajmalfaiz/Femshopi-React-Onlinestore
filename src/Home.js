import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        {/* TODO: Navbar for home */}
      </div>
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Wearables/Mi/Redmi_Band/SaleOn/MI-Xiaomi_GW_MobileHero_1500x600._CB405135019_.jpg"
          alt=""
        />
        <div className="home__row">
         
          <Product
           id="522"
            title="Acnos 5 Stylist Diamond and Simple Analog Watches Combo for Women Pack -5(nissna)"
            price={(379)}
            image="https://images-na.ssl-images-amazon.com/images/I/61EoPV5gtcL._UL1100_.jpg"
            rating={5}
          />
          <Product
           id="899"
            title="Designer Combo of 2 Analog Watches for Boys and Girls"
            price={(339)}
            image="https://images-na.ssl-images-amazon.com/images/I/619O%2BPpEUxL._UL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
           id="3"
            title="Lenovo Tab M10 Tablet (10.1 inch, 16GB, Wi-Fi + 4G LTE), Slate Black"
            price={(7050)}
            image="https://images-na.ssl-images-amazon.com/images/I/61ul3f89uDL._SL1338_.jpg"
            rating={3}
          />
          <Product
           id="4"
            title="JBL T460BT Extra Bass Wireless On-Ear Headphones with 11 Hours Playtime & Mic (Black)"
            price={(2999)}
            image="https://images-na.ssl-images-amazon.com/images/I/71ynIMjwgwL._SL1500_.jpg"
            rating={4}
          />
          <Product
           id="5"
            title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens, 16GB Card and Carry Case
"
            price={(10499)}
            image="https://images-na.ssl-images-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg"
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
           id="6"
            title="Onida 80 cm (32 Inches) Fire TV Edition HD Ready Smart IPS LED TV 32HIF (Black) (2019)"
            price={(6199)}
            image="https://images-na.ssl-images-amazon.com/images/I/81bNwWF3Z2L._SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
