import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <div style={{margin: "5% 16.7% 3%"}}>
                <h5>Blog</h5>
                <div className="row">
                    <h2 className="col s12 m6 l6 ">Read all articles </h2>
                    <h2 className="col s12 m6 l6 ">about all topics</h2>
                </div>
            </div>
        );
    }
};

export default Header;