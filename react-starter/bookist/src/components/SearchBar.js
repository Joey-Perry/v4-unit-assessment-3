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

    handleChange(e){
        this.setState({ userInput: e.target.value })
    }
    handleClick(){
        this.props.handleSearch(this.state.userInput);
    }
    handleClear(){
        this.props.handleClear();
        this.setState({ userInput: ''})
    }

    render(){
        return (
            <div className='search-bar'>
                <input className='search search-input' onChange={this.handleChange} value={this.state.userInput}/>
                <button className='search search-btn' onClick={this.handleClick}> search </button>
                {this.state.userInput && <button className='search clear-search-btn' onClick={this.handleClear}> clear search </button>}
                
            </div>
        )
    }
}

export default SearchBar