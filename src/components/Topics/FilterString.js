import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            names: ["Kanye", "Yeezy", "Bill", "Sharon", "Alina", "Melissa", "Marissa", "Eric"],
            name: [],
            userInput: ""
        }
    }

    handleChange(value) {
        this.setState({ userInput: value })
    }

    filterNames(userInput) {
        var filteredNames = [];
        for (var i = 0; i < this.state.names.length; i++) {
            if (this.state.names[i].includes(userInput)) {
                filteredNames.push(this.state.names[i])
            }
        }
        this.setState({ name: filteredNames })
    }


    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Original Array: {JSON.stringify(this.state.names, null, 10)}</span>

                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>

                <button className="confirmationButton" onClick={() => this.filterNames(this.state.userInput)}>Filter</button>

                <span className="resultsBox filterStringRB">Filtered Array: {JSON.stringify(this.state.name, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString;