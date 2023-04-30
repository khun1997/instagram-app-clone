import styled from "styled-components";
import useApiHook from "../hooks/useFetchApi";
import { UserType } from "../hooks/useFetchApi";
const Section = styled.section``;
const Wrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
`;
const LeftSection = styled.div`
  width: 16%;
`;
const InstagramLogo = styled.div`
  img {
    padding: 20px 10px;
    margin-top: 6px;
    margin-left: 4px;
    width: 110px;
  }
`;
const IconContainer = styled.div`
  width: 150px;
  height: 100%;
`;
const IconList = styled.div`
  display: flex;
  flex-direction: column;
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3px;
  a {
    display: flex;
    align-items: center;
    margin-left: 15px;
    font-size: 15px;
  }
  img {
    width: 22px;
    display: flex;
    align-items: center;
    margin-top: 3px;
    :hover {
      scale: 1.05;
    }
  }
  p {
    margin-left: 15px;
    font-size: 15px;
  }
`;
const IconMore = styled.div`
  display: flex;
  width: 50px;
  height: 20px;
  margin-top: 130px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    margin-left: 15px;
    font-size: 15px;
  }
  img {
    width: 22px;
    display: flex;
    align-items: center;
    margin-top: 3px;
    :hover {
      scale: 1.05;
    }
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

const MidSection = styled.div`
  width: 51%;
  background-color: yellow;
`;
const ActiveUser = styled.div`
  z-index: 0;
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
  }
  p {
    font-size: 10px;
  }
`;

const Post = styled.div`
  margin-top: 40px;

  /* background-color: red; */
`;
const Card = styled.div`
  width: 500px;
  height: 500px;
  background-color: green;
  /* margin-top: 40px; */
  margin-left:200px ;
  img{
    width: 500px;
    height: 500px;
object-fit  }
`;
const CardProfile = styled.div`
  display: flex;
  gap: 10px;
  img {
    background-color: red;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  p {
    font-size: 13px;
    font-weight: bold;
  }
`;
const RightSection = styled.div`
  background-color: white;
  width: 33%;
  /* height: 100%; */

  /* background-color: blue; */
`;

// type Props = {
//   data: UserType[];
//   loading: boolean;
//   error: null;
// };

const Home = () => {
  const { data, loading } = useApiHook();
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
                        src="https://cdn.onlinewebfonts.com/svg/img_95607.png"
                      />
                      <p>Home</p>
                    </a>
                  </Icon>
                  <Icon>
                    <a href="">
                      <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/5948/5948534.png"
                      />
                      <p>Search</p>
                    </a>
                  </Icon>
                  <Icon>
                    <a href="">
                      <img
                        alt=""
                        src="https://cdn.onlinewebfonts.com/svg/img_121669.png"
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
                        src="https://cdn-icons-png.flaticon.com/512/5728/5728145.png"
                      />
                      <p>Messages</p>
                    </a>
                  </Icon>
                  <Icon style={{ marginLeft: "-3px" }}>
                    <a href="">
                      <img
                        alt=""
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Ei-heart.svg/800px-Ei-heart.svg.png"
                        style={{ width: "30px" }}
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
                        src="https://cdn-icons-png.flaticon.com/512/37/37988.png"
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
                    <img src="https://robohash.org/consequunturautconsequatur.png" />
                    <p>Terrill</p>
                  </CardProfile>
                  <img src="https://photos.hancinema.net/photos/photo1598683.jpg" alt="" />
                </Card>
              </Post>
            </MidSection>
            {/* mid section close */}

            {/* right section start */}
            <RightSection>RIGHT</RightSection>
            {/* right section end */}
          </Wrapper>
        </Section>
      )}
    </>
  );
};

export default Home;
