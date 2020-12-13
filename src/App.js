import React, {Component} from 'react';
import {jsonTypeicodeUri} from './components/api';
import Jumbotron from './components/Jumbotron';
import Form from './components/form/Form';
import Users from './components/users/Users';
import axios from 'axios';

class App extends Component {

  state = {
    title: 'Hello Webpack!',
    desc: "I'm very happy that my webpack config works. It feels absolutely amazing.",
    inputValue: null,
    showDesc: true,
    users: []
  }

  async componentDidMount() {
    const newUsers = await axios.get(`${jsonTypeicodeUri}/users`);

    this.setState({
      users: newUsers.data
    });
  }
  
  handleClick = (e) => {
    e.preventDefault();

    this.setState({
      title: 'Hello onClick!',
      desc: "I'm very happy that my webpack config works. I got clicked ✔.",
      inputValue: ''
    });
  }

  handleChange = (e) => {
    this.setState({
      desc: e.target.value
    });
  }

  handleToggle = (e) => {
    e.preventDefault();

    this.setState({
      showDesc: !this.state.showDesc
    });
  }

  findUser = (id) => {
    const users = [...this.state.users];
    const userIndex = users.findIndex(user => user.id === id);
    const user = users[userIndex];

    console.log(user.name);
  }

  updateUser = (e, id) => {
    const users = [...this.state.users];
    const userIndex = users.findIndex(user => user.id === id);
    const user = users[userIndex];

    user.name = e.target.value;
    this.setState({ users });
  }

  deleteUser = (index) => {
    const users = [...this.state.users];
    users.splice(index, 1);

    this.setState({ users });
  }

  

  render() {
    let jumboBox = null;

    if(this.state.showDesc) {
      jumboBox = (
        <Jumbotron title={this.state.title} desc={this.state.desc} handleClick={this.handleClick} />
      );
    }

    return (
      <div className="container my-5">
        {jumboBox}
        <Users 
          value={this.state.inputValue} 
          findUser={this.findUser} 
          deleteUser={this.deleteUser}
          updateUser={this.updateUser} 
          allUsers={this.state.users} 
        />
        <Form change={this.handleChange} inputValue={this.state.inputValue} toggle={this.handleToggle} />
      </div>
    );
  }

}

export default App;