import React, { Component } from 'react';
import HeaderUerManager from './HeaderUerManager';

class UserManager extends Component {
    render() {
        return (
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
        );
    }
}

export default UserManager;