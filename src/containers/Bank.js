import React, {useState} from "react";
import './Bank.scss'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default function Bank(){

    const [date, setDate] = useState(new Date());
    // const [rate, setRate] = useState(0);
    //
    // let url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20200505&json`
    // let rate = 0;
    // async function browse(url){
    //     fetch(url).then(result => {
    //         return result.json()
    //     }).then((result) => {
    //         console.log(result)
    //         for(let current in result){
    //             if(current.cc ==='USD'){
    //                 rate = current.rate
    //                 return rate
    //             }
    //         }
    //     }).catch((e) => {
    //         console.error(e)
    //     })
    // }
    //
    // setRate()

    return (
        <div className='BankWrapper'>
            <div className='DateSelector'>
                <DatePicker selected={date}
                            dateFormat="yyyy/MM/dd"
                            onChange={(date) => setDate(date)}
                            isClearable
                            placeholderText="I have been cleared!"
                />
            </div>
            <div className='Submit'>

                {/*<button onClick={()=> browse(url)}>LetSee</button>*/}
            </div>
            <div className='result'>
                {/*{rate}*/}
            </div>
        </div>
    )

}