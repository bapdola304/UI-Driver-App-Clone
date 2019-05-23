import React, { Component } from 'react';
import HeaderUerManager from './HeaderUerManager';
import { Spin } from 'antd';
class UserManager extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading : true
    }
  }
    componentDidMount(){
      setTimeout(() => {
        this.setState({
          loading : false
        });
      }, 1000);
  }
  
  render() {
    return (
      <Spin size="large" spinning={this.state.loading} >
      <div className="container-fluid">
        <HeaderUerManager />
        <table class="table table-bordered">
          <thead class="thead-dark">
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr>
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@example.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Spin >
  );
  }
}

export default UserManager;