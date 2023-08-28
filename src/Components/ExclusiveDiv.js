import React from "react";

const ExclusiveDiv = () => {
  const arr1 = [
    {
      first: "Mouse Interactive Header",
      second: "Big Carosuel",
      third: "Fact Counter",
      fourth: "Sortable Portfolio",
      fifth: "Working PHP/Ajex Form",
      sixth: "Pricing Switcher",
    },
  ];

  return (
    <div className="exclusiveDiv">
      <div className="firstExclusiveDiv">
        <h3>Exclusive</h3>
      </div>
      <div className="secondExclusiveDiv">
        <p
          style={{
            paddingTop: "30px",
            paddingLeft: "50px",
            fontSize: "20px",
            fontFamily: "Times New Roman', Times, serif",
          }}
        >
          Special Features
        </p>

        {arr1.map((data, index) => {
          return (
            <>
              <div className="innerSecondExclusiveDiv">
                <ul>
                  <li>{data.first}</li>
                  <li>{data.second}</li>
                  <li>{data.third}</li>
                </ul>
              </div>
              <div className="innerSecondFirstExclusiveDiv">
                <ul>
                <li>{data.fourth}</li>
                <li>{data.fifth}</li>
                <li>{data.sixth}</li>
                </ul>
              </div>
              
            </>
          );
        })}

        {/* <div className="innerSecondExclusiveDiv">
          <ul>
            <li>Mouse Interactive Header</li>
            <li>Big Carosuel</li>
            <li>Fact Counter</li>
          </ul>
        </div>
        <div className="innerSecondFirstExclusiveDiv">
          <ul>
            <li>Sortable Portfolio</li>
            <li>Working PHP/Ajex Form</li>
            <li>Pricing Switcher</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default ExclusiveDiv;
