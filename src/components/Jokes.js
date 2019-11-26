import React, { Component } from 'react';
import Header from './Header';

const Joke = ({ joke: { setup, punchline } }) => 
    <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>;


class Jokes extends Component {
    state = { joke: {}, jokes: [] };

    componentDidMount() {
        //best practice to put async code in component did mount

        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(json => this.setState( { joke: json } ))
            .catch(error => console.log("ERROR: " + error.message));
    }

    render() {
        return (
            <div>
                <h2>Highlighted Joke</h2>
                <Joke joke={this.state.joke} />
                <hr />
                <h3>Want some more jokes?</h3>
                <button onClick={this.fetchJokes}>Oh yes</button>
                {
                    this.state.jokes.map(joke => <Joke key={joke.id} joke={joke} />)
                }
            </div>
        )
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then(response => response.json())
            .then(json => this.setState( { jokes: json } ))
            .catch(error => console.log("ERROR: " + error.message));
    }
}

export default Jokes