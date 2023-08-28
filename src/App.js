import "./App.css";
import firstImage from "../src/Assets/bootstrap.svg";
import HeaderFile from "./Components/HeaderFile";
import ContentFirst from "./Components/ContentFirst";
import SecondHeaderFile from "./Components/SecondHeaderFile";
import ThreeDivComboFile from "./Components/ThreeDivComboFile";
import ExclusiveDiv from "./Components/ExclusiveDiv";
import BrowseDiv from "./Components/BrowseDiv";
// import EmptyFourDiv from './Components/EmptyFourDiv';
import EmptyDivFour from "./Components/EmptyDivFour";
import Table from "./Components/Table";
function App() {
  return (
    <div>
      <div className="MainDiv">
        <div className="ImageDiv">
          <img className="ImageTag" src={firstImage}></img>
        </div>

        <div className="SecDiv">
          <div className="tempDiv">
            <select name="" id="">
              <option value="">Templates</option>
            </select>
          </div>
          <div className="compDiv">
            <select name="" id="">
              <option value="">Components</option>
            </select>
          </div>
          <div className="paraDiv">
            <p className="paraDiv1">Blog</p>
            <p className="paraDiv2">Tags</p>
            <p className="paraDiv3">Email Icon</p>
          </div>
        </div>
      </div>

      <HeaderFile />

      <ContentFirst />
      <SecondHeaderFile />
      <ThreeDivComboFile />
      <ExclusiveDiv />
      <BrowseDiv />
      <Table />
      {/* <EmptyFourDiv/> */}
      {/* <EmptyDivFour/> */}
    </div>
  );
}

export default App;
