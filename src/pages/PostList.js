import React from "react";
import Post from "../components/Post";

const PostList = (props) => {

    return(
        <React.Fragment>
            <Post />
        </React.Fragment>
    )
}

Post.defaultProps = {
    user_info:{
        user_name: "yoon",
        user_profile: "http://t1.daumcdn.net/movie/92323f5bc322b709e2605cc5406f5349ba4304d6"
    },
    image_url :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmp7sE1ggI4_L7NGZWcQT9EyKaqKLeQ5RBg&usqp=CAU",
    contents:"첼전드!!",
    comment_cnt: 10,
    insert_dt: "2022-04-01 08:00:00",
};
export default PostList;