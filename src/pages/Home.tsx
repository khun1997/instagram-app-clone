import useApiHook from "../hooks/useFetchApi";
import {
  Wrapper,
  LeftSection,
  InstagramLogo,
  IconContainer,
  IconList,
  Icon,
  IconMore,
  Profile,
  MidSection,
  ActiveUser,
  User,
  Post,
  Card,
  CardNav,
  CardProfile,
  CardProfileImg,
  CardMenuIcon,
  PostImg,
  CardIconContainer,
  CardIcon,
  SaveIcon,
  RightSection,
  RightContainer,
  RightProfileContainer,
  RightProfileNav,
  RightProfileLists,
  RightSuggestDiv,
  SuggestedUsers,
  SuggestedUser,
  RightFooter,
  RightFootEnd,
} from "./Home.style";

const Home: React.FC = () => {
  const { data = [], loading } = useApiHook();
  return (
    <>
      {loading ? (
        <h1>loading</h1>
      ) : (
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
              {data?.map((user) => {
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
                    <CardIcon src="https://cdn4.iconfinder.com/data/icons/instagram-43/32/send._sent_massage-256.png" />
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
                  {data?.map((user) => {
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
      )}
    </>
  );
};

export default Home;
