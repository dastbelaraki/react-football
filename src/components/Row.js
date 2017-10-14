import React from 'react';

const Row = (props) => {
    return (
        <tr>
            <td>
                {props.position}
            </td>
            <td className="team-name">
                <table>
                    <tbody>
                        <tr>
                            <td className="crest">
                                <img src={props.crestURI} alt={props.teamName} />
                            </td>
                            <td>
                                <div>{props.teamName}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
            <td>
                {props.points}
            </td>
        </tr>
    );
};

export default Row;