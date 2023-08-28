import React from "react";

const SecondHeaderFile = () => {
  const namArr = [
    {
      firstKey: "Version",
      secondKey: "2.0.0",

      thirdkey: "last Updated",
      fourthKey: "14 Aug, 2023",

      fifthKey: "ChangeLog",
      sixthKey: "View",

      seventhkey: "Framework",
      eightkey: "Bootstrap5",
    },
  ];
  return (
    <div>
      <div>
        <div className="middle2">
          {namArr.map((data, index) => {
            return (
              <>
                <div>
                  <h4>{data.firstKey}</h4>

                  <p>{data.secondKey}</p>
                </div>
                <div>
                  <h4>{data.thirdkey}</h4>

                  <p>{data.fourthKey}</p>
                </div>
                <div>
                  <h4>{data.fifthKey}</h4>

                  <p>{data.sixthKey}</p>
                </div>
                <div>
                  <h4>{data.seventhkey}</h4>
                  <p>{data.eightkey}</p>
                </div>
              </>
            );
          })}

          {/*<div>
            <h4>Version</h4>

            <p>2.0.0</p>
          </div> 

           <div>
            <h4>Last Updated</h4>

            <p>14 Aug, 2023</p>
          </div> 

          <div>
            <h4>Changelog</h4>

            <p style={{ color: "blue" }}>view</p>
          </div>

          <div>
            <h4>Framework</h4>

            <p>Bootstrap 5</p>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default SecondHeaderFile;
