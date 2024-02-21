import React from 'react';

const HelloTodd: React.FC = () => {
    const handleClick = () => {
        let a = 5;
        debugger;
        console.log('Hello');
    };

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
};

export default HelloTodd;