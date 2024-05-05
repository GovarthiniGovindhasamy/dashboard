import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
     <div>
            <header>
                <div className="icon">
                    <img src="book.jpg" alt="Book Icon" />
                    <h5>Book Store</h5>
                </div>
                <nav>
                    <a href="/">Home</a>
                    <a href="/">About Us</a>
                    <a href="/">Courses</a>
                    <a href="/">Our Services</a>
                    <a href="/">Contact Us</a>
                    <button className="one">Sign in</button>
                </nav>
            </header>
            <div className="middle" style={{ paddingLeft: '60px' }}>
                <h1>The <span style={{ color: 'orange' }}>Smart</span><br /> Choice For <span style={{ color: 'orange' }}>Future</span></h1>
                <p>"Study hard, work smart; success comes to those who give it their all."</p>
                <p>"Learning today, leading tomorrow."</p>
                <div className="search-container" style={{ paddingBottom: '50px' }}>
                    <img src="search-icon.png" alt="Search Icon" className="search-icon" />
                    <br />
                    <input type="text" placeholder="Search for a location..." className="search-input" style={{ height: '20px', width: '160px' }} />
                    <br />
                    <button className="continue-button">Continue</button>
                </div>
            </div>
            <div className="container" style={{ margin: '100px' }}>
                <div>
                    <img src="penpencil.jpeg" style={{ height: '70px', width: '70px' }} alt="Pen and Pencil" />
                    <h6>Continuous learning and practice are crucial in the field of UI/UX design. Engage in real-world projects, seek feedback, and stay curious about new tools and techniques to continually improve your skills.</h6>
                </div>
                <div>
                    <img src="computer1.jpeg" style={{ height: '70px', width: '70px' }} alt="Computer" />
                    <h6>Roadmap and investing time and effort into education, skill development, portfolio building, networking, and continuous learning, you can prepare yourself for a successful career in UI/UX design.</h6>
                </div>
                <div>
                    <img src="certificate.jpg" style={{ height: '70px', width: '70px' }} alt="Certificate" />
                    <h6>Certificates in UI/UX design can be valuable assets for individuals seeking to enter or advance in the field, as well as for organizations looking to build and maintain a talented and skilled workforce.</h6>
                </div>
            </div>
            <div className="main">
                <h1>Our Tracks</h1>
                <p>UI/UX design, in simple terms, is about making things easy and enjoyable to use.</p>
            </div>
            <div className="containers">
                {/* Your product details go here */}
            </div>
            <div className="contain">
                <div className="text-overlay" style={{ textAlign: 'center' }}>
                    <h1 style={{ paddingLeft: '600px' }}>Premium <span style={{ color: 'orange' }}>Learning</span> Experience</h1>
                </div>
                <div className="access">
                    <img src="easy access.png" style={{ width: '25px', height: '25px' }} alt="Easy Access Icon" /><h5>Easy Accessible</h5><h6>Learning will feel very comfortable with courelab.</h6>
                    <hr style={{ color: 'white' }} />
                    <img src="puzzle.png" style={{ width: '25px', height: '25px' }} alt="Puzzle Icon" /><h5>Fun Learning Experience</h5><h6>Learning will feel very comfortable with courelab.</h6>
                </div>
            </div>
        </div>
    </>
  );
  
}

export default App
