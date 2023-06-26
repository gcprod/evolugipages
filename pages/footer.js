import React from 'react'
import '../styles/footer.css'
const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='box'>
                    <strong>Evolugi</strong>
                    <p>We're an independent IT and Digital consultant. specializing in software, branding, campaigns, and digital design. We transfotm businesses into easily usable platform.</p>

                    <div className='social'>
                        <a href='#' aria-label='facebook' title='facebook'><i className="fab fa-facebook"></i></a>
                        <a href="#" aria-label='instagram' title='instagram'><i className="fab fa-instagram"></i></a>
                        <a href="#" aria-label='linkedin' title='likedin'><i className="fab fa-linkedin"></i></a>
                        <a href="#" aria-label='github' title='github'><i className="fab fa-github"></i></a>
                    </div>

                </div>
            <div className="box">
            <strong>Links</strong>
            <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#aboutus">About Us</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#faq">FAQ</a></li>
                                        
            </ul>
            </div>
            
            <div className="box">
            <strong>Extra Links</strong>
            <ul>
                    <li><a href="#login">Login</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#career">Career</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Use</a></li>
                                        
            </ul>
            </div>
            
            <div className='box'>
                <strong>Contact</strong>
                <span><i className='fas fa-map-marker-alt'></i> Evolugi</span>
                <span><i className='fas fa-envelope'></i>example@gmail.com</span>
                <span><i className='fas fa-phone-square-alt'></i>+62 851-7677-7706</span>
            </div>
            </div>

            <span className='copyright'>Evolugi 2023 - All Copyright Reserved</span>
        </footer>
    )
}

export default Footer