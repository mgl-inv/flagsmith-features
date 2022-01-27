import React, { Component } from 'react'
import flagsmith from 'flagsmith'
const environmentID = 'WMNrzXLFoWrDZmnrd5gKxY'

function flagsmithHOC(WrappedComponent, featureName) {
	return class extends Component {
		constructor(props) {
			super(props)
			this.state = {}
		}

		componentWillMount() {
			const { handleFlags, handleFlagsError } = this
			flagsmith.init({
				environmentID,
				onChange: handleFlags,
				onError: handleFlagsError,
				cacheFlags: true,
				enableLogs: true,
				defaultFlags: {
					some_button: true,
					font_size: 12
				}
			})
		}

		render() {
			const someFeature = flagsmith.hasFeature(featureName)

			return (
				someFeature && (
					<WrappedComponent data={this.state.data} {...this.props} />
				)
			)
		}

		handleFlags = (oldFlags, params) => {
			this.setState({
				...params
			})
		}

		handleFlagsError = (data) => {}
	}
}

export default flagsmithHOC
