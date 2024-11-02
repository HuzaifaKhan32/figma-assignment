import Image, { StaticImageData } from "next/image";
import Categories from "./components/categories";
import fav from "../app/images/Icon/32px/Favorites.png";
import Iphone from "../app/images/Product-images/Iphone14pro1.png";
import Iwatch from "../app/images/Product-images/Iwatch.png";
import Ipad from "../app/images/Product-images/Ipad.png";
import watch from "../app/images/Product-images/watch.png";
import productHead from "../app/images/Product-images/product-headphones.png";
import Camera from "../app/images/Product-images/camera.png";
import Mobile from "../app/images/Product-images/mobile.png";
import Eardots from "../app/images/Product-images/eardots.png";
import ProductCard from "./components/ProductCard";
import Banner from "@/app/images/Banner 2.png";

type Data = {
  text : string,
  price : string,
  image : StaticImageData
  icon : StaticImageData
}

const data : Data[] = [{
  text : "Apple iPhone 14 Pro Max 128GB Deep Purple",
  price : "$900",
  image : Iphone,
  icon : fav
}, {
  text : "Apple iPhone 14 Pro Max 128GB Deep Purple",
  price : "$900",
  image : Camera,
  icon : fav
},{
  text : "Apple iPhone 14 Pro Max 128GB Deep Purple",
  price : "$900",
  image : Iwatch,
  icon : fav
},{
  text : "Apple iPhone 14 Pro Max 128GB Deep Purple",
  price : "$900",
  image : productHead,
  icon : fav
},{
  text : "Apple iPhone 14 Pro Max 128GB Deep Purple",
  price : "$900",
  image : watch,
  icon : fav
},{
  text : "Apple iPhone 14 Pro Max 128GB Deep Purple",
  price : "$900",
  image : Mobile,
  icon : fav
},{
  text : "Apple iPhone 14 Pro Max 128GB Deep Purple",
  price : "$900",
  image : Eardots,
  icon : fav
},{
  text : "Apple iPhone 14 Pro Max 128GB Deep Purple",
  price : "$900",
  image : Ipad,
  icon : fav
}]
const App = () => {
  return (
    <>
      <div className="hero-section inter">
        <div className="left">
          <div className="content">
            <div className="first">Pro.Beyond</div>
            <h1>IPhone 14 <span className="pro">Pro</span></h1>
            <div className="second">Create to change everything for the better. For everyone</div>
            <button>Shop now</button>
          </div>
        </div>
        <div className="right">
          <div className="Iphone"></div>
        </div>
      </div>
      <div className="page2">
        <div className="left">
          <div className="first">
            <div className="playstation"></div>
            <div className="text">

              <h1>Playstation 5</h1>
              <p>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
            </div>
          </div>
          <div className="second">
            <div className="section-1">
              <div className="headphone"></div>
              <div className="text">
                <h1>Apple
                  AirPods <span className="max">Max</span></h1>
                <p>Computational audio. Listen, it's powerful</p>
              </div>
            </div>
            <div className="section-2">
              <div className="vision-pro">
                <h1>Apple
                  Vision <span className="pro">Pro</span></h1>
                <p>An immersive way to experience entertainment</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="text">
            <h1>Macbook <span className="air">Air</span></h1>
            <p>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
            <button>Shop now</button>
          </div>
          <div className="macbook"></div>
        </div>
      </div>
      <div className="page3">
        <div className="section1">
          <h3>Browse By Category</h3>
          <div className="arrows"></div>
        </div>
        <div className="section2">
          <Categories/>
        </div>
      </div>
      <div className="page4">
        <div className="section-1">
          <ul>
            <li className="dark-font">New Arrival</li>
            <li>Bestseller</li>
            <li>Featured Products</li>
          </ul>
        </div>
        <div className="section-2">
          <div className="product-lines">
          {data.map((prop) => (
            <ProductCard data={prop}/>
          ))}
          </div>
        </div>
      </div>
      <div className="page5">
        <Image
        className="banner"
        src={Banner}
        alt="banner"
        width={1440}
        height={448}
        />
      </div>
    </>
  )
}

export default App;