import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import App from '../layouts/App.jsx';
import MainPage from '../components/MainPage.jsx';

const welcome = 'This is a Meteor boilerplate for learning BDD/TDD';

export default createContainer(() => (<MainPage welcome={welcome} />), App);
