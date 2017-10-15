import React from 'react';

const LeagueInfo = (props) => {
    return (
        <div>
            <h1 className="title">{props.leagueCaption}</h1>
            <span>Matchday {props.matchday} <br /></span>
            <span className="subtitle">Standings</span>
        </div>
    );
};

export default LeagueInfo;