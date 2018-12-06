import React, { Component } from 'react';

class blogContents extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            blogData: [],
        };
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/everything?q=bitcoin&from=2018-11-13&sortBy=publishedAt&apiKey=3943181eb2954a0bb8d20dc7f808032b`
        fetch(url)
          .then(response => response.json())
          .then(data => data["articles"].map((article) => {
            return {
              title: article['title'],
              content: article['content'],
              author: article['author'],
              url: article['url'],
              urlToImage: article['urlToImage']
            }
          }))
          .then((data) => {
            this.setState({ blogData: data });
          })
    }

    handleClick() {
        this.setState(state => ({
         
        }));
    }

    render() {
        return (
            <div className="row">
                <div className="col col-xs-12">
                    {this.state.blogData.map(blog=>
                    <div className="blog-grids">
                        <div className="grid">
                            <div className="entry-body">
                                <h3>{blog.title.slice(0, 30)  + "..."}</h3>
                                <p>{blog.content.slice(0, 100)  + "..."}</p>
                                <div className="read-more-date">
                                    <a onClick={this.handleClick.bind(this)} href={blog.url}>Read More..</a>
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