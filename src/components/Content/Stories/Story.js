import React from 'react';

function Story(props) {

    const style = {
        backgroundImage: "url(" + props.image + ")",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }

    return (
        <div className="story">
            <div className="story-content" style={style}>
                <div className="story-user">
                    {props.name}
                </div>
            </div>
        </div>
    );
}

export default Story;