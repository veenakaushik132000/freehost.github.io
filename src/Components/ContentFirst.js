import React from 'react'
import firstdiv from '../Assets/firstdiv.png'

const ContentFirst = () => {
    return (
        <div className='contentDiv'>
            <div className='firstInnerContentDiv'>
            <div >
                {/* <h3>FirstSection</h3> */}
                <img className='imagetag1' src={firstdiv}></img>
            </div>
            <div className='headingDivhead'>
                <p>Where We Do ?</p>
            </div>
            <div className='headingDivhead2'>
                <h2>We are giving you perfect<br></br>Solutions with our proficient<br></br>Services</h2>
            </div>
            <div className='threeDivCombo'>
                <div className='threeDivCombo1'>
                    <h5 className='thirdDivComboHeading'>Machine Vision</h5>
                    <p style={{marginTop:"-15px",paddingLeft:"10px",fontSize:"14px",fontFamily:"Times New Roman', Times, serif"}}>gfjsdf sdjnbfs bfsjh nbfjnsdf sdfbsd sjbfn dfns </p>
                </div>
                <div className='threeDivCombo2'>
                    <h5 className='thirdDivComboHeading'>AI Deployment</h5>
                    <p style={{marginTop:"-15px",paddingLeft:"10px",fontSize:"14px",fontFamily:"Times New Roman', Times, serif"}}>gfjsdf sdjnbfs bfsjh nbfjnsdf sdfbsd sjbfn dfns </p>
                </div>
                <div className='threeDivCombo3'>
                    <h5 className='thirdDivComboHeading'>Robotic Process</h5>
                    <p style={{marginTop:"-15px",paddingLeft:"10px",fontSize:"14px",fontFamily:"Times New Roman', Times, serif"}}>gfjsdf sdjnbfs bfsjh nbfjnsdf sdfbsd sjbfn dfns </p>
                </div>
            </div>
            
            </div>
            <div className='secondInnerContentDiv'>
                <p className='secondInnerPara1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> In, neque atque 
                    nihil dicta, deserunt,Lorem ipsum dolor<br></br> sit amet consectetur adipisicing elit.
                    In, neque atque nihil dicta,<br></br> deserunt,Lorem ipsum dolor sit amet consectetur adipi
                    sicing elit.<br></br> In, neque atque nihil dicta, deserunt,voluptate nemo obcaecati<br></br> aperiam
                    accusantium voluptatem eligendi illo aliquam hic <br></br>dignissimos laudantium tempora dolor fugiat illum.</p>

                <h2 className='headingTag1'>Bootstrap One Page Website Template</h2>

                <p className='secondInnerPara1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> In, neque atque 
                    nihil dicta, deserunt,Lorem ipsum dolor<br></br> sit amet consectetur adipisicing elit.
                    In, neque atque nihil dicta,<br></br> deserunt,Lorem ipsum dolor sit amet consectetur adipi
                    sicing elit.<br></br> In, neque atque nihil dicta, deserunt,voluptate nemo obcaecati<br></br> aperiam
                    accusantium voluptatem eligendi illo aliquam hic <br></br>dignissimos laudantium tempora dolor fugiat illum.</p>

                    <div>
                    <button className="buttonFirst" type="button">

                        <span style={{ marginRight: "5px" }}>&#x1F441;</span>Preview

                    </button>

                    <button className="buttonSecond" type="button">

                        <span>&#128722;</span>Pricing

                    </button>

                    <div>

                        <button className="buttonThird">

                            Lite Version

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentFirst