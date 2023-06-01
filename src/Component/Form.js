import React from "react";
import Navbar from "./NavBar";
import "./form.css";
import { Select } from "antd";
const PriceList = () => {
  return (
    <div className="form_body">
      <h1>Price List</h1>
      <DataPriceList/>
    </div>
  );
};

const DataPriceList = () => {
  return (
    <div>
      <div className="v1">
      <section>
        <label className="textprice_1">ประเภท</label>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="เลือกประเภทรถ"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={[
            {
              value: "1",
              label: "รถเก๋ง",
            },
            {
              value: "2",
              label: "รถกะบะ",
            },
            {
              value: "3",
              label: "รถตู้",
            },
            {
              value: "4",
              label: "รถHUV",
            },
          ]}
        />
        </section>
        <section>
        <label className="textprice_2">ยี่ห้อ</label>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="เลือกประเภทรถ"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={[
            {
              value: "1",
              label: "Honda",
            },
            {
              value: "2",
              label: "Toyota",
            },
            {
              value: "3",
              label: "BYD",
            },
            {
              value: "4",
              label: "Rolls-Royce",
            },
          ]}
        />
        </section>
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
