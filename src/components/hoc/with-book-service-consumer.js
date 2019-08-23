import React, {Component} from 'react';
import {BookServiceConsumer} from "../bookstore-service-context";

const withBookServiceConsumer = (Component) => {
    return (props) => {
        return (
            <BookServiceConsumer>
                {(service) => {
                    return <Component {...props} service={service}/>
                }}
            </BookServiceConsumer>
        )
    }
};

export default withBookServiceConsumer;
