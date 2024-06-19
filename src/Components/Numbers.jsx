import React from "react";


const MyComponent = () => {
    const handleRun = () => {
        console.log("Button clicked")
    }

    return (
        <div className="container">
            <div className="App-header">
                <h1>Generate Prime Numbers</h1>
                <button className="btn-add-more" onClick={handleRun}>Run</button>
            </div>

        </div>
    )

}

export default MyComponent;