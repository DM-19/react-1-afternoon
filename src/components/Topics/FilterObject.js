import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            people: [
                {
                    name: "Jim Bob",
                    age: 22,
                    title: "LeetHacker"
                },
                {
                    name: "Talon",
                    age: 2,
                    title: "Falcon"
                },
                {
                    name: "Danny",
                    age: 28,
                    title: "Web Dev in training"
                },
                {
                    name: "Uncle Tom",
                    age: 50,
                    title: "Old Guy"
                }
            ],
            userInput: '',
            filteredPeople: []
        }
    }

    handleChange(value) {
        this.setState({ userInput: value })
    }

    filterPeople(prop) {
        var filteredPeople = []

        for (var i = 0; i < this.state.people.length; i++) {
            if (this.state.people[i].hasOwnProperty(prop)) {
                filteredPeople.push(this.state.people[i])
            }
        }
        this.setState({ filteredPeople: filteredPeople })
    }





    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.people, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="resultsBox filterObjectRB" onClick={() => this.filterPeople(this.state.userInput)}> Filter </button>
                <span className="resultsBox">Filtered: {JSON.stringify(this.state.filteredPeople, null, 10)}</span>

            </div>

        );
    }
}

export default FilterObject;