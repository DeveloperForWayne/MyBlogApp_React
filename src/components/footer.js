import React, { Component } from 'react';


class footer extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <p>© All Rights Reserved. {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        );
    };
};

export default footer;