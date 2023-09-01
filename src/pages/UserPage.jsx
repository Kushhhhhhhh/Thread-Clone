import { UserHeader, UserPost } from "../components";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost likes={35} replies={14} postImg="/post1.png" postTitle={"Let's talk about Thread "}/>
      <UserPost likes={42} replies={18} postImg="/post2.png" postTitle={"Nice Tutorial"}/>
      <UserPost likes={27} replies={8} postImg="/post3.png" postTitle={"I love this guy"}/>
      <UserPost likes={66} replies={16}  postTitle={"posting my first thread : )"}/>
    </>
  );
};

export default UserPage;
