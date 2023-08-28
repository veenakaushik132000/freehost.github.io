import React from 'react'

const BrowseDiv = () => {

const arr1=[
  {
    first:"Agency",
    second:"Blog",
    third:"Business",
    fourth:"Consulting",
    fifth:"Corporate",
    sixth:"Creative",
    seventh:"Finance",
    eigth:"Landing Page",
    ninth:"Marketing",
    tenth:"Pro",
    elventh:"Small Business",
    tweleve:"Startup"
  }
]



  return (
    <div className='topSecondThirdDivCombofirst'>
      <div className='secondThirdDivCombofirst'>
        <div className='firstSecondThirdDivCombofirst'>
          <h2 style={{paddingLeft:"60px"}}>Browse</h2>
        </div>
        <div className='secondSecondThirdDivCombofirst'>
          <p style={{fontSize:"20px",marginTop:"-20px"}}>Category</p>
          
          <div className='categoryDiv1'>
            {/* <p>Agency, Blog, Business, Consulting, Corporate, Creative, Finance, Landing Page, Marketing,
                Pro, Small Business, Startup
            </p> */}
            {arr1.map((data)=>{
            return(
                <p>
                  
                      {data.first},
                      {data.second},
                      {data.third},<br></br>
                      {data.fourth},
                      {data.fifth},<br></br>
                      {data.sixth},
                      {data.seventh},
                      {data.eigth},
                      {data.ninth},
                      {data.tenth},
                      {data.elventh},
                      {data.tweleve}
                </p>
            )
         })}
          </div>
        </div>
        <div className='thirdSecondThirdDivCombofirst'>
        <p style={{fontSize:"20px"}}>Tags</p>
        <div className='categoryDiv2'>
        {arr1.map((data)=>{
            return(
                <p>
                  
                      {data.first},
                      {data.second},
                      {data.third},<br></br>
                      {data.fourth},
                      {data.fifth},<br></br>
                      {data.sixth},
                      {data.seventh},
                      {data.eigth},
                      {data.ninth},
                      {data.tenth},
                      {data.elventh},
                      {data.tweleve},
                      {data.sixth},<br></br>
                      {data.seventh},
                      {data.eigth},
                      {data.ninth},
                      {data.tenth},
                      {data.elventh}
                </p>
            )
         })}
        </div>
        </div>
      </div>
    </div>
  )
}

export default BrowseDiv