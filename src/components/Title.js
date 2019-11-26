import React, { Component } from 'react';

const TITLES = [
    'Mobile development',
    'Web development',
    'Game development'
];

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true };

    render() {

        const {fadeIn, titleIndex } = this.state;

        const title = TITLES[titleIndex];

        return(
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>{title}</p>
        )
    }

    componentDidMount() {
        this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        this.animateTitles()
    }

    componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex, fadeIn: true });
            this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);

        }, 4000);
    }
}

export default Title;