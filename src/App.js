import React from 'react';
import axios from 'axios';

class App extends React.Component {

    state={
        advice:''
    }

    componentDidMount(){
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then(response => this.setState({ advice: response.data.slip.advice }))
        .catch(error => console.log(error));
    }
    render(){
        return (
            <div className="wrapper">
                <div className="level ">
                    <div className="level-item is-centered">
                        <div className="box extra">
                            <div className="content"></div>
                            <h1 className="title" >{this.state.advice}</h1>
                            <div className="buttons is-centered">
                                <button onClick={this.fetchAdvice} className="button is-primary mt-5 is-medium">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;

