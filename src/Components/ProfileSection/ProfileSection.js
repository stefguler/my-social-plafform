import ProfileBox from "./ProfileBox/ProfileBox";
import UserPosts from "./UserPosts/UserPosts";
import Header from "../HeaderSection/Header";
import styled from "styled-components";
import { useState } from "react";
import  EditProfile from "./EditProfile/EditProfile";

const Img = styled.img`
  width: 100%;
  height: 350px;
`;

const ProfileSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const UserPostContainer = styled.div`
  width: 100%;
  display: flex;
  margin-right: 15rem;
`;

const UserPostsGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-self: center;
  align-items: center;
  align-self: center;
  padding: 1rem;
  gap: 1rem;
  margin-left: 375px;
`



export default function ProfileSection() {
  const [isEditing,setIsEditing] = useState(false);
  const changeIsEditing = () => {
    setIsEditing(!isEditing)
  }

return (
    <>
      <Header />
      <ProfileSectionContainer>
        <Img src="user_background.png"></Img>
        { !isEditing ? <ProfileBox onClick={changeIsEditing}/> : <EditProfile onClick={changeIsEditing} /> }
      </ProfileSectionContainer>
      <UserPostContainer>
        <UserPostsGrid>
          {/* <UserPosts />
          <UserPosts /> */}
        </UserPostsGrid>
      </UserPostContainer>
    </>
  );
}
