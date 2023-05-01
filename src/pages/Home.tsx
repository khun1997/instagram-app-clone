import styled from "styled-components";
import useApiHook from "../hooks/useFetchApi";
// import { useState } from "react";
// import { UserType } from "../hooks/useFetchApi";
const Section = styled.section``;
const Wrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  img {
    cursor: pointer;
  }
`;
// Left CSS open
const LeftSection = styled.div`
  width: 16%;
  border-right: 0.5px solid #d7d2d2;
`;
const InstagramLogo = styled.div`
  img {
    padding: 25px 8px;
    margin-left: 4px;
    width: 110px;
  }
`;
const IconContainer = styled.div`
  width: 240px;
  height: 100%;
  margin-top: -5px;
  font-weight: 500;

  a {
    color: black;
  }
`;
const IconList = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
`;
const Icon = styled.div`
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
  /* svg {
    width: 30px;
    :hover {
      scale: 1.05;
    }
  } */
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
const IconMore = styled.div`
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
const Profile = styled.div`
  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
`;
// Mid CSS open
const MidSection = styled.div`
  width: 51%;
  margin: -15px 0px 0px -10px;
`;
const ActiveUser = styled.div`
  margin-top: 25px;
  display: flex;
  gap: 15px;
  padding: 30px 130px;
`;
const User = styled.div`
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

const Post = styled.div`
  margin-top: 40px;
`;
const Card = styled.div`
  width: 500px;
  height: 500px;
  margin-left: 200px;
  margin-top: -10px;
`;
const CardNav = styled.div`
  display: flex;
`;
const CardProfile = styled.div`
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
const CardProfileImg = styled.img`
  background-color: #f1eeee;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const CardMenuIcon = styled.img`
  width: 17px;
  height: 17px;
  :hover {
    opacity: 60%;
  }
`;
const PostImg = styled.img`
  pointer-events: none;
  width: 500px;
  background-color: black;
  height: 450px;
  object-fit: contain;
`;

const CardIconContainer = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
`;
const CardIcon = styled.img`
  background-color: none;
  margin-right: 7px;
  color: white;
  width: 30px;
  height: 30px;

  :hover {
    opacity: 60%;
  }
`;
const SaveIcon = styled.img`
  width: 26px;
  height: 26px;
  :hover {
    opacity: 60%;
  }
`;
// Right CSS open
const RightSection = styled.div`
  background-color: white;
  width: 35%;
  margin-top: -20px;
  margin-left: -10px;
`;
const RightContainer = styled.div`
  z-index: 1;
  width: 350px;
  padding: 40px 60px;
`;
const RightProfileContainer = styled.div`
  width: 320px;
  height: 320px;
  overflow: hidden;
`;
const RightProfileNav = styled.div`
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
const RightProfileLists = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: auto;
`;
const RightSuggestDiv = styled.div`
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
// const RightProfileList = styled.div`
//   height: 20px;
//   background-color: red;
//   margin: 5px 0px;
// `;
const SuggestedUsers = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
`;
const SuggestedUser = styled.div`
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
const RightFooter = styled.div`
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
    /* margin-top: -30px; */
  }
`;
const RightFootEnd = styled.div`
  font-size: 13px;
  margin-left: 10px;
  margin-top: 20px;
  color: #d3cdcd;
`;

// interface IconProps {
//   isActive: boolean;
//   onClick: () => void;
//   // fill:string

// }
// type Props = {
//   data: UserType[];
//   loading: boolean;
//   error: null;
// };

const Home = () => {
  const { data, loading } = useApiHook();
  // const [isActive, setIsActive] = useState(false);
  // const handleClick = () => {
  //   setIsActive(!isActive)
  // };
  console.log(data);
  return (
    <>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <Section>
          <Wrapper>
            {/* Left section start */}
            <LeftSection>
              <InstagramLogo>
                <img
                  alt=""
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
                />
              </InstagramLogo>

              <IconContainer>
                <IconList>
                  <Icon>
                    <a href="">
                      <img
                        alt=""
                        src="https://cdn2.iconfinder.com/data/icons/instagram-17/32/19-home-256.png"
                      />
                      <p>Home</p>
                    </a>
                  </Icon>
                  <Icon>
                    <a href="">
                      <img
                        alt=""
                        src="https://www.svgrepo.com/show/513607/search.svg"
                      />
                      {/* <svg
                       
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg> */}

                      <p>Search</p>
                    </a>
                  </Icon>
                  <Icon>
                    <a href="">
                      <img
                        alt=""
                        src="https://cdn1.iconfinder.com/data/icons/airline-flight-booking-mobile-app/15/compass-route-travel-explore-256.png"
                      />
                      <p>Explore</p>
                    </a>
                  </Icon>
                  <Icon>
                    <a href="">
                      <img
                        alt=""
                        src="https://cdn.iconscout.com/icon/free/png-256/free-instagram-reel-4941672-4109072.png"
                      />
                      <p>Reels</p>
                    </a>
                  </Icon>
                  <Icon>
                    <a href="">
                      <img
                        alt=""
                        src="https://cdn4.iconfinder.com/data/icons/instagram-43/32/send._sent_massage-256.png"
                      />
                      <p>Messages</p>
                    </a>
                  </Icon>
                  <Icon style={{ marginLeft: "-3px" }}>
                    <a href="">
                      <img
                        alt=""
                        src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/heart-outline-512.png"
                        style={{ width: "28px" }}
                      />
                      <p style={{ marginLeft: "10px" }}>Notifications</p>
                    </a>
                  </Icon>
                  <Icon>
                    <a href="">
                      <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/6537/6537820.png"
                      />
                      <p>Create</p>
                    </a>
                  </Icon>
                  <Icon>
                    <Profile>
                      <a href="">
                        <img
                          alt=""
                          src="https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/278842209_1403103943473610_3669956227937494773_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Hydfj-KqzkcAX9Sz_Ff&_nc_ht=scontent-sin6-3.xx&oh=00_AfBUAFXYPegITg6kI26FxQXCV2BHL6tS7sVLDWVLWApXVA&oe=645263BF"
                        />
                        <p>Profile</p>
                      </a>
                    </Profile>
                  </Icon>
                  <IconMore>
                    <a href="">
                      <img
                        alt=""
                        src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/hamburger-menu-icon.png"
                      />
                      <p>More</p>
                    </a>
                  </IconMore>
                </IconList>
              </IconContainer>
            </LeftSection>
            {/* left section close */}

            {/* mid section start */}
            <MidSection>
              <ActiveUser>
                {data &&
                  data.map((user) => {
                    return (
                      <>
                        <User key={user.id}>
                          <img src={user.image} />
                          <p>{user.firstName}</p>
                        </User>
                      </>
                    );
                  })}
              </ActiveUser>
              <Post>
                <Card>
                  <CardProfile>
                    <CardNav>
                      <CardProfileImg src="https://robohash.org/consequunturautconsequatur.png"></CardProfileImg>
                      <p>
                        seolina.official<span> . 1d</span>
                      </p>
                    </CardNav>
                    <CardMenuIcon src="https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-glyph-1/32/-_Dot-More-Option-Menu-256.png"></CardMenuIcon>
                  </CardProfile>
                  <PostImg
                    src="https://0.soompi.io/wp-content/uploads/2021/02/16160713/Seol-In-Ah-4.jpg"
                    alt=""
                  />
                  <CardIconContainer>
                    <div>
                      <CardIcon src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/heart-outline-512.png" />
                      <CardIcon
                        src="https://cdn3.iconfinder.com/data/icons/instagram-latest/1000/Instagram_chat_comment-256.png"
                        style={{ marginBottom: "2px" }}
                      />
                      <CardIcon
                        src="https://cdn4.iconfinder.com/data/icons/instagram-43/32/send._sent_massage-256.png
"
                      />
                    </div>
                    <SaveIcon src="https://cdn2.iconfinder.com/data/icons/instagram-17/32/7-save-256.png"></SaveIcon>
                  </CardIconContainer>
                </Card>
              </Post>
            </MidSection>
            {/* mid section close */}

            {/* right section start */}
            <RightSection>
              <RightContainer>
                <RightProfileContainer>
                  <RightProfileNav>
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/004/226/762/original/panda-cartoon-cute-say-hello-panda-animals-illustration-vector.jpg"
                      alt=""
                    />
                    <div>
                      <p>khunye.97</p>
                      <span>Khun.ye.aung</span>
                    </div>
                    <button>Switch</button>
                  </RightProfileNav>
                  <RightProfileLists>
                    <RightSuggestDiv>
                      <p>Suggested for you</p>
                      <button>See All</button>
                    </RightSuggestDiv>
                    {data &&
                      data.map((user) => {
                        return (
                          <>
                            <SuggestedUsers>
                              <SuggestedUser key={user.id}>
                                <img src={user.image} />
                                <div>
                                  <p>{user.firstName}</p>
                                  <span>suggested for you</span>
                                </div>
                                <button>Follow</button>
                              </SuggestedUser>
                            </SuggestedUsers>
                          </>
                        );
                      })}
                    {/* <RightProfileList>a</RightProfileList>
                    <RightProfileList>a</RightProfileList>
                    <RightProfileList>a</RightProfileList>
                    <RightProfileList>a</RightProfileList>
                    <RightProfileList>a</RightProfileList>
                  <RightProfileList>a</RightProfileList> */}
                  </RightProfileLists>
                </RightProfileContainer>
                <RightFooter>
                  <div>
                    <p>About</p>
                    <p>. Help</p>
                    <p>. Press</p>
                    <p>. Api</p>
                    <p>. Jobs</p>
                    <p>. Privacy</p>
                    <p>. Terms</p>
                  </div>
                  <div>
                    <p>Locations</p>
                    <p>. Language</p>
                    <p>. Meta Verified</p>
                  </div>
                </RightFooter>
                <RightFootEnd>@2023 INSTAGRAM FROM META</RightFootEnd>
              </RightContainer>
            </RightSection>
            {/* right section end */}
          </Wrapper>
        </Section>
      )}
    </>
  );
};

export default Home;
