import React from "react";
import PropTypes from 'prop-types'; // ES6
import '../listitem.css'
function ListItem(p) { //props ใน วงเล็บ 
  const check = 0>p.money ? "exit":"input"
  const check1 = 0>p.money ? "-":"+"
  const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
  return (
    <div>
      <li className={check}>{p.data}<span>{check1}{formatNumber(Math.abs(p.money))}</span></li>
    </div>
  );
}

ListItem.propTypes ={
data: PropTypes.string.isRequired, //บังคับไม่ใส่ค่าว่าง
money: PropTypes.number

}
//Math.abs(p.money) ให้ค่าลบเป็นค่าบวก
  
export default ListItem;
