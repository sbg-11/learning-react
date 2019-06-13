import React from 'react';
import ReactDOM from 'react-dom';

function MyInfo(){
    return (
        <div>
            <h1 className='name'>Snehal Gunjal</h1>
            <p>This is me.This is a little bit about myself.I want to visit the following places</p>
            <ul>
                <li>India</li>
                <li>Australia</li>
                <li>South Africa</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<MyInfo/>, document.getElementById('container'));