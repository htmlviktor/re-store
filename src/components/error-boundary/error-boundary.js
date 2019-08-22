import React, {Component} from 'react';
import ErrorIndicator from "../error-indicator/error-indicator";

export default class ErrorBoundary extends Component {

    state = {
        error: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({error: true});
        console.log(errorInfo);
    }

    render() {
        if (this.state.error) {
            return <ErrorIndicator />;
        }
        return this.props.children;
    }
}
