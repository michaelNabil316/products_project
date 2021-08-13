import './login.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';

export default function Login() {

    const [user, setUser] = useState({
        userEmail: "",
        userPass: ""
    });
    const [userErr, setUserErr] = useState({
        userEmailErr: null,
        userPassErr: null,
        errEmailCol: null,
        errPassCol: null
    });
    const [passattr, setPassAttr] = useState(false);

    const handelChange = (e) => {

        if (e.target.name === "useremail") {
            setUser({
                ...user,
                userEmail: e.target.value
            });
            e.target.value.length === 0 ?
                setUserErr({
                    ...userErr,
                    userEmailErr: "this filed is required",
                    errEmailCol: "red"
                }) :
                setUserErr({
                    ...userErr,
                    userEmailErr: null,
                    errEmailCol: null
                });
            (!(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(e.target.value))) ?
                setUserErr({
                    ...userErr,
                    userEmailErr: "Not vaild email",
                    errEmailCol: "red"
                }) :
                setUserErr({
                    ...userErr,
                    userEmailErr: null,
                    errEmailCol: null
                })
        }
        if (e.target.name === "userpass") {
            setUser({
                ...user,
                userPass: e.target.value
            });
            e.target.value.length < 8 ?
                setUserErr({
                    ...userErr,
                    userPassErr: "require ate least 8 digits",
                    errPassCol: "red"
                }) :
                setUserErr({
                    ...userErr,
                    userPassErr: null,
                    errPassCol: null
                });
        }
    }
    const submitLogin = () => {

    }
    return <div>
        <div className="container logstyle">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
                    <input onChange={handelChange} value={user.userEmail} style={{ borderColor: userErr.errEmailCol }} name="useremail" type="email" className="form-control width30" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <p className="errColor">{userErr.userEmailErr}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                    <div className="row">
                        <input onChange={handelChange} value={user.userPass} style={{ borderColor: userErr.errPassCol }} name="userpass" type={passattr ? "text" : "Password"} className="form-control width30" id="exampleInputPassword1" placeholder="Password" />
                        <button type="button" className="btn btn-primary Pstyle" onClick={() => { setPassAttr(!passattr) }}>p</button>
                    </div>
                    <p className="errColor">{userErr.userPassErr}</p>
                </div>
                <button type="button" className="btn btn-outline-primary" onClick={submitLogin}>Enter</button>
            </form>
        </div>



    </div>
}