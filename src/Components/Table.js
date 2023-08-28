import React from "react";
import { FaCheck, FaWindowClose, FaInfoCircle, FaCloudDownloadAlt, FaShoppingCart } from "react-icons/fa";

const Table = () => {
  const data = [
    {
      FirstName: "ProjectAssigned",
      firstColumn: true,
      secondColumn: true,
      thirdColumn: false,
      fourthColumn: true,
    },
    {
      FirstName: "OnWoeking Project",
      firstColumn: true,
      secondColumn: true,
      thirdColumn: false,
      fourthColumn: true,
    },
    {
      FirstName: "FrontendApplication",
      firstColumn: true,
      secondColumn: false,
      thirdColumn: true,
      fourthColumn: false,
    },
    {
      FirstName: "AppDevlopment",
      firstColumn: true,
      secondColumn: false,
      thirdColumn: false,
      fourthColumn: false,
    },
    {
      FirstName: "Number of Websites",
      firstColumn: true,
      secondColumn: false,
      thirdColumn: false,
      fourthColumn: false,
    },
    {
      FirstName: "PHP/Ajex contact",
      firstColumn: true,
      secondColumn: false,
      thirdColumn: false,
      fourthColumn: false,
    },
    {
      FirstName: "SASS/SCSS services",
      firstColumn: true,
      secondColumn: false,
      thirdColumn: false,
      fourthColumn: false,
    },
    {
      FirstName: "Access to all",
      firstColumn: true,
      secondColumn: false,
      thirdColumn: false,
      fourthColumn: false,
    },
    {
      FirstName: "Resell And Reuse",
      firstColumn: true,
      secondColumn: true,
      thirdColumn: true,
      fourthColumn: true,
    },
    {
      FirstName: "Use in SAAS",
      firstColumn: true,
      secondColumn: true,
      thirdColumn: true,
      fourthColumn: true,
    },
    {
      FirstName: "Free Updates",
      firstColumn: true,
      secondColumn: true,
      thirdColumn: true,
      fourthColumn: true,
    },
    {
      FirstName: "Forum Support",
      firstColumn: true,
      secondColumn: true,
      thirdColumn: true,
      fourthColumn: true,
    },
    {
      FirstName: "Websites for clients",
      firstColumn: true,
      secondColumn: false,
      thirdColumn: false,
      fourthColumn: false,
    },
    {
      FirstName: "Premium via Email",
      firstColumn: true,
      secondColumn: true,
      thirdColumn: true,
      fourthColumn: true,
    },
    {
      FirstName: "JS Source Files",
      firstColumn: true,
      secondColumn: true,
      thirdColumn: true,
      fourthColumn: true,
    },
  ];

  return (
    <div>
      <div className="bottom">
        <div>
          <table id="alter">
            <tr>
              <td id="tdfirst"></td>
              <td id="tds">
                <div id="div1">
                  <h1>Free </h1>

                  <p>personal</p>
                </div>

                <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>
                  $<span style={{ verticalAlign: "sub" }}>0</span>
                </h1>

                <div id="div2">
                  <p>Lifetime access</p>
                </div>
              </td>

              <td id="tds">
                <div id="div1">
                  <h1>Pro </h1>

                  <p>Developer</p>
                </div>

                <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>
                  $<span style={{ verticalAlign: "sub" }}>29</span>
                </h1>
                <div id="div2">
                  <p style={{ width: "100px", marginLeft: "70px" }}>
                    <span>12</span> Months Access Single Domain
                  </p>
                </div>
              </td>

              <td id="tds">
                <div id="div1">
                  <h1>BB Startup </h1>

                  <p>Freelancer</p>
                </div>

                <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>
                  $<span style={{ verticalAlign: "sub" }}>49</span>
                </h1>

                <div id="div2">
                  <p>
                    <span>3</span>Mpnths Access
                  </p>

                  <p>
                    <span>4</span> Pro BS Templates
                  </p>

                  <p>
                    <span>27</span>Pro BS Components
                  </p>
                </div>
              </td>

              <td id="tds">
                <div id="div1">
                  <h1>BB Club </h1>

                  <p>agency</p>
                </div>

                <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>
                  $<span style={{ verticalAlign: "sub" }}>149</span>
                </h1>

                <div id="div2">
                  <p>
                    <span>12</span>Mpnths Access
                  </p>

                  <p>
                    <span>4</span> Pro BS Templates
                  </p>

                  <p>
                    <span>27</span>Pro BS Components
                  </p>
                </div>
              </td>
            </tr>

             {/* <tr>
              <td>UserName</td>

              <td>UserName</td>

              <td>India</td>

              <td>India</td>

              <td>India</td>
            </tr> 

             <tr>
              <td>UserName</td>

              <td>UserName</td>

              <td>India</td>

              <td>India</td>

              <td>India</td>
            </tr>

            <tr>
              <td>UserName</td>

              <td>UserName</td>

              <td>India</td>

              <td>India</td>

              <td>India</td>
            </tr>

            <tr>
              <td>UserName</td>

              <td>UserName</td>

              <td>India</td>

              <td>India</td>

              <td>India</td>
            </tr>

            <tr>
              <td>UserName</td>

              <td>UserName</td>

              <td>India</td>

              <td>India</td>

              <td>India</td>
            </tr>

            <tr>
              <td>UserName</td>

              <td>UserName</td>

              <td>India</td>

              <td>India</td>

              <td>India</td>
            </tr>

            <tr>
              <td>UserName</td>

              <td>UserName</td>

              <td>India</td>

              <td>India</td>

              <td>India</td>
            </tr>

            <tr>
              <td>UserName</td>

              <td>UserName</td>

              <td>India</td>

              <td>India</td>

              <td>India</td>
            </tr>

            <tr>
              <td>UserName</td>

              <td>UserName</td>

              <td>India</td>

              <td>India</td>

              <td>India</td>
            </tr>

            <tr>
              <td>UserName</td>

              <td>UserName</td>

              <td>India</td>

              <td>India</td>

              <td>India</td>
            </tr>

            <tr>
              <td>UserName</td>

              <td>UserName</td>

              <td>India</td>

              <td>India</td>

              <td>India</td>
            </tr>  */}

            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.FirstName }<span style={{display: "flex",justifyContent: "end",marginTop: "-20px",marginRight: "10px",}}><FaInfoCircle/></span></td>
                <td>
                  {item.firstColumn ? (<span><FaCheck />{" "}</span>) : (<span><FaWindowClose /></span>)}
                </td>

                <td>
                  {item.secondColumn ? (<span><FaCheck /></span>) : (<span><FaWindowClose /></span>
                  )}
                </td>

                <td>
                  {item.thirdColumn ? (<span><FaCheck />{" "}</span>) : (<span><FaWindowClose /></span>)}
                </td>

                <td>
                  {item.fourthColumn ? (<span><FaCheck /></span>) : (<span><FaWindowClose />{" "} </span> )}
                </td>
              </tr>
            ))}

            <tr>
              <td style={{ backgroundColor: "rgb(232, 236, 238)" }}></td>

              <td style={{ height: "90px", backgroundColor: "#85c0ff" }}>
                
                <button className="buttond" style={{ backgroundColor: "rgb(16, 189, 16)" }}> <span><FaCloudDownloadAlt/></span> Free Download
                </button>
              </td>

              <td style={{ height: "90px", backgroundColor: "#85c0ff" }}>
                <button className="buttond"><span><FaShoppingCart/></span>Buy Now</button>
              </td>

              <td style={{ height: "90px", backgroundColor: "#85c0ff" }}>
                <button className="buttond"><span><FaShoppingCart/></span>Buy Now</button>
              </td>

              <td style={{ height: "90px", backgroundColor: "#85c0ff" }}>
                <button className="buttond"> <span><FaShoppingCart/></span>Buy Now</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
