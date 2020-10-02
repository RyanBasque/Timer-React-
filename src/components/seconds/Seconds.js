import React from 'react';

import './Seconds.css';

const Seconds = (props) => {
    let newValor = 0;
    let propsValue = props.second;
    let boolean = false;

    if (isNaN(props.second)) {
        boolean = !boolean
    };

    if (propsValue > 60) {
        propsValue = 60;
    };
    return (
        <div>
            <input
                type="text"
                maxLength="2"
                value={!boolean ? propsValue : newValor}
                onChange={props.changeSecond} />
        </div>
    )
};

export default Seconds;