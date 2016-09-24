var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoSearch = React.createClass({
	render: function() {
		var {dispatch, showCompleted, searchText} = this.props;

		var updateSearchText = () => {
			var searchText = this.refs.searchText.value;
			dispatch(actions.setSearchText(searchText));
		};

		var updateShowCompleted = () => {
			dispatch(actions.toggleShowCompleted());
		};

		return (
			<div className="container__header">
				<div>
					<input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={updateSearchText}/>
				</div>
				<div>
					<label>
						<input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={updateShowCompleted}/>
						Show completed todos
					</label>
				</div>
			</div>
		);
	}
});

export default connect(
	(state) => {
		return {
			showCompleted: state.showCompleted,
			searchText: state.searchText
		};
	}
)(TodoSearch);