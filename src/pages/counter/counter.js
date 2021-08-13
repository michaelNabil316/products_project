import './counter.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useContext } from 'react';
import { counterContext } from '../../context/counterContext';


export default function Counter() {

    const { noContext, setNoContext } = useContext(counterContext);



    return (
        <div>
            <h1>counter Page</h1>
            <h2 className="noDiv">{noContext}</h2>
            <div className="btnDiv">
                <input type="button" value="+" className=" btnStyl"
                    onClick={() => { setNoContext(parseInt(noContext) + 1) }} />
                <input type="button" value="-" className=" btnStyl"
                    onClick={() => { if (noContext > 0) { setNoContext(parseInt(noContext) - 1) } }} />
            </div>
        </div>
    )
}
