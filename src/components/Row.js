import React from 'react';

const Row = (props) => {
    return (
        <tr>
            <td className="text-center">
                {props.position}
            </td>
            <td className="text-left">
                <img className="rounded mr-3" src={props.crestURI} alt="team-logo" width="30" height="30" />
                <span>{props.teamName}</span>
            </td>
            <td className="text-center">
                {props.playedGames}
            </td>
            <td className="text-center">
                {props.wins}
            </td>
            <td className="text-center">
                {props.draws}
            </td>
            <td className="text-center">
                {props.losses}
            </td>
            <td className="text-center">
                {props.goalsFor}
            </td>
            <td className="text-center">
                {props.goalsAgainst}
            </td>
            <td className="text-center">
                {props.goalDifference}
            </td>
            <td className="text-center">
                {props.points}
            </td>
        </tr>
    );
};

export default Row;