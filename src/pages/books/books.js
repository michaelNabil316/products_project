import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../../components/bookCard/bookCard.js';

export default function Books() {
    const [onFirstClck, setonFirstClck] = useState(false);
    const [bookName, setbookName] = useState("");

    //handel book name input
    const handelChange = (e) => {
        if (e.target.name === "bookTXT") {
            setbookName(e.target.value);
        }
    }
    const [myBList, setMyBList] = useState([]);
    const path = "https://www.googleapis.com/books/v1/volumes?q=" + bookName;

    const submit = () => {
        axios.get(path
        ).then((response) => { setMyBList(response.data.items) }
        ).catch((err) => { console.log(err) });
        setonFirstClck(true);
    }

    return (<div>
        <div className="row searchStyl">
            <input onChange={handelChange} name="bookTXT" type="text" className=" form-control inputStylr"
                id="exampleInputEmail1" placeholder="Enter book name" />
            <button type="button" className="col-1 btn btn-outline-dark"
                onClick={submit} >search</button>
        </div>
        {onFirstClck ?
            <div className="row"  >
                {myBList.map((el, index) =>
                    <div className="col-xl-4 col-lg-6 md-col-6 col-12" key={index}>
                        <BookCard el={el} ind={myBList.length} />
                    </div>
                )}
            </div>
            : ""}
    </div>
    )
}