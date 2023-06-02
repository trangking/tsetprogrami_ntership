import React from "react";
import Navbar from "./NavBar";
import "./form.css";

import { Button } from "antd";

const PriceList = () => {
  return (
    <div className="form_body">
      <h1>Price List</h1>
      <DataPriceList />
    </div>
  );
};

const DataPriceList = () => {
  return (
    <div>
      <div className="v1">
        <section>
          <label className="textprice_1">ประเภท</label>
          
        </section>

        <section>
          <label className="textprice_2">ยี่ห้อ</label>
          
        </section>
        <section>
          <label className="textprice_3">รุ่นรถ</label>
          
        </section>
        <section>
          <label className="textprice_4">ปีรถ(พ.ศ.)</label>

        </section>
        <section>
          <label className="textprice_5">โฉม</label>
         
        </section>
        <div>
          <Button >ถัดไป</Button>
        </div>
      </div>
    </div>
  );
};

function Form() {
  return (
    <div>
      <Navbar />
      <PriceList />
    </div>
  );
}

export default Form;
