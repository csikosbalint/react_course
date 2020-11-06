import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function PaymentFinal() {
    let query = useQuery();
    return (
        <div style={{justifyContent: 'center    '}}>
            <p>In order to finalize booking please verify booking details and approve payment</p>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row' }}>
                <div>
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=http%3A%2F%2Furlecho.appspot.com%2Fecho%3Fstatus%3D200%26Content-Type%3Dtext%252Fhtml%26body%3D%253C%21DOCTYPE%2520html%253E%250A%253Chtml%253E%250A%253Cbody%253E%250A%250A%253Ch2%253EClick%2520to%2520pay%252080%2520USD%21%253C%252Fh2%253E%250A%250A%253Cbutton%2520onclick%253D%2522myFunction%28%29%2522%253EPay%2520it%253C%252Fbutton%253E%250A%250A%253Cscript%253E%250Afunction%2520myFunction%28%29%2520%257B%250A%2520%2520alert%28%2522Haha%2522%29%253B%250A%257D%250A%253C%252Fscript%253E%250A%250A%253C%252Fbody%253E%250A%253C%252Fhtml%253E%250A" />
                </div>
                <div>
                    <p>Movie: {query.get('movie')}</p><br/>
                    <p>Date: {query.get('date')}</p><br/>
                    <p>Time: {query.get('timing')}</p><br/>
                    <p>Seats: {query.get('seats')}</p><br/>
                </div>
            </div>
        </div>
    )
}