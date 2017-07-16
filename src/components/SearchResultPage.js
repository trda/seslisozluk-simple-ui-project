import React from "react";
import {Link} from "react-router";

import postmanHelper from "../helpers/postman-helper";
import parserHelper from "../helpers/parser-helper";
import SearchPage from "./SearchPage";

export default class SearchResultPage extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            postContent: null
        };
    }

    componentDidMount() {

        postmanHelper.requestPost(this.props.params.word).then(data => {
            data = parserHelper.parser(data, "panel-body sozluk","padding-bot-15",13,13);
            this.setState({postContent: data});
        });
    }

    componentWillReceiveProps(nextProps) {

        postmanHelper.requestPost(nextProps.params.word).then(data => {
            data = parserHelper.parser(data, "panel-body sozluk","padding-bot-15",13,13);
            this.setState({postContent: data});
        });
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