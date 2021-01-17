import React, {useState} from 'react';
import Story from "./Stories/Story";
import PostAdder from "./Posts/PostAdder";
import {ReactComponent as Logo} from "../../icons/linux.svg";
import Feed from "./Posts/Feed/Feed";

function ContentMain() {

    let state;
    state = {
        currentTime: new Date().toLocaleString(),
        loggedUser: "Ionut Grosu",
        profilePicture: <Logo/>
    };

    const [postDescription, setPostDescription] = useState("");
    const [postImage, setPostImage] = useState("");
    const [posts, setPosts] = useState([]);

    return (
        <div className="main-content">
            <div className="story-container">
                <Story name={"Cristina P. Elena"}
                       image={"https://scontent.fcph2-1.fna.fbcdn.net/v/t1.0-9/139643035_3461145550680493_3609227732146281895_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=PBPmOOxOjiEAX-4yvEm&_nc_ht=scontent.fcph2-1.fna&oh=f011b6afbf5c3cc067c4034c24bfc2cc&oe=602A7613"}/>
                <Story name={"Elena Smeu"}
                       image={"https://expertphotography.com/wp-content/uploads/2018/03/abstract-photography.1.jpg"}/>
                <Story name={"Grosu Ionut"} image={"https://i.kym-cdn.com/photos/images/newsfeed/001/275/715/010.png"}/>
                <Story name={"Andrei Tofan"}
                       image={"https://i.pinimg.com/originals/1a/a3/60/1aa360e4342c35730bc4d5561fe95685.png"}/>
                <Story name={"Gabriel Smeu"}
                       image={"https://uproxx.com/wp-content/uploads/2018/09/adventure-time-series-finale.jpg?quality=95"}/>
                <Story name={"Istrate N. Vlad"}
                       image={"https://wallpapercave.com/wp/wp2084607.jpg"}/>
            </div>
            <PostAdder
                name={"Maria Alexia Udrea"}
                picture={<Logo/>}
                postDescription={postDescription}
                setPostDescription={setPostDescription}
                setPostImage={setPostImage}
                posts={posts}
                setPosts={setPosts}
            >
            </PostAdder>
            <Feed posts={posts}
                  postOwner={state.loggedUser}
                  profilePicture={state.profilePicture}
                  timestamp={state.currentTime}/>

        </div>
    );
}

export default ContentMain;