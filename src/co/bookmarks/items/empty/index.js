import React from 'react'
import { connect } from 'react-redux'
import { refresh } from 'data/actions/bookmarks'
import { makeStatusMain, getSearchEmpty } from 'data/selectors/bookmarks'

import View from './view'

class SpaceEmptyContainer extends React.Component {
	onRefresh = ()=>
		this.props.refresh(this.props.spaceId)

	render() {
		return (
			<View 
				spaceId={this.props.spaceId}
				status={this.props.status}
				searchEmpty={this.props.searchEmpty}
				onRefresh={this.onRefresh}
				navigation={this.props.navigation} />
		)
	}
}

export default connect(
	() => {
		const 
			getStatusMain = makeStatusMain()
			
		const mapStateToProps = (state, {spaceId})=>{
			return {
				status: getStatusMain(state, spaceId),
				searchEmpty: getSearchEmpty(state, spaceId)
			}
		}
	
		return mapStateToProps
	},
	{refresh}
)(SpaceEmptyContainer)