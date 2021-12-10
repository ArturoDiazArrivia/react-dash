import React from "react";
import styles from './styles/main.scss';
import Hero from './components/hero/hero.js';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Hero label="This is a Hero"/>
      </Fragment>
    );
  }
}

export default App;
