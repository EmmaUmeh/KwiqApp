import React from "react";
import Container from "react-bootstrap/esm/Container";
import sectionimg from '../assets/svg_draw.svg';

const Section = () => {
    const Titlename = {
        id1:"Ease Payment",
        id2:"Peace Of Mind",
        id3:"Global Payment",   
        id4:"100% Assurance", 
        id5:"International Market", 
        id6:"Secure Payment" 
    }
    return(
        <div className="sectioncont">
           
                <Container>
                <div className="sectionchild">
                    <div className="sectionbg1">
                        <div className="sectionimg1">
                            <img src={sectionimg}/>
                        </div>
                        <div className="titlename">
                            <h4>{Titlename.id1}</h4>
                        </div>
                        <div className="sectionptag">
                            <p>Our commitment is to make payments and fund secure. Making payment an ease of scalability for our end users.</p>
                        </div>
                    </div>
                    {/* Secondbg */}
                    <div className="sectionbg1">
                        <div className="sectionimg1">
                            <img src={sectionimg}/>
                        </div>
                        <div className="titlename">
                            <h4>{Titlename.id2}</h4>
                        </div>
                        <div className="sectionptag">
                            <p>Our commitment is to make payments and fund secure. Making payment an ease of scalability for our end users.</p>
                        </div>
                    </div>
                    {/* Thirdbg */}
                    <div className="sectionbg1">
                        <div className="sectionimg1">
                            <img src={sectionimg}/>
                        </div>
                        <div className="titlename">
                            <h4>{Titlename.id3}</h4>
                        </div>
                        <div className="sectionptag">
                            <p>Our commitment is to make payments and fund secure. Making payment an ease of scalability for our end users.</p>
                        </div>
                    </div>
                    </div>

                    {/* Section2 */}
                    <div className="sectionchild">
                    <div className="sectionbg1">
                        <div className="sectionimg1">
                            <img src={sectionimg}/>
                        </div>
                        <div className="titlename">
                            <h4>{Titlename.id4}</h4>
                        </div>
                        <div className="sectionptag">
                            <p>Our commitment is to make payments and fund secure. Making payment an ease of scalability for our end users.</p>
                        </div>
                    </div>
                    {/* Secondbg */}
                    <div className="sectionbg1">
                        <div className="sectionimg1">
                            <img src={sectionimg}/>
                        </div>
                        <div className="titlename">
                            <h4>{Titlename.id5}</h4>
                        </div>
                        <div className="sectionptag">
                            <p>Our commitment is to make payments and fund secure. Making payment an ease of scalability for our end users.</p>
                        </div>
                    </div>
                    {/* Thirdbg */}
                    <div className="sectionbg1">
                        <div className="sectionimg1">
                            <img src={sectionimg}/>
                        </div>
                        <div className="titlename">
                            <h4>{Titlename.id6}</h4>
                        </div>
                        <div className="sectionptag">
                            <p>Our commitment is to make payments and fund secure. Making payment an ease of scalability for our end users.</p>
                        </div>
                    </div>
                    </div>
                </Container>
           
        </div>
    )
}

export default Section;