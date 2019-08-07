import React, {Component} from 'react';
import {Table, Button} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Token</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>S10e</td>
              <td>1234567890asdfg</td>
              <td>
                <Button color="danger" size="sm">Delete</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
