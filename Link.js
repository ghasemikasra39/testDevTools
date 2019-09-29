import React, {Component} from 'react';
import {Text, Button} from 'react-native';

export default class Link extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Button
                title={this.props.title}
                onPress={this.props.fn}
            />
        );
    }
}
