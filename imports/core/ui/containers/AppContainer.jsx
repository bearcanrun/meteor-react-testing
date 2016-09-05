import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import App from '../layouts/App.jsx';

export default createContainer(() => {
  return {
    welcome: 'Building an App with React using BDD/TDD'
  };
}, App);
