import * as PropTypes from 'prop-types'; 
import * as React from 'react';           
import * as request from 'superagent';    
import cfg from '../../../../../conf.json';

class Body extends React.Component {

  render() {
    return (
      <UserBox/>
    );
  }

}

class UserBox extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {userData:[]};
    this.handleAddUser = this.handleAddUser.bind(this);
  }

  getUsers() {
    var url = "http://"+cfg.backend.host+":"+cfg.backend.port+"/get_users";
    request.get(url).query({}).end(
      (err, res) => {
        if (err) {
          alert(res.text);
        }
        var map = JSON.parse(res.text);
        this.setState({userData:map});
     }
   );
  }

  handleAddUser(name, mail) {
    var url = "http://"+cfg.backend.host+":"+cfg.backend.port+"/post_users";
    request.post(url).send({name:name, mail:mail}).end(
      (err, res) => {
        if (err) {
          alert(res.text);
        }
        var map = JSON.parse(res.text);
        this.setState({userData:map});
      }
    );
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return(
      <div style={{width:"300px"}}>
        <UserForm addUser={this.handleAddUser}/>
        <hr/>
        <UserList userData={this.state.userData}/>
      </div>
    );
  }

}

class User extends React.Component {

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.mail}</td>
      </tr>
    );
  }

}

User.propTypes = { 
  name: PropTypes.string.isRequired,
  mail: PropTypes.string
};


class UserList extends React.Component {

  render(){
    var UserNodes = this.props.userData.map(function(user, index){
      return (
        <User name={user.name} mail={user.mail} key={index}/>
      );
    });
    return (
      <table>
        <tbody>
          <tr>
            <th>名前</th>
            <th>メールアドレス</th>
          </tr>
          {UserNodes}
        </tbody>
      </table>
    );
  }
}

UserList.propTypes = { 
  userData:PropTypes.arrayOf(PropTypes.object).isRequired
};


class UserForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.name = React.createRef();
    this.mail = React.createRef();
  }

  handleSubmit(){
    var name = this.name.current.value.trim();
    var mail = this.mail.current.value.trim();
    if (!name){
      return;
    }
    this.props.addUser(name, mail);
    this.name.current.value = "";
    this.mail.current.value = "";
  }
  
  render(){
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <label>名前</label>
              </td>
              <td>
                <input type="text" ref={this.name}/>
              </td>
            </tr>
            <tr>
              <td>
                <label>メールアドレス</label>
              </td>
              <td>
                <input type="text" ref={this.mail}/>
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{textAlign:"right"}}>
          <button onClick={this.handleSubmit}>追加</button>
        </div>
      </div>
    );
  }
}

UserForm.propTypes = {
    addUser:PropTypes.func.isRequired
};

export { Body };
