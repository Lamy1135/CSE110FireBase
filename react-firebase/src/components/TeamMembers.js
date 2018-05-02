import React, {Component} from 'react';

class TeamMembers extends Component {
    constructor(props) {
        super(props);
        this.firebaseRef = this.props.db.database().ref("teamMates");
        this.state = {
            name: '',
            age: ''
        };
    }

    componentWillUnmount() {
        this.firebaseRef.off();
    }

    pushToFirebase(event) {
        const {name, age} = this.state;
        event.preventDefault();
        this.firebaseRef.child(name).set({name, age});
        this.setState({name: '', age: ''});
    }

    render(){
        return(
            <div>
                <label>Friend's Name</label>
                <input value={this.state.name} onChange={e => this.setState({name: e.target.value})} />
                <br />
                <label>Friend's Age</label>
                <input value={this.state.age} onChange={e => this.setState({age: e.target.value})} />
                <br />
                <button onClick={this.pushToFirebase.bind(this)}>Submit</button>
            </div>
        );
    }
}

export default TeamMembers;