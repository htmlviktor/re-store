import React from 'react';
import './spinner.css';
import withBookServiceConsumer from "../hoc/with-book-service-consumer";

const Spinner = ({service}) => {
    console.log(service.getBooks())
    return <div className="lds-css ng-scope">
        <div className="lds-rolling">
            <div></div>
        </div>
    </div>
};

export default withBookServiceConsumer(Spinner);


