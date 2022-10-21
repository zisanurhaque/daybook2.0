import React, { useEffect, useState } from 'react';
import Head from './Head';
import Total from './Total';

//LocalStorage
const localMemory = () => {
    const localdata = localStorage.getItem('lists');
    if(localdata){
        return JSON.parse(localStorage.getItem('lists'))
    }else{
        return []
    }
}

const Main = () => {
    
    //Variables for input values
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [money, setMoney] = useState(0);

    //all values will store here
    const [data, setData] = useState(localMemory());

    //data will store as debit 
    const debitHandler = (e) => {
        e.preventDefault();
        let val = {Date: date, Title: title, Debit: money, Credit: null}

        if(!money || !title || !date){

        }else{
            setData([...data, val]);
            setDate('');
            setTitle('');
            setMoney(0);
        }
    }

    //data will store as credit
    const creditHandler = (e) => {
        e.preventDefault();
        let val = {Date: date, Title: title, Credit: money, Debit: null}

        if(!money || !title || !date){

        }else{
            setData([...data, val]);
            setDate('');
            setTitle('');
            setMoney(0);
        }
    }

    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(data));
    }, [data])

    //delete function
    const handleRemove = (id) => {
        const update = data.filter((item, index) => {
            return index !== id;
        })
        setData(update);
    }

    return(
        <>
            <main>

                <div className="desc">
                    <p>Please Fill All The Input</p>
                    <div className="dataInsert">
                        <input onChange={(e) => setDate(e.target.value)} className="inputDate" type="date" value={date}/>
                        <input onChange={(e) => setTitle(e.target.value)} className="title" type="text" placeholder="Title" value={title}/>
                        <input onChange={(e) => setMoney(parseInt(e.target.value))} className="value" type="number" placeholder="value($)" value={money === 0 ? "" : money}/>
                        <button onClick={debitHandler} className="dbt">Debit</button>
                        <button onClick={creditHandler}>Credit</button>
                    </div>
                </div>

                <table>
                    <Head/>
                    <tbody>
                        {
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td className="date">
                                        {item.Date}
                                        <button onClick={() => handleRemove(index)}>Delete</button>
                                    </td>
                                    <td className="description">{item.Title}</td>
                                    <td className="ext"></td>
                                    <td className="debit">{item.Debit}</td>
                                    <td className="credit">{item.Credit}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <Total data={data}/>
                </table>
                
            </main>
        </>
    )
}

export default Main;

