import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section left">
        <h3 className="about-title">About us</h3>
        <p className="about-text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div className="footer-section middle">
        <h3 className="product-title">Product</h3>
        <div className="product-columns">
          <ul>
            <li>Electric</li>
            <li>LCGC</li>
            <li>Offroad</li>
            <li>SUV</li>
          </ul>
          <ul>
            <li>Hatchback</li>
            <li>MPV</li>
            <li>Sedan</li>
            <li>Truck</li>
          </ul>
        </div>
      </div>
      <div className="footer-section right">
        <div className="address-block">
          <h3 className="footer-title">Address</h3>
          <p className="footer-subtext">
            Sed ut perspiciatis unde omnis iste natus error sit<br></br> voluptatem
            accusantium doloremque.
          </p>
        </div>

        <div className="contact-block">
          <h3 className="footer-title">Contact Us</h3>
          <div className="contact-icons">
            <span><img src="./tele.svg"></img></span>
            <span><img src="./ig.svg"></img></span>
            <span><img src="./yt.svg"></img></span>
            <span><img src="./send.svg"></img></span>
            <span><img src="./message.svg"></img></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
