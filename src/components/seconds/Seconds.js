import React from 'react';

import './Seconds.css';

const Seconds = (props) => {
    let newValor = 0;
    let boolean = false;

    if (isNaN(props.second)) {
        boolean = !boolean
    }
    return (
        <div>
            <input
                type="text"
                maxLength="2"
                value={!boolean ? props.second : newValor}
                onChange={props.changeSecond} />
        </div>
    )
};

export default Seconds;