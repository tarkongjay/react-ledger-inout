import { useContext } from "react"
import DataContext from "../data/DataContext"
import '../ContextForm.css'
const ContextForm=()=>{
const {income,outcome} = useContext(DataContext)
const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
return(
    <div>
        <div>
            <p>ยอดคงเหลือ (บาท)</p>
            <h1>฿{formatNumber((income-outcome).toFixed(2))}</h1>
        </div>
        <div className="report-div">
            <div>
               <p>รายได้ทั้งหมด</p>
               <p className="text-income">{formatNumber(income)}</p>
            </div>
            <div>
            <p>รายจ่ายทั้งหมด</p>
               <p className="text-outcome">{formatNumber(outcome)}</p>
            </div>
        </div>
    </div>
)
}
export default ContextForm 