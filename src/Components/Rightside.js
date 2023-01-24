import styled from "styled-components";

const Rightside = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>

        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#LinkedIn</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>

        <Recommendation>
          View all recommendation
          <img src="/images/right-icon.svg" alt="" />
        </Recommendation>
      </FollowCard>
      <BannerCard>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROKL5cJc4BcBzCqVaaVqiJSBBxxKLYOAaqjg&usqp=CAU"
          alt=""
        />
      </BannerCard>
    </Container>
  );
};

export default Rightside;

const Container = styled.div`
  gride-area: Rightside;
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
  margin-top: 16px;

  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;

    & > div {
      display: flex;
      flex-direction: column;
    }

    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 38px;
      max-width: 588px;
      align-text: center;
      outline: none;
      transition: 100ms;

      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
        color: #000;
      }
    }
  }
`;

const Avatar = styled.div`
  background-image: url("https://img.icons8.com/external-flatart-icons-outline-flatarticons/2x/external-hashtags-twitter-flatart-icons-outline-flatarticons.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 38px;
  height: 38px;
  margin-right: 8px;
  border: 4px solid gray;
  border-radius: 50%;
`;

const Recommendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const BannerCard = styled(FollowCard)``;
