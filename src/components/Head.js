import React from "react";

const Head = () => {
    return(
        <>
            <thead>
                <tr>
                    <th className="date">Date</th>
                    <th className="description">Description</th>
                    <th className="ext">Ext.</th>
                    <th className="debit">Debit</th>
                    <th className="credit">Credit</th>
                </tr>
            </thead>
        </>
    )
}

export default Head;