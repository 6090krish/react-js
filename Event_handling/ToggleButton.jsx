import React, { useState } from 'react';

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

     const styles = {
        backgroundColor: isOn ? 'green' : 'red',
        color: 'white',
        padding: '10px',
        borderRadius: '5px'
    }

    return (
        <>
        <h2>Toggle Button</h2>
        <button onClick={handleToggle} style={styles}>
            {isOn ? 'ON' : 'OFF'}
        </button>
        </>
    );
};

export default ToggleButton;