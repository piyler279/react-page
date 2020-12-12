import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <div>
                <div>Blog</div>
                <div className="row">
                    <div className="col s12 m6 l6">Read all articles</div>
                    <div className="col s12 m6 l6">About all articles</div>
                </div>
            </div>
        );
    }
};

export default Header;