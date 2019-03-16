import React from "react";
import {Link} from "react-router";

import postmanHelper from "../helpers/postman-helper";
import parserHelper from "../helpers/parser-helper";
import SearchPage from "./SearchPage";

export default class SearchResultPage extends React.Component{

    constructor(props) {
        super(props);

        this.askToSeslisozluk = this.askToSeslisozluk.bind(this);

        this.state = {
            postContent: null
        };
    }


    askToSeslisozluk(tempProps){
        postmanHelper.requestPost(tempProps.params.word).then(data => {
            data = parserHelper.parser(data, "panel-body sozluk","padding-bot-15",13,13);

            if(data.length == 0){
                data = "<h3>Kelime Bulunamadı!</h3>";
            }

            this.setState({postContent: data});
        });
    }

    componentDidMount() {

        this.askToSeslisozluk(this.props);

    }

    componentWillReceiveProps(nextProps) {

        this.askToSeslisozluk(nextProps);

    }

    render(){
        return(
            <div>
                <SearchPage />
                <div className="result-panel" dangerouslySetInnerHTML={{__html: this.state.postContent}}></div>
            </div>
        );
    }
}