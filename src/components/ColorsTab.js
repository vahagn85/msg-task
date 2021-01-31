import React, {useEffect} from 'react';
import { Form } from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getColors} from '../actions/color'
import {changeMsgColor} from '../actions/message'
const ColorsTab = () => {
    const colors = useSelector(state=>state.color);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getColors())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    const onChangeColor=(event)=> {
        dispatch(changeMsgColor(event.target.value))
    };

    return (
        <div>
            <Form.Control
                as="select"
                custom
                onChange={onChangeColor}
            >
                {colors.loading?<option value="">Loading...</option>:(
                    <React.Fragment>
                        <option value="">Select color</option>
                        {colors.colors.map(item=>(
                                <option key={item.hex} value={item.rgb}>{item.name}</option>
                            )
                        )}
                    </React.Fragment>
                )}
            </Form.Control>
        </div>
    );
};

export default ColorsTab;