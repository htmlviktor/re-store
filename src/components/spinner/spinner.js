import React from 'react';
import './spinner.css';
import withBookServiceConsumer from "../hoc/with-book-service-consumer";

const Spinner = ({getBooks}) => {
    return <div className="lds-css ng-scope">
        <div className="lds-rolling">
            <div></div>
        </div>
    </div>
};

const mapMethodsToProps = (service) => ({
    getBooks: service.getBooks
});

export default withBookServiceConsumer(mapMethodsToProps)(Spinner);


