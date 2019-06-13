
import React from '../node_modules/react';
import ReactDOM from "../node_modules/react-dom";

function Comp() {
    return(
    <div>
        <h1>Hello World</h1>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>);
}
ReactDOM.render( <Comp />, document.getElementById('container'));
