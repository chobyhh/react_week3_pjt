import React from "react";
import {Grid, Image, Text, Button} from "../elements";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as deleteActions } from "../redux/modules/post";



const Post = (props) => {

  const dispatch = useDispatch();
  const deletePost = (event) => {
    event.stopPropagation();
    dispatch(deleteActions.deletePostFB(props.id));
  };

    return (
      <React.Fragment>
        <Grid>
          <Grid is_flex padding="16px">
            <Grid is_flex width="auto">
              <Image shape="circle" src={props.src} />
              <Text bold>{props.user_info.user_name}</Text>
            </Grid>
            <Grid is_flex width="200px">
              {props.is_me && (<Button width="auto" padding="4px" margin="4px" _onClick={() => {history.push(`/write/${props.id}`)}}>수정</Button>)}
              {props.is_me && (<Button _onClick={deletePost}>삭제</Button>)}
              {/* <Text>{props.insert_dt}</Text> */}
            </Grid>
          </Grid>
          <Grid padding="16px">
            <Text>{props.contents}</Text>
          </Grid>
          <Grid>
            <Image shape="rectangle" src={props.image_url} />
          </Grid>
          <Grid padding="16px">
            <Text margin="0px" bold>댓글 {props.comment_cnt}개</Text>
          </Grid>
        </Grid>
      </React.Fragment>
    );
}
Post.defaultProps = {
    user_info: {
        user_name: "yoon",
        user_Profile: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201911/22/ee69e453-ba32-4e0b-985d-2e2573fb6297.jpg",
    },
    image_url: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201911/22/ee69e453-ba32-4e0b-985d-2e2573fb6297.jpg",
    contents: "저 하늘에 오로라",
    comment_cnt: 10,
    insert_dt: "2022-04-03 10:00:00",
    is_me: false,
};

export default Post;