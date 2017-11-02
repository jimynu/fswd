import React, { Component } from 'react';
import './index.css';

class Filter extends Component {

  handleFilterChange = (event) => {
    const newFilter = event.currentTarget.id;
    this.props.changeFilter(newFilter);
  }

  render() {
    return(
      <div className="filters">
        <input type="radio" name="filter" id="all" onChange={ this.handleFilterChange } checked={ this.props.activeFilter === 'all' ? true : false } /><label htmlFor="all">All</label>
        <input type="radio" name="filter" id="pending" onChange={ this.handleFilterChange } checked={ this.props.activeFilter === 'pending' ? true : false } /><label htmlFor="pending">Pending</label>
        <input type="radio" name="filter" id="completed" onChange={ this.handleFilterChange } checked={ this.props.activeFilter === 'completed' ? true : false } /><label htmlFor="completed">Completed</label>
      </div>
    )
  }
}

export default Filter
