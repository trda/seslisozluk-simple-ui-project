import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <b>Sesli Sözlük Arama</b>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            <br />
            <a href="https://github.com/trda/seslisozluk-simple-ui-project" target="_blank">GitHub Page</a> -
            <a href="http://www.verb123.com" target="_blank"> verb123.com</a> - 
            <a href="https://vocabularyreminder.herokuapp.com/voclist" target="_blank"> Vocabulary List</a>
            <br /> <br />      
            <a href="https://www.linkedin.com/in/doganaydin/" target="_blank">Doğan Aydın</a>  
            - 2017
          </p>
        </footer>
      </div>
    );
  }
}