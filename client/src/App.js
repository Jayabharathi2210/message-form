import React, { useState } from 'react';
import Form from './Form';
import DataTable from './DataTable';
import './App.css';

const App = () => {
    const [showTable, setShowTable] = useState(false);

    const handleToggleTable = () => {
        setShowTable(!showTable);
    };

    return (
        <div>
            <h1>Message Form</h1>
            <p>Hello, Fill the input fields to send us a message</p>
            <Form />
            <button id = 'ssd' onClick={handleToggleTable}>
                {showTable ? 'Hide Submitted Data' : 'Show Submitted Data'}
            </button>
            {showTable && (
                <div>
                    <h2>Submitted Data</h2>
                    <DataTable />
                </div>
            )}
        </div>
    );
};

export default App;
