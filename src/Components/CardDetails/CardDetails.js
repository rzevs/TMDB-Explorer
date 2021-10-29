import React from 'react';

const CardDetails = ({overview, release_date}) => {
    return (
        <>
            <p>{overview}</p>
            <p>Released on {release_date}</p>
        </>
    );
};

export default CardDetails;