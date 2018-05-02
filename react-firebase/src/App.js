import React, { Component } from 'react';
import TeamMembers from './components/TeamMembers.js';
import DisplayData from './components/DisplayData.js';
import firebase from 'firebase';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        var config = {
            apiKey: "AIzaSyCMhROp0g723PLMLs5VJqmW70UoAh8KysY",
            authDomain: "cse110firebase-9a70c.firebaseapp.com",
            databaseURL: "https://cse110firebase-9a70c.firebaseio.com",
            projectId: "cse110firebase-9a70c",
            storageBucket: "",
            messagingSenderId: "897108192173"
        };
        firebase.initializeApp(config);
    }

  render() {
    return (
        <div>
            <TeamMembers db={firebase}/>
            <DisplayData db={firebase}/>
        </div>
    );
  }
}

export default App;
