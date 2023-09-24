import React, { useState } from 'react';

export default function RouteIDContent() {
    const [routeID, setRouteID] = useState("");
    

    const handleRouteIDChange = (event) => {
        setRouteID(event.target.value);
    };



    const data = [
        { reached: 'Koba circle', upcoming: 'abcd' },
        { reached: 'Koba circle', upcoming: 'abcd' },
        { reached: 'Koba circle', upcoming: 'abcd' },
        { reached: 'Koba circle', upcoming: 'abcd' },
        { reached: 'Koba circle', upcoming: 'abcd' },
    ];



    return (
        <div>
            <div className="container mx-auto p-4">
                <form className="mb-4">
                    <label className="text-black text-2xl font-bold mb-4 pl-2 pt-7 items-baseline block">
                        Route ID:
                    </label>
                    <input
                        type="text"
                        value={routeID}
                        onChange={handleRouteIDChange}
                        className="border border-black border-2 p-2 m-2 rounded w-full"
                    />
                </form>
            </div>
            <div className="relative">
                <div className="w-full overflow-x-auto">
                    <table className="w-full table-fixed">
                        <thead className="text-3xl font-semibold text-center">
                            <tr>
                                <th className="p-3 tracking-wide sm:w-1/2 md:w-1/3 text-black">Reached</th>
                                <th className="p-3 tracking-wide sm:w-1/2 md:w-1/3 text-black">Upcoming</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index} className="text-black text-center">
                                    <td className="px-3 py-2 text-custom-green font-roboto md:text-lg font-medium sm:w-1/2 md:w-1/3 align-middle">
                                        {item.reached}
                                    </td>
                                    <td className="px-3 py-2 text-custom-green font-roboto md:text-lg font-medium sm:w-1/2 md:w-1/3 align-middle">
                                        {item.upcoming}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
