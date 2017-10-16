import React from 'react'

const TableBody = (props) => {
    return (
        <table className="table table-responsive table-hover text-secondary">
            <thead className="thead-default">
                <tr>
                    <th className="text-center">
                        #
                    </th>
                    <th className="text-left">
                        Team
                    </th>
                    <th className="text-center" title="Matches played" data-toggle="tooltip">
                        MP
                    </th>
                    <th className="text-center" title="Wins">
                        W
                    </th>
                    <th className="text-center" title="Draws">
                        D
                    </th>
                    <th className="text-center" title="Losses">
                        L
                    </th>
                    <th className="text-center" title="Goals for">
                        GF
                    </th>
                    <th className="text-center" title="Goals against">
                        GA
                    </th>
                    <th className="text-center" title="Goals difference">
                        GD
                    </th>
                    <th className="text-center" title="Team points">
                        Pts
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}

export default TableBody