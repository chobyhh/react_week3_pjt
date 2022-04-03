import React from "react";
import {Grid, Image, Text} from "../elements";
// import Grid from "../elements/Grid";
// import Text from "../elements/Text";
// import Image from "../elements/Image";


const Post = (props) => {
    return (
      <React.Fragment>
        <Grid>
          <Grid is_flex>
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
            <Text>{props.insert_dt}</Text>
          </Grid>
          <Grid padding="16px">
            <Text>{props.contents}</Text>
          </Grid>
          <Grid>
            <Image shape="rectangle" src={props.src} />
          </Grid>
          <Grid padding="16px">
            <Text bold>댓글 : {props.comment_cnt}개</Text>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  };

Post.defaultProps = {
    user_info: {
        user_name: "yoon",
        user_Profile: "https://cdn.iconsumer.or.kr/news/photo/202105/18501_22274_3050.jpg",
    },
    image_url: "https://cdn.iconsumer.or.kr/news/photo/202105/18501_22274_3050.jpg",
    contents: "첼전드",
    comment_cnt: 10,
    insert_dt: "2022-04-03 10:00:00"
}

export default Post;