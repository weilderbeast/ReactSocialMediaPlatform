import React, {useState} from 'react';
import {ReactComponent as Record} from "../../../icons/microphone.svg";
import {ReactComponent as Photo} from "../../../icons/image.svg";
import {ReactComponent as Smile} from "../../../icons/smiling.svg";
import PostCreationModal from "../Commons/PostCreationModal";

function PostAdder(props) {

    const [ID, setID] = useState(0);

    const increment = () => {
        setID(ID + 1);
    }

    const postCreationHandler = (e) => {
        props.setPostDescription(e.target.value);
    }

    const postImageHandler = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            props.setPostImage(reader.result);
        }
        reader.readAsDataURL(file)

    }

    const submitPostHandler = (e) => {
        e.preventDefault();
        props.setPosts([
            ...props.posts,
            {
                description: props.postDescription,
                image: props.postImage,
                key: ID
            }
        ]);
        increment();
        props.setPostDescription("");
    }


    return (
        <div className="post-adder-container">
            <div className="post-adder-top">
                <div className="post-profile-pic">
                    {props.picture}
                </div>
                <PostCreationModal
                    name={props.name}
                    picture={props.picture}
                    postCreationHandler={postCreationHandler}
                    postImageHandler={postImageHandler}
                    submitPostHandler={submitPostHandler}
                />
            </div>
            <div className="post-adder-bottom">
                <a href="#" className="post-adder-link">
                    <div className="post-adder-icon">
                        <Record/>
                        Go live
                    </div>
                </a>
                <a href="#" className="post-adder-link">
                    <div className="post-adder-icon">
                        <Photo/>
                        Gallery
                    </div>
                </a>
                <a href="#" className="post-adder-link">
                    <div className="post-adder-icon">
                        <Smile/>
                        Feeling/Activity
                    </div>
                </a>
            </div>
        </div>
    );
}

export default PostAdder;