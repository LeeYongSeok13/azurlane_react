import { useState } from 'react';

import axios from 'axios';

const Home = () => {
    const [data, setData] = useState(null);
    const onClick = async () => {
        try {
            const response = await axios.get(
                `https://raw.githubusercontent.com/AzurAPI/azurapi-js-setup/master/ships.json`
            );
            setData(response.data);
        } catch (e) {
            console.log(e);
        }
    };
    return(
        <div>
            <div>
                <button onClick={onClick}>불러오기</button>
            </div>
            {data && <textarea rows={10} value={JSON.stringify(data, null, 2)} />}
        </div>
    )
}

export default Home;