import React, {useState} from 'react';

function StateHook() {
    //Simple state Hook
    const [state, setState] = useState(0);

    //interval
    setInterval(() => setState(state + 1), 1000);

    return <div>Updated Every Second {state} ;)</div>
}

export default StateHook;