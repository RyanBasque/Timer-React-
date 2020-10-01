import React from 'react';

import './Minutes.css';

const Minutes = (props) => {
    let newValor = 0;
    let boolean = false;

    if (isNaN(props.minute)) {
        boolean = !boolean
    }
    return (
        <div>
            <input
                type="text"
                maxLength="2"
                value={!boolean ? props.minute : newValor}
                onChange={props.changeMinute}
            />
        </div>
    )
};

export default Minutes;