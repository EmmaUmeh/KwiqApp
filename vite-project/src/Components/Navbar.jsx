import React from "react";
import { useState } from "react";
import Logoimg from '../assets/KwiQ.svg';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { FiArrowRight, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import {FiMenu} from "react-icons/fi";
import {FiX} from "react-icons/fi";

const Navbar = () => {
        const [toggle,toggleMenu] = useState(false);
        const handleToggle = () => {
              toggleMenu(!toggle)
        }
        
        const [togglebutton,toggleBtn] = useState(false);
        const handleTogglebtn = () => {
                toggleBtn(!togglebutton)
          }

return(
        <div className="Navcontainer">
                <Container>
                <div className="Navchild_cont">
                            <div className="logoimage">
                                <Link to="/"><img src={Logoimg}/></Link>
                            </div>

                                <div className="Navsubchild-cont">
                                        <div className="solution">
                                            
                                            <NavDropdown title="Solutions" id="nav-dropdown">
                                                <NavDropdown.Item eventKey="4.1">Our Services</NavDropdown.Item>
                                                <NavDropdown.Item eventKey="4.2">Scalability</NavDropdown.Item>
                                                <NavDropdown.Item eventKey="4.3">E-Commerce Store</NavDropdown.Item>
                                                <NavDropdown.Item eventKey="4.4">Payments</NavDropdown.Item>
                                             </NavDropdown>
                                        </div>

                                        <div className="company">
                                        <NavDropdown title="Our Company" id="nav-dropdown">
                                                <NavDropdown.Item eventKey="4.1">Meet Our Team</NavDropdown.Item>
                                                <NavDropdown.Item eventKey="4.2">Developers</NavDropdown.Item>
                                                <NavDropdown.Item eventKey="4.3">Legal & Relaible</NavDropdown.Item>
                                                <NavDropdown.Item eventKey="4.4">Privacy Policy</NavDropdown.Item>
                                             </NavDropdown>
                                        </div>

                                        <div className="resource">
                                        <NavDropdown title="Resources" id="nav-dropdown">
                                                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                                                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                                                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                        </div>
                                </div>

                                <div className="buttonlog">
                                   <div className="login">
                                           <button>Log In</button>
                                   </div>

                                   <div className="signin" onClick={handleTogglebtn}>
                                   <button>Sign In
                                     {
                                        togglebutton ?
                                        <FiArrowRight size="15"/>
                                   : 
                                   <FiChevronRight size="15"/>
                                     }
                                       </button>
                                   </div>
                                </div>

                                <div className="menu-btn" onClick={handleToggle}>
                                      {toggle ?
                                      <button><FiX/></button>
                                          :
                                          <button><FiMenu/></button>
                                      }
                                </div>
                        </div>
                    
                </Container>     
        </div>



)
}

export default Navbar;