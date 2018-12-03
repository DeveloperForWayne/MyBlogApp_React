import React, { Component } from 'react';

class blogContents extends Component {
 
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="row">
                <div className="col col-xs-12">
                    {this.props.blogData.map(blog=>
                    <div className="blog-grids">
                        <div className="grid">
                            <div className="entry-body">
                                <h3>{blog.title}</h3>
                                <p>{blog.content}</p>
                                <div className="read-more-date">
                                    <a href={blog.url}>Read More..</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        );
    };
};

export default blogContents;