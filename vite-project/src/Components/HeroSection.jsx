import React from "react";
import Heroimg from '../assets/phone_uiu.png';
import Container from 'react-bootstrap/Container';
import {FiCheck, FiHeadphones, FiMail} from "react-icons/fi";

const HeroSection = () => {
return(
    <div className="herosectioncont">
        
            <Container>
            <div className="herochild">
                
                <div className="herotext">
                    <div className="securedtl">
                    <h3 className="securetxt">Securing Payment <span className="finance">finance</span></h3>
                    </div>

                    <div className="heroptag">
                        <p>
                        Faster,cheaper and making payment a slip of runtime.
                        </p>
                    </div>


                   
                        <div className="licentext mt-5">
                           <div> <FiCheck color="02C39A" size="20"/><span className="license">Licensenced & Trusted</span></div>
                           <div className="relytxt"> <FiCheck color="02C39A" size="20"/><span className="license">Reliable & Payable</span></div>
                        </div>

                        <div className="secondlicentext mt-3">
                           <div> <FiCheck color="02C39A" size="20"/><span className="license">100% Assurance</span></div>
                           <div className="relytxt2"> <FiCheck color="02C39A" size="20"/><span className="license">Over 100+ Countries Usage</span></div>
                        </div>
                    
                </div>

                <div className="heroimg">
                    <img src={Heroimg} alt="heroimg"/>
                 
                </div>
                    <div className="mailbox">
                    <FiMail size="40"/>
                    </div>
                </div>
        </Container>
    
    </div>
)
}

export default HeroSection;