import React from 'react'
import './footer.css'
import iconLabel from '../../assets/iconLabel.png'

const Footer = () => {
    return (
        <div className="row footerBox">
            <img src={iconLabel} className="col-8 icon-lable" alt="iconLabel"></img>
            <ul className="col-4 nav mom-social-icons">
                <li className="vk"><a rel="noreferrer" target="_blank" href="https://vk.com/maks_kak_maks"><i className="fab fa-vk"></i></a></li>
                <li className="facebook"><a rel="noreferrer" target="_blank" href="https://www.facebook.com/zakiev.maksim/"><i className="fab fa-facebook-f"></i></a></li>
            </ul>
        </div>
    )
}
export default Footer