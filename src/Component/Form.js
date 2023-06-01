import React from "react";
import Navbar from "./NavBar";
import "./form.css";
<<<<<<< HEAD
import { Select } from "antd";
=======
import { Select, Button } from "antd";
>>>>>>> 80b0b26 (first commit)
const PriceList = () => {
  return (
    <div className="form_body">
      <h1>Price List</h1>
<<<<<<< HEAD
      <DataPriceList/>
=======
      <DataPriceList />
>>>>>>> 80b0b26 (first commit)
    </div>
  );
};

const DataPriceList = () => {
  return (
    <div>
      <div className="v1">
<<<<<<< HEAD
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
=======
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
            placeholder="เลือกยี้ห้อรถ"
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
        <section>
          <label className="textprice_3">รุ่นรถ</label>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="เลือกรุ่นรถ"
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
                label: "City",
              },
              {
                value: "2",
                label: "HR-V",
              },
              {
                value: "3",
                label: "Accord",
              },
              {
                value: "4",
                label: "Civil",
              },
            ]}
          />
        </section>
        <section>
          <label className="textprice_4">ปีรถ(พ.ศ.)</label>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="เลือกปีรถ"
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
                label: "City",
              },
              {
                value: "2",
                label: "HR-V",
              },
              {
                value: "3",
                label: "Accord",
              },
              {
                value: "4",
                label: "Civil",
              },
            ]}
          />
        </section>
        <section>
          <label className="textprice_5">โฉม</label>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="เลือกโฉมรถ"
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
                label: "City",
              },
              {
                value: "2",
                label: "HR-V",
              },
              {
                value: "3",
                label: "Accord",
              },
              {
                value: "4",
                label: "Civil",
              },
            ]}
          />
        </section>
        <div>
          <Button type="primary">
            ตรวจสอบข้อมูล
          </Button>
        </div>
>>>>>>> 80b0b26 (first commit)
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
