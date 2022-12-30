import React from "react";
import "../nongguitar.css";
import ListItem from "./ListItem";
function Transion(props) {
  const {dataProps} = props //รับ prop มากจาก App.js แล้วสร้างตัวแปรเก็บให้ตรงกับชื่อ prop ที่ส่งมา
  return (
    <React.Fragment>
      <ul>
      {dataProps.map((e)=>{
            return <ListItem data={e.title} money={e.money} key={e.id}/> //prop ส่งข้อมูล แม่ไปลูก บนไปล่าง
         })}
      </ul>
    </React.Fragment>
  );
}

export default Transion;
