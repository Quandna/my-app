import React,{ useEffect,useState} from 'react';
import {useParams} from "react-router-dom";

function Book(props) {
    const params = useParams();
    const [book, setBook] = useState({});
    const bookcode = params.bookcode;
    const onSaveClick = () => {
        console.log(book);
        //send data to the backend via post
        fetch(`http://localhost:8080/book/save/${bookcode}`)
    }
}