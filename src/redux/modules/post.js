//post
import { createAction, handleActions } from "redux-actions";
import {produce} from "immer";
import { firestore } from "../../shared/firebase";
import moment from "moment";

const SET_POST = "SET_POST"
const ADD_POST = "ADD_POST"

const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));

const initialState = {
    list: [],
}

// 게시글 하나에는 어떤 정보가 있어야 하는 지 하나 만들어둡시다! :)
const initialPost = {
    // id: 0,
    // user_info: {
    //     user_name: "yoon",
    //     user_Profile: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201911/22/ee69e453-ba32-4e0b-985d-2e2573fb6297.jpg",
    // },
    image_url: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201911/22/ee69e453-ba32-4e0b-985d-2e2573fb6297.jpg",
    contents: "",
    comment_cnt: 0,
    insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
};

const addPostFB = (contents="") => {
    return function (dispatch, getState, {history}){
        const postDB = firestore.collection("post");
        const _user = getState().user.user;

        const user_info = {
            user_name: _user.user_name,
            user_id: _user.uid,
            user_profile: _user.user_profile,
        }
        const _post = {
            ...initialPost,
            contents: contents,
            insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
        };

        //console.log({...user_info, ..._post});
        
        //firebase에 저장시키기
        postDB.add({...user_info, ..._post}).then((doc)=>{
            let post = {user_info, ..._post, id:doc.id};
            dispatch(addPost(post))
            history.replace("/");
        }).catch((err)=>{
            console.log("post 작성에 실패했어요", err);
        })
    }
}

const getPostFB = () => {
    return function (dispatch, getState, {history}){
        const postDB = firestore.collection("post");

        postDB.get().then((docs) => {
            let post_list = [];
            docs.forEach((doc)=>{
                //console.log(doc.id, doc.data());

                //방법 1
                // let _post = {
                //     id: doc.id,
                //     ...doc.data()
                // };

                // let post = {
                //     id: doc.id,
                //     user_info: {
                //         user_name: _post.user_name,
                //         user_Profile: _post.user_profile,
                //         user_id: _post.user_id,
                //     },
                //     image_url: _post.image_url,
                //     contents: _post.contents,
                //     comment_cnt: _post.comment_cnt,
                //     insert_dt: _post.insert_dt,
                // };

                //방법 2
                let _post = doc.data();

                // ['comment_cnt', 'contents', ...] 형태의 배열로 만들어 준다
                let post = Object.keys(_post).reduce((acc, cur) => {

                    if(cur.indexOf("user_") !== -1){
                        return {...acc, user_info: {...acc.user_info, [cur]: _post[cur]}};
                    }
                    return {...acc, [cur]: _post[cur]};
                }, {id: doc.id, user_info: {}});

                post_list.push(post);
            })

            console.log(post_list);

            dispatch(setPost(post_list));
        })
    }
}

// reducer
export default handleActions(
    {
        [SET_POST]: (state, action) => produce(state, (draft) => {
            draft.list = action.payload.post_list;
        }),
  
        [ADD_POST]: (state, action) => produce(state, (draft) => {
            draft.list.unshift(action.payload.post);
        })
    },
    initialState
);

// action creator export
const actionCreators = {
    setPost,
    addPost,
    getPostFB,
    addPostFB,
  };
  
  export { actionCreators };

