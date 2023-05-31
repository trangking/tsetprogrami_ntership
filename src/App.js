import "./App.css";
import "./nav.css";
import React from "react";

//import Form from "./Component/Form";
const BasicExample = () => {
  return (
    <nav class="menu-bar">
      <div>
        <img
          src="heng.png"
          alt="heng"
          height={50}
          width={50}
          className="bgimg"
        />
        <p className="item">HENG LEASING</p>
      </div>
    </nav>
  );
};

/*const Bthome = () => {
  return (
    <div>
      <div>
        <img src="/heng.png" alt="heng" width="50" className="imgp" />
      </div>
      <a className="button"> Hire Purchase(HP)</a>
      <a className="button_2">P-LOAN</a>
    </div>
  );
};*/

const Titles = () => {
  return (
    <div className="container">
      <div>
        <p>คำนวณสินเชื่อ</p>
        <p className="P1">HENG LEASING</p>
        <p className="p_2">รูปแบบรายการคำขอสินเชื่อ</p>
        <div>
          <button className="buttonHP">Hire Purchase(HP)</button>
          <button className="buttonP-loan">P-Loan</button>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <BasicExample />
      <Titles />
    </div>
  );
}

export default App;
