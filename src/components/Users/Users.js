import React, { Component } from "react";
import UsersSingle from "./UsersSingle";
import axios from "axios";

class Users extends Component {
  // state
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  // state = {
  //   users: []
  // };

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    //   FETCH METHOD
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          users: data
        });
      })
      .catch(err => console.log(err));

    //   AXIOS Method
    // axios
    //   .get(url)
    //   .then(response => {
    //     this.setState({
    //       users: response.data
    //     });
    //   })
    //   .catch(err => console.log(err));
  }

  renderItems() {
    return this.state.users.map(item => (
      <UsersSingle key={item.id} item={item} />
    ));
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <ul className="list-group">{this.renderItems()}</ul>
        </div>
      </div>
    );
  }
}

export default Users;
