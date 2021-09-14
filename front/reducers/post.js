export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "eunah",
      },
      content: "첫 번째 게시글 2020년 시간표 #휴학 #그립다",
      Images: [
        { src: "https://ifh.cc/g/K77ZOV.jpg" },
        { src: "https://ifh.cc/g/K77ZOV.jpg" },
        { src: "https://ifh.cc/g/K77ZOV.jpg" },
      ],
      Comments: [
        {
          User: { nickname: "euna1" },
          content: "휴학 좋았지",
        },
        {
          User: { nickname: "euna2" },
          content: "코로나만 아니었으면",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  User: {
    id: 2,
    nickname: "euna",
  },
  content: "두 번째 게시글 더미데이터임",
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
