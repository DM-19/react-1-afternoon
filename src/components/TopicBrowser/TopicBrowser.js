import React, { Component } from 'react';
import EvanAndOdd from '../Topics/EvenAndOdd';
import FilterObject from '../Topics/FilterObject';
import FilterString from '../Topics/FilterString';
import Palindrome from '../Topics/Palindrome';
import Sum from '../Topics/Sum';


class TopicBrowser extends Component {
    render() {
        return (
            <div>

                {/* <p> Hola Mundo </p> */}
                <EvanAndOdd />
                <FilterObject />
                <FilterString />
                <Palindrome />
                <Sum />

            </div>
        );
    }
}

export default TopicBrowser;