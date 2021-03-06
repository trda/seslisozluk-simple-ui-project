import React from "react";
import {Link} from "react-router";
import { browserHistory } from 'react-router';

export default class SearchPage extends React.Component{

    constructor(props){
        super(props);
        this.sendValue = this.sendValue.bind(this);  
        this.openOnVerb123 = this.openOnVerb123.bind(this);
        this.openSesliSozluk = this.openSesliSozluk.bind(this);
        this.setValue = this.setValue.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        
        this.state = {
            word: ""
        };
    }
    setValue(e){
        this.setState({
            word: e.target.value
        });
    }

    sendValue(){
        browserHistory.push('/searchresult/' + this.state.word);
        this.setState({
            word: ''
        });
    }

    openOnVerb123(){
        window.location.assign("https://verb123.herokuapp.com/verb/" + this.state.word);
    }

    openSesliSozluk(){
        window.location.assign("https://www.seslisozluk.net/" + this.state.word + "-nedir-ne-demek/");
    }

    handleKeyPress(target) {
        if(target.charCode == 13){ 
            this.sendValue();
        }
    }

    render(){
        return(
            <div>
                <label className="search-box-label">Lütfen aramak istediğiniz kelimeyi yazınız:</label>
                <input type='text' value={this.state.word} onChange={this.setValue}  onKeyPress={this.handleKeyPress}  />
                <br />
                <button onClick={() => {this.sendValue()}}>Ara</button>
                <button onClick={() => {this.openOnVerb123()}}>Halleri</button>
                <button onClick={() => {this.openSesliSozluk()}}>Orjinal</button>
            </div>
        );
    }
}