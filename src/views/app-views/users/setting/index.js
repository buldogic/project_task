import React from 'react'
import {  Redirect, Route, Switch } from 'react-router-dom';
import EditProfile from './EditProfile';

const SettingContent = ({ match }) => {
	return (
		<Switch>
			<Redirect exact from={`${match.url}`} to={`${match.url}/edit-profile`} />
			<Route path={`${match.url}/edit-profile`} component= { (...args) => < EditProfile {...args} userId={match.params.userId} />} />
		</Switch>
	)
}

export default SettingContent
