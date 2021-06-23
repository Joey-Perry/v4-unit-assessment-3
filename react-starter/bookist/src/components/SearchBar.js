import React, { Component } from 'react';
import './searchBar.css'

class SearchBar extends Component{
    constructor(props){
        super(props)

        this.state = {
            userInput: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleChange(){

    }
    handleClick(){

    }
    handleClear(){

    }

    render(){
        return (
            <div className='search-bar'>
                <input className='search search-input' />
                <button className='search search-btn'> search </button>
                <button className='search clear-search-btn'> clear search </button>
            </div>
        )
    }
}

export default SearchBar