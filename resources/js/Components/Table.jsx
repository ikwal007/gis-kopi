import React from "react";

const Table = ({ allMarker }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>nama</th>
                        <th>alamat</th>
                        <th>latitude</th>
                        <th>langitude</th>
                    </tr>
                </thead>
                <tbody>
                    {allMarker.length > 0 ? (
                        allMarker.map((data, i) => {
                            return (
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{data.name}</td>
                                    <td>{data.alamat}</td>
                                    <td>{data.lat}</td>
                                    <td>{data.lng}</td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <th></th>
                            <th>no data</th>
                            <th>no data</th>
                            <th>no data</th>
                            <th>no data</th>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
