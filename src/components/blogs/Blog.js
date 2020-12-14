import React, { Component } from 'react';

class Blog extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="col s12 m4 l4">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    <span className="card-title">Card Title</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default Blog;