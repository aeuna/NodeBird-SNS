import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followingList = [
    { nickname: "euna" },
    { nickname: "aeuan" },
    { nickname: "beuna" },
  ];
  const followerList = [
    { nickname: "euna" },
    { nickname: "aeuan" },
    { nickname: "beuna" },
  ];
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList heder="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
