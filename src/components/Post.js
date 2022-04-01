import React from "react";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";

const Post = (props) => {

    return(
        <React.Fragment>
           <Grid>
               <Grid is_flex>
                    <Image shape="circle" src = {props.src} />
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
               </Grid>
               <Grid padding="16px">
                    <Text>{props.contents}</Text>
                    
               </Grid>
               <Grid padding="16px">
                    <Image shape="rectangle" src = {props.src} />
               </Grid>
               <Grid padding="16px">
                    <Text bold>댓글 {props.comment_cnt}개</Text>
               </Grid>
               
               {/* <div>user profile / user name / insert_dt</div>
               <div>contents</div>
               <div>image</div>
               <div>comment cnt</div> */}
           </Grid>
        </React.Fragment>
    )
}


export default Post;