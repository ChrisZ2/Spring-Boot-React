import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component<{}, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            isLoading: false
        }
    }
  public componentDidMount() {
      this.setState({isLoading: true});
  }

  public  render() {
        const isLoading = this.state;
        if (isLoading) {
            return <p>Loading...</p>;
        }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
