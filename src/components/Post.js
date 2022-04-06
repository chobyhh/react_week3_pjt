import React from "react";
import {Grid, Image, Text} from "../elements";
// import Grid from "../elements/Grid";
// import Text from "../elements/Text";
// import Image from "../elements/Image";



const Post = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex padding="16px">
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            <Text>{props.insert_dt}</Text>
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
    insert_dt: "2022-04-03 10:00:00"
}

export default Post;