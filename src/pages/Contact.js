import React from 'react'
const informations = {
    email : 'ahlemsaid908@gmail.com',
    phone : '+216 29 951 326',
    address:{
        country : 'Tunisie',
        city : 'Sfax',
        street : 'Route Teniour Km 09',
        postalCode : 3021
    }
}

function Contact() {
    return (
        <div> 
            
            <div className='contact-item'>
                <i className="fa-solid fa-envelope custom-icon"></i>
                <p className='contact-text'>
                    {informations.email}
                </p>
            </div>
        
            <div className='contact-item'>
            <i className="fa-sharp fa-solid fa-phone custom-icon"></i>
                <p className='contact-text'>
                    {informations.phone}
                </p>
            </div>
        
            <div className='contact-item' >
            <i class="fa-solid fa-location-dot custom-icon"></i>
                <p className='contact-text'>
                    {informations.address.street} {informations.address.city} {informations.address.country} {informations.address.postalCode}
                </p>
            </div>
        </div>
    )
    
}
export default Contact 