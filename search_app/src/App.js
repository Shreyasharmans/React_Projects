import React, {Component} from 'react';
import './App.css';
import Searchbox from './components/searchbox/Searchbox';
import CardList from './components/cardlist/CardList';

// constructor -- render -- componentDidMount (state change - queue render function) -- render

// class components
class App extends Component {
  constructor() {
    super();
    this.state = {
      usersData: [],
      searchText: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({usersData: users}))
  }

  handleChange = (e) => {
    this.setState({searchText: e.target.value}, () => {
        console.log(this.state.searchText);
    })
  }

  render() {

    const {usersData, searchText} = this.state;

    // const usersData = this.state.usersData;
    // const searchText = this.state.searchText;

    const filterUser = usersData.filter((user) => user.name.toLowerCase().includes(searchText.toLowerCase()))

    // usersData: [list of 10 users],
    // searchText: 'g'
    // filterUser: [list of filtered users having name that contains 'g']
    // ['Jack', 'John', 'George', 'Thomas']
    // 'o' -- ['John', 'George', 'Thomas']
    // Every string contains empty string.

    return (
      <div className='app'>

        <Searchbox placeholder={'Name'} handleChange={this.handleChange} />

        <CardList usersData={filterUser} />
        
      </div>
    );
  }
}


export default App;


























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
