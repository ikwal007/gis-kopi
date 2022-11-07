import { Link } from "@inertiajs/inertia-react";
import React from "react";
// icon
import { AiFillEdit, AiFillMinusCircle } from "react-icons/ai";

const Table = ({ allMarker }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full table-auto">
                <thead>
                    <tr>
                        <th className="w-10"></th>
                        <th className="w-56">nama</th>
                        <th className="w-56">alamat</th>
                        <th className="w-56">latitude</th>
                        <th className="w-56">langitude</th>
                        <th>Action</th>
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
                                    <td className="space-x-3">
                                        <Link href={`dashboard/${data.id}/edit`} className="btn btn-outline btn-primary">
                                            <AiFillEdit />
                                        </Link>
                                        <Link as="button" type="submit" href={`/dashboard/${data.id}`} method="delete" className="btn btn-outline btn-primary">
                                            <AiFillMinusCircle />
                                        </Link>
                                    </td>
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
                            <th>no data</th>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
