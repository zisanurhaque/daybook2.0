import React from "react";

const Total = ({data}) => {
    return(
        <>
            <thead>
                <tr>
                    <th className="date"></th>
                    <th className="description">Total</th>
                    <th className="ext"></th>
                    <th className="debit">
                    {
                        data.reduce((a,b) => {
                            return parseInt(a + b.Debit)
                        }, null)
                    }
                    </th>
                    <th className="credit">
                    {
                        data.reduce((a,b) => {
                            return parseInt(a + b.Credit)
                        }, null)
                    }
                    </th>
                </tr>
            </thead>
        </>
    )
}

export default Total;