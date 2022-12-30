import React,{ useEffect, useState } from "react"
import '../FormComponent.css'
import { v4 as uuidv4 } from 'uuid';

const FormComponent=(props)=>{
const {AddtheItem} = props
const [title,setTitle] = useState('') //เหมือน prop แต่ ให้ค่ามันเปลี่ยนแปลงได้
const [money,setMoney] = useState(0)
const [FormDis,setDisbtn] = useState(false)

const inputTitle = (event)=>{
    // console.log(event.target.value) //ดึงค่าใน input
    setTitle(event.target.value);
}

const inputMoney = (event)=>{
    // console.log(event.target.value) //ดึงค่าใน input
    setMoney(event.target.value);
}
const saveData = (event)=>{
    event.preventDefault();//ไม่ให้ form มันรีค่าเมื่อกดปุ่ม เพิ่มข้อมูล
    const listHook={
        id: uuidv4(),
       title:title,
       money:Number(money)
    }
    AddtheItem(listHook)
    setTitle('')
    setMoney(0)
}
useEffect(()=>{ //ดักค่าที่เกิดการเปลี่ยนแปลง 
    //ตรวจสอบการเปลี่ยนแปลงที่เกิดขึ้นภายใน Application ของเราว่ามีข้อมูลส่วนใด บ้างที่เปลี่ยนแปลงไปจากค่าหนึ่งไปสู่อีกค่าหนึ่ง 
    //จนส่งผลให้ Render Component ใหม่อีกครั้ง
    
    //กรณีนี้คือถ้าไม่ใส่ รายรับ รายจ่าย จะไม่สามารถเพิ่มข้อมูลได้
    console.log('Use Effect')
    if(title.trim().length>0 && money!==0){ //.trim() = ตัดช่องว่างซ้ายขวาของ string
        setDisbtn(true) 
    }  
},[title,money])

return(
    <React.Fragment>
          <form onSubmit={saveData}>
            <div className="form-control" >
                <lable>ชื่อรายการ</lable>
                <input type="text" placeholder="ชื่อรายการที่ระบุ" onChange={inputTitle} value={title}></input>
            </div>
            <div className="form-control">
                
                <lable>จำนวนเงิน</lable>
                <input type="number" placeholder="(+รายรับ -รายจ่าย)" onChange={inputMoney} value={money}></input>
            </div>
        <div className="form-control">
            <button type="submit" disabled={!FormDis}>เพิ่มข้อมูล</button>
        </div>
          </form>
    </React.Fragment>
)
}
export default FormComponent