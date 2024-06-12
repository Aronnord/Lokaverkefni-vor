import React, { useEffect, useState } from 'react';
import { fetchData } from './gateway';

const MyComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchDataFromServer = async () => {
            const result = await fetchData('data');
            setData(result);
        };

        fetchDataFromServer();
    }, []);

    return (
        <div>
            {data ? (
                <div>Data from server: {JSON.stringify(data)}</div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default MyComponent;