import React from 'react'
import './Footer.css'
import { FaTwitter, FaFacebook, FaTelegram } from "react-icons/fa"

function Footer() {

  return (
    <>
      <footer>
        <div class="footer-left">
            <p>2464 Royal Ln, Mesa, Ney Jersey 45463</p>
        </div>
        <div class="footer-center">
            <a href="#"><i><FaFacebook /></i></a>
            <a href="#"><i><FaTelegram /></i></a>
            <a href="#"><i><FaTwitter /></i></a>
        </div>
        <div class="footer-right">

          <p>&copy; B.shop @2021 All rights Reserved</p>

        </div>
    </footer>




    </>
  )
}

export default Footer
