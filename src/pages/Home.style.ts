import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  img {
    cursor: pointer;
  }
`;
// left section css start
export const LeftSection = styled.div`
  width: 16%;
  border-right: 0.5px solid #d7d2d2;
`;
export const InstagramLogo = styled.div`
  img {
    padding: 25px 8px;
    margin-left: 4px;
    width: 110px;
  }
`;
export const IconContainer = styled.div`
  width: 240px;
  height: 100%;
  margin-top: -5px;
  font-weight: 500;

  a {
    color: black;
  }
`;

export const IconList = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3px;
  :hover {
    border-radius: 5%;
    background-color: #eeeded;
    img {
      scale: 1.05;
    }
  }
  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    margin-left: 15px;
    font-size: 15px;
  }
  img {
    width: 22px;
    display: flex;
    align-items: center;
    margin-top: 3px;
  }
  p {
    margin-left: 15px;
    font-size: 15px;
  }
`;
export const IconMore = styled.div`
  display: flex;
  width: 230px;
  height: 45px;
  margin-top: 100px;
  align-items: center;
  border-radius: 5%;

  :hover {
    border-radius: 5%;
    background-color: #eeeded;
    img {
      scale: 1.05;
    }
  }
  a {
    display: flex;
    align-items: center;
    margin-left: 15px;
    font-size: 15px;
    text-decoration: none;
  }
  img {
    width: 22px;
    display: flex;
    align-items: center;
    margin-top: 3px;
  }
  p {
    margin-left: 15px;
    font-size: 15px;
  }
`;

export const Profile = styled.div`
  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
`;
// left section css close

// Mid section css start
export const MidSection = styled.div`
  width: 51%;
  margin: -15px 0px 0px -10px;
`;

export const ActiveUser = styled.div`
  margin-top: 25px;
  display: flex;
  gap: 15px;
  padding: 30px 130px;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid orange;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #f1eeee;
  }
  p {
    font-size: 10px;
  }
`;
export const Post = styled.div`
  margin-top: 40px;
`;
export const Card = styled.div`
  width: 500px;
  height: 500px;
  margin-left: 200px;
  margin-top: -10px;
`;
export const CardNav = styled.div`
  display: flex;
`;

export const CardProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin-left: 10px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    :hover {
      color: gray;
    }
  }
  span {
    color: gray;
    font-weight: 500;
  }
`;
export const CardProfileImg = styled.img`
  background-color: #f1eeee;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const CardMenuIcon = styled.img`
  width: 17px;
  height: 17px;
  :hover {
    opacity: 60%;
  }
`;
export const PostImg = styled.img`
  pointer-events: none;
  width: 500px;
  background-color: black;
  height: 450px;
  object-fit: contain;
`;

export const CardIconContainer = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
`;
export const CardIcon = styled.img`
  background-color: none;
  margin-right: 7px;
  color: white;
  width: 30px;
  height: 30px;

  :hover {
    opacity: 60%;
  }
`;
export const SaveIcon = styled.img`
  width: 26px;
  height: 26px;
  :hover {
    opacity: 60%;
  }
`;
// mid section css close 

//right section css start
export const RightSection = styled.div`
  background-color: white;
  width: 35%;
  margin-top: -20px;
  margin-left: -10px;
`;

export const RightContainer = styled.div`
  z-index: 1;
  width: 350px;
  padding: 40px 60px;
`;
export const RightProfileContainer = styled.div`
  width: 320px;
  height: 320px;
  overflow: hidden;
`;
export const RightProfileNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  div {
    margin-left: -100px;
    margin-top: -10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  p {
    font-size: 14px;
    cursor: pointer;
  }
  span {
    font-size: 12px;
    font-weight: 200;
    cursor: pointer;
    margin-top: -20px;
  }
  button {
    font-weight: 700;
    font-size: 12px;
    color: #1779e8;
    padding: 0;
    margin-right: -2px;
    border: none;
    background: none;
    cursor: pointer;
  }
`;
export const RightProfileLists = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: auto;
`;
export const RightSuggestDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -20px;
  p {
    font-size: 13px;
    color: #787575;
  }
  button {
    font-size: 12px;
    margin-right: -5px;
    font-weight: 700;
    border: none;
    background: none;
    cursor: pointer;
  }
`;
export const SuggestedUsers = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
`;
export const SuggestedUser = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3px 0px;
  cursor: pointer;
  div {
    margin-left: -100px;
    margin-top: -10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  img {
    width: 35px;
    background-color: yellow;
    height: 35px;
    border-radius: 50%;
    background-color: gray;
  }
  p {
    font-weight: 500;
    font-size: 13px;
    margin-left: -15px;
  }
  span {
    font-size: 11px;
    font-weight: 200;
    margin-left: -15px;
    margin-top: -17px;
  }
  button {
    font-weight: 700;
    color: #1779e8;
    font-size: 12px;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
  }
`;
export const RightFooter = styled.div`
  margin-left: 10px;
  margin-top: 20px;
  div {
    display: flex;
    gap: 8px;
    width: 350px;
    height: 20px;
  }
  p {
    font-size: 11px;
    color: #d3cdcd;
  }
`;
export const RightFootEnd = styled.div`
  font-size: 13px;
  margin-left: 10px;
  margin-top: 20px;
  color: #d3cdcd;
`;
//right section css close