import "./footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div className="footer-main-conatainer">
          <div className="first-footer">
            <div>
              <h3>Navigation</h3>
              <ul>
                <li>
                  <a href=" ">About Us</a>
                </li>
                <li>
                  <a href=" ">Catalog</a>
                </li>
                <li>
                  <a href=" ">Collection</a>
                </li>
              </ul>
            </div>
            <div className="second-div">
              <div className="Logo">
                <a href="/">
                  <span className="large-word">S</span>{" "}
                  <span className="word">aron</span>
                  <p>design</p>
                </a>
              </div>
              <p>
                Saron design is your destination for designer and comfortable
                clothes for any occasion. We use only natural fabrics and pay
                great attention to details.
              </p>
            </div>
            <div className="SocialLinks">
              <h3>Social</h3>
              <ul>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100063639442254">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>

                
                <li>
                  <a href="https://t.me/sarondesign">
                  <i class="fa-brands fa-telegram-plane"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/sarondesigndilla/">
                  <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="tiktok.com/@saronadmasu">
                  <i class="fa-brands fa-tiktok"></i>
                  </a>
                </li>
              </ul>

             
            </div>
          </div>
          <div className="phone-link">
              <h3>Phone Numbers</h3>
              <ul>
              <a href="tel:0941030556">
                   ☎ 0941030556

                  </a>
                  <a href="tel:0942981322 ">
                   ☎ 0942981322 

                  </a>
              
                </ul>
              </div>
          <hr></hr>
          <div className="last-div">
            <p>
            created By : <a href="https://ahavahswd.netlify.app">Ahavah SWD</a>
            </p>
            <p>
            &copy; 2023
            </p>

            <p>All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
