import { useEffect } from 'react';
import './App.css';

function App() {
    useEffect(() => {
        fetch('/api/contact')
            .then((response) => response.json())
            .then((result) => {
                alert(`Hej ${result.hello}`);
            });
    }, []);

    return <></>;
}

export default App;
