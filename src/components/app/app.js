import React, {Component} from 'react';
import {BookServiceProvider} from "../bookstore-service-context";

import ErrorBoundary from "../error-boundary/error-boundary";
import Spinner from "../spinner/spinner";
import BookstoreService from "../../services/bookstore-service";

class App extends Component {

    service = new BookstoreService();

    render() {
        return (
            <ErrorBoundary>
                <BookServiceProvider value={this.service}>
                    <Spinner />
                </BookServiceProvider>
            </ErrorBoundary>
        )
    }
}



export default App;
