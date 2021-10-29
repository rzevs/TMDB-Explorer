import React from 'react';

const CardDetails = ({plot, rating, runtime, genre}) => {
    return (
        <>
            <dl>
                <dt>Plot Summary</dt>
                <dd>{plot}</dd>
                <dt>Rating</dt>
                <dd>{rating}</dd>
                <dt>Runtime</dt>
                <dd>{runtime}</dd>
                <dt>Genre</dt>
                <dd>{genre}</dd>
            </dl>
        </>
    );
};

export default CardDetails;