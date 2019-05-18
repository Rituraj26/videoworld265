import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

	state = {term: ''};

	onSearchSubmit = event => {
		event.preventDefault();
		this.props.onFormSubmit(this.state.term);
	}

	render() {
		return (
			<div className="search-container">
				<form className="search-form" onSubmit={this.onSearchSubmit}>
					<label htmlFor="search-label">Search</label>
					<input 
						type="text" 
						id="search-label" 
						value={this.state.term} 
						onChange={e => this.setState({term: e.target.value})} 
					/>
				</form>
			</div>
		);
	}

}

export default SearchBar;