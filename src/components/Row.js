import React from 'react';

const Row = (props) => {
    return (
        <tr>
            <td className="team-position">
                {props.position}
            </td>
            <td className="team-name">
                <div className="crest">
                    <img src={props.crestURI} alt=""/>
                </div>
                <span>{props.teamName}</span>
            </td>
            <td>
                {props.playedGames}
            </td>
            <td>
                {props.wins}
            </td>
            <td>
                {props.draws}
            </td>
            <td>
                {props.losses}
            </td>
            <td>
                {props.goalsFor}
            </td>
            <td>
                {props.goalsAgainst}
            </td>
            <td>
                {props.goalDifference}
            </td>
            <td className="team-points">
                {props.points}
            </td>
        </tr>
    );
};

export default Row;