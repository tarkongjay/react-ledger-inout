import React, { Component, useEffect, useReducer, useState } from "react";
import Transion from "./component/Transion";
import "./nongguitar.css";
import FormComponent from "./component/FormComponent";
import DataContext from "./data/DataContext";
import ContextForm from "./component/ContextForm";
import { element } from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { v4 as uuidv4 } from 'uuid';
function App() {
  const data1 = [];
  const [items, newItemData] = useState(data1);

  const [incomeKid, setIncomeKid] = useState(0);
  const [outcomeKid, setoutcomeKid] = useState(0);

  const OnAddItem = (newItem) => {
    console.log("ค่าที่ได้จาก FormComponent", newItem);
    newItemData((prev) => {
      return [newItem, ...prev]; //วนลูปข้อมูล data1 ให้ newITEM  ขึ้นก่อน data1
    });
  };
  useEffect(() => {
    const am = items.map((items) => items.money); //map แบบ object
    const income = am
      .filter((element) => element >= 0)
      .reduce((total, element) => (total += element), 0)
    const outcome =
      am
        .filter((element) => element < 0)
        .reduce((total, element) => (total += element), 0) * -1; //-2500x-1 ==2500
    setIncomeKid(income.toFixed(2));
    setoutcomeKid(outcome.toFixed(2)); //.toFixed(2)ให้แสดงทศนิยม 2 ตำแหน่ง
  }, [items, incomeKid, outcomeKid]);

  //reducer state
  const [showReport, setShowReport] = useState(false); //โดยทั่วไป State สามารถอ่านค่าได้อย่างเดียว
  //ถ้าต้องการอยากจะเปลี่ยนแปลงค่า State จะใช้ useReducer
  const reducer = (state, action) => {
    //เหมือน state เลย แต่ state จะไม่สามารถเปลี่ยนค่าได้
    switch (action.type) {
      case "SHOW":
        return setShowReport(true);
      case "HIDE":
        return setShowReport(false);
      //action.payload ใช้กับ payload
    }
  };
  const [result, dispatch] = useReducer(reducer, showReport);

  return (
    <DataContext.Provider
      value={{
        income: incomeKid,
        outcome: outcomeKid,
      }}
    >
      <React.Fragment>
        <div className="container">
          <div>
            <h1>แอพการบันทึกรายรับ - รายจ่าย</h1>
            <Router>
              <div className="linkrouter">
                <Link to="/"><a>ข้อมูลบัญชี</a></Link>
                <Link to="/insert">บันทึกข้อมูล</Link>
              </div>
              <Switch>
                <Route path="/" exact>
                {showReport ? <ContextForm /> : ""}
            <div className="butt">
              <button onClick={() => dispatch({ type: "SHOW", payload: 10 })}>
                แสดง
              </button>
              <button onClick={() => dispatch({ type: "HIDE", payload: 10 })}>
                ซ่อน
              </button>
            </div>
                </Route>
                <Route path="/insert">
                <FormComponent AddtheItem={OnAddItem} />
            <Transion dataProps={items} />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </React.Fragment>
    </DataContext.Provider>
  );
}

export default App;
