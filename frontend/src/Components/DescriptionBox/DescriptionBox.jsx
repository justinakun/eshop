import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>            
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitates the buying and selling of goods and services over the internet. These websites enable businesses to reach a wider audience, providing customers with the convenience of shopping from anywhere at any time.</p>
            <p>E-commerce websites can vary widely in complexity and functionality, from simple storefronts to comprehensive online marketplaces</p>
        </div>
    </div>
  )
}

export default DescriptionBox