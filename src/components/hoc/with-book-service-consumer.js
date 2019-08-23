import React, {Component} from 'react';
import {BookServiceConsumer} from "../bookstore-service-context";

const withBookServiceConsumer = (mapMethodsToProps) => (Component) => {
    return (props) => {
        return (
            <BookServiceConsumer>
                {(bookService) => {
                    const services = mapMethodsToProps(bookService);
                    return <Component {...props} {...services} />;
                }}
            </BookServiceConsumer>
        )
    }
};

export default withBookServiceConsumer;
