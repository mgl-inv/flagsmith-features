import React, { useEffect, useState } from 'react'
import flagsmith from 'flagsmith'
const environmentID = 'WMNrzXLFoWrDZmnrd5gKxY'

function WithFlagsmith(WrappedComponent, featureName) {
	const WithFlagsmithComponent = (props) => {
		const [state, setState] = useState({})

		const handleFlags = (oldFlags, params) => {
			setState({
				...params
			})
		}

		const handleFlagsError = (data) => {}

		useEffect(() => {
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
		}, [])

		const someFeature = flagsmith.hasFeature(featureName)

		return someFeature && <WrappedComponent props={{...props}}/>
	}
	return WithFlagsmithComponent
}

export default WithFlagsmith
