import React from 'react';

export default function BackDrop(props) {
    return (
        <div className={`backdrop ${props.customClass}`} onClick={props.closeDrawer}>
            
        </div>
    );
}
