import React from 'react'
import "./footer.css"

export const Footer = () => {
    return (
        <footer>
            <div className="footer__container grid">
                <div className="content1">
                    <h1>
                        Noah <br/>
                        Western Cakes & Desserts
                    </h1>
                </div>
                <div className="content2 grid">
                    <div className="isi__content">
                        <h2>Address</h2>
                        <p>Jln. Raya Kuta Gg. Sadasari II No.5, Kuta - Badung, Bali, 80361</p>
                    </div>
                    <div className="isi__content">
                        <h2>Contact</h2>
                        <p><i className="icon-envelope-open"/>noacakesdessert@gmail.com</p>
                        <p><i className="icon-phone"/>+62 821 3939 0094</p>
                    </div>
                    <div className="isi__content">
                        <h2>Hours</h2>
                        <p>OPEN DAILY</p>
                        <p>07:00 AM - 10:00 PM</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
