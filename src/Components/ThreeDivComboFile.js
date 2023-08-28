import React from 'react'

const ThreeDivComboFile = () => {

  const dataArr=[
    {
      first:"Bootstrap5",
    second:"BSB Framework",
    third:"HTML and CSS3",
    fourth:"Responsive Layout",
    fifth:"Single Page Design",
    sixth:"W3C valid",
    seventh:"Clean and Commented Code",
    eighth:"SEO Optimized",
    nineth:"Cross Browser Compatible"
    }
  ];

  const dataArr2=[
    {
      first:"Bootstrap5",
    second:"BSB Framework",
    third:"HTML and CSS3",
    fourth:"Responsive Layout",
    fifth:"Single Page Design",
    sixth:"W3C valid",
    seventh:"Clean and Commented Code",
    eighth:"SEO Optimized",
    nineth:"Cross Browser Compatible"
    }
  ];

  return (
    <div className='topSecondThirdDivCombo'>
      <div className='secondThirdDivCombo'>
        <div className='firstSecondThirdDivCombo'>
          <h2 style={{paddingLeft:"60px"}}>Highlights</h2>
        </div>
        <div className='secondSecondThirdDivCombo'>
          <p style={{fontSize:"20px"}}>Features</p>
          <div className='featuresDiv1'>
          {dataArr.map((data,index)=>{
            return(
                <div>
                    <ul>
                        <li>{data.first}</li>
                        <li>{data.second}</li>
                        <li>{data.third}</li>
                        <li>{data.fourth}</li>
                        <li>{data.fifth}</li>
                        <li>{data.sixth}</li>
                        <li>{data.seventh}</li>
                        <li>{data.eighth}</li>
                        <li>{data.nineth}</li>
                    </ul>
                </div>
            )
         })}
          
          </div>
        </div>
        <div className='thirdSecondThirdDivCombo'>
        <p style={{fontSize:"20px"}}>Pro Features</p>
        <div className='featuresDiv1'>
        {dataArr2.map((data,index)=>{
            return(
                <div>
                    <ul>
                        <li>{data.first}</li>
                        <li>{data.second}</li>
                        <li>{data.third}</li>
                        <li>{data.fourth}</li>
                        <li>{data.fifth}</li>
                        <li>{data.sixth}</li>
                        <li>{data.seventh}</li>
                        <li>{data.eighth}</li>
                        <li>{data.nineth}</li>
                    </ul>
                </div>
            )
         })}
        </div>
        </div>
      </div>
    </div>
  )
}

export default ThreeDivComboFile