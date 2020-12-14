import React from 'react';
import Blog from './blogs/Blog';

class Main extends React.Component{
    render(){
        return(
            <>
            <div className="row" style={{margin: "3% 10%"}}>
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />
            </div>
            <div className="center-align">
                <div style={{marginLeft:"40%",marginRight:"40%",border:"3px solid",borderRadius: "20%",borderImageSource: "linear-gradient(45deg, rgb(129,52,175), rgb(221,42,123)",borderImageSlice:1}}>
                    More Articles
                </div>
            </div>
            </>
        );
    }
};

export default Main;