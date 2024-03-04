import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';




import { products } from "./data/products.js";
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" style={{ backgroundColor: "black" }}>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            </a>
            <ul className="dropdown-menu">

              <li><a className="dropdown-item" href="#">About</a></li>
              <li><a className="dropdown-item" href="#">Feed Back</a></li>
              <li><a className="dropdown-item" href="#">Terms and condition</a></li>
            </ul>
          </li>

          <img src="/kfc.png" alt="Logo" style={{ width: "30", height: "24", verticalAlign: "middle", boxSizing: "border-box", overflowClipMargin: "content-box", overflow: "clip" }}
            className="d-inline-block align-text-top" />

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className=" order-option option-active" className2="style">
                  <img className="img" src="/delivery.png" alt="" />
                  <span className="order-title" >DELIVERY</span>
                </button>

              </li>
              <li className="nav-item">
                <button className="order-option">
                  <img className="img" src="/pickup.png" alt="" />
                  <span className="order-title">Pickup</span>
                </button>
              </li>
            </ul>
            <form className="d-flex" role="login">

              <button className="btn btn-outline-danger" type="submit">LOGIN</button>
            </form>
          </div>
        </div>
      </nav>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/3.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container-fluid">
          <div className="row row-cols-1 row-cols-md-4 g-4">
          <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedError MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedError MuiButton-sizeMedium MuiButton-containedSizeMedium text-center f-w-600 reorder-btn css-16hxacb" 
          tabindex="0" type="button">REORDER
          <span className="MuiTouchRipple-root css-w0pj6f"></span>
          </button>
      </div>
      </div>
      <h2 class="items-title"><span>EXPLORE MENU</span></h2>

      
      <>
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {products.map(products => (
              <div className="col" key={products.id}>
                <div className="card" style={{ background: "#888 ", boxSizing: "borderBox", backgroundColor: "var",
                 border: "none", borderRadius: "13px", cursor: "pointer", marginBottom: "40px", 
                 marginTop: "15px", padding: "15px 10px 35px", position: "relative", transition: "all .3s", }}>
                  <img src={products.image} style={{verticalAlign: "middle",boxSizing: "border-box",overflowClipMargin: "content-box",overflow: "clip"}}className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{products.title}{"  "}
                      <span className="badge text-bg-primary">{products.Price}</span>
                    </h5>
                    <p className="card-text">{products.Desc}</p>
                    <a href="#" className="btn btn-primary">Add To Cart</a>
                  </div>
                </div>
              </div>

            ))}

          </div>
        </div>
      </>
      <footer class="text-white text-center text-lg-start"><div class="container p-4">
  <div class="row"><div class="col-md-6 mb-4">
    <h5 class="text-uppercase">Contact us</h5>
    <ul class="list-unstyled m-3"><i class="fa-brands fa-facebook m-3"></i>
    <i class="fa-brands fa-google m-3"></i><i class="fa-brands fa-twitter m-3"></i>
    <i class="fa-brands fa-instagram m-3"></i>
    </ul></div><div class="col-md-6 mb-4">
      <h5 class="text-uppercase">Send us an email</h5>
      <form><div class="input-group">
        <input type="email" class="form-control" placeholder="Enter your email"/>
        <button type="submit" class="btn btn-danger">Send</button></div></form></div></div></div><div class="text-center p-3">© 2024 Copyright:</div></footer>
    </div>
    
  )
}

export default App


{/* <div class="browser-design" tabindex="-1" style="width: 100%; display: inline-block;">
  <div class="brows-items"><a href="/menu"> 
  <img src="https://www.kfcpakistan.com/images/afc4e8b0-ff99-11ed-8640-872ee63b5da0-alacart-2023-05-31095826.png" alt=""></a>
<h6 class="details-design">Ala-Carte-&amp;-Combos</h6>
<span></span></div></div> */}




