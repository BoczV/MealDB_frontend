import React, {useState} from 'react'
import "../style/ContactMe.css"

function ContactMe() {
    const [checkEmail, setCheckEmail] = useState<Boolean>(false)
    const [checkPhone, setCheckPhone] = useState<Boolean>(false)
    return (
        <div>
            {checkPhone ? (<p className="phone">{"+36309984359"}</p>): null}
            <div className="middle">
            <div className="btn" onClick={() => setCheckEmail(checkEmail? false: true)}>
                    <img src="./google-brands.svg" alt=""></img>
                </div>
                <a className="btn" href="https://github.com/BoczV" target="_blank" rel="noopener noreferrer">
                    <img src="./github-brands.svg" alt=""></img>
                </a>
                <a className="btn" href="https://www.linkedin.com/in/viktor-b%C3%B3cz-a6087baa/" target="_blank" rel="noopener noreferrer">
                    <img src="./linkedin-in-brands.svg" alt=""></img>
                </a>
                <div className="btn" onClick={() => setCheckPhone(checkPhone? false: true)}>
                    <img src="./phone-solid.svg" alt=""></img>
                </div>
		    </div>
            {checkEmail? (<p className="email">{"beviktor95@gmail.com"}</p>): null}
        </div>
    )
}

export default ContactMe
