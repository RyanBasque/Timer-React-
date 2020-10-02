import React from 'react';

import './Minutes.css';

const Minutes = (props) => {
    let newValor = 0;
    let propsValue = props.minute;
    let boolean = false;

    if (isNaN(props.minute)) {
        boolean = !boolean
    }
    if (propsValue > 60) {
        propsValue = 60;
    }
    return (
        <div>
            <input
                type="text"
                maxLength="2"
                value={!boolean ? propsValue : newValor}
                onChange={props.changeMinute}
            />
        </div>
    )
};

export default Minutes;