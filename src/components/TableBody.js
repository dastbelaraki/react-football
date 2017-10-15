import React from 'react'

const TableBody = (props) => {
    return (
        <table className="standings">
            <tbody>
                <tr className="table-head">
                    <td className="team-position">
                        #
                    </td>
                    <td className="team-name">
                        Team
                    </td>
                    <td title="Matches played">
                        MP
                    </td>
                    <td title="Wins">
                        W
                    </td>
                    <td title="Draws">
                        D
                    </td>
                    <td title="Losses">
                        L
                    </td>
                    <td title="Goals for">
                        GF
                    </td>
                    <td title="Goals against">
                        GA
                    </td>
                    <td title="Goals difference">
                        GD
                    </td>
                    <td title="Team points">
                        Pts
                    </td>
                </tr>
                {props.children}
            </tbody>
        </table>
    )
}

export default TableBody