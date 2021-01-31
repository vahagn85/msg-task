import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMessages,filterMsg} from '../actions/message'
import {Toast} from 'react-bootstrap'
import { Form } from "react-bootstrap";
const MessagesTab = () => {
    const messages = useSelector(state=>state.message);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getMessages())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    if(messages.loading){
        return (<div>Loading...</div>)
    }
    const onChangeSearch=(event)=> {
        dispatch(filterMsg(event.target.value))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    };

    return (
        <React.Fragment>
            <Form.Group>
                <Form.Control type="text" placeholder="search" onChange={onChangeSearch}/>
            </Form.Group>
            {messages.msg.map(item=>(
                <Toast key={item.id} style={{
                    backgroundColor:`rgb(${messages.color[0]},${messages.color[1]},${messages.color[2]})`,
                    maxWidth:'100%'
                }}>
                    <Toast.Header closeButton={false} >
                        <strong className="mr-auto" >{item.sender}</strong>
                        <small>{item.date}</small>
                    </Toast.Header>
                    <Toast.Body style={{color:messages.txtColor}}>{item.body}</Toast.Body>
                </Toast>
            ))}
        </React.Fragment>
    );
};

export default MessagesTab;