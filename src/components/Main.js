import React from 'react';
import Blog from './blogs/Blog';

class Main extends React.Component{
    render(){
        return(
            <div class="row">
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />
            </div>
        );
    }
};

export default Main;