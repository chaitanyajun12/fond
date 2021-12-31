import React from 'react';
import ReactDOM from 'react-dom';

class MainComponent extends React.Component {
    render() {
        return "fond is ready!";
    }
}

ReactDOM.render(<MainComponent />, document.getElementById('root'));