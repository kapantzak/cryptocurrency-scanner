import PropTypes from "prop-types";
import Card from "../Card";
import {
  FaFacebook,
  FaTwitter,
  FaRedditAlien,
  FaTelegramPlane,
} from "react-icons/fa";
import { compactNumber } from "../../utils/helpers";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
`;

const Title = styled.h2`
  display: flex;
  column-gap: 0.6rem;
  align-items: center;
  margin-top: 0;
  color: ${({ theme }) => theme.black_light};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
`;

const StatisticsWrapper = styled(LinksWrapper)`
  padding-bottom: 0.7rem;
`;

const StatBadge = styled.div`
  display: flex;
  column-gap: 0.3rem;
  align-items: center;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 0.3rem 0.4rem;
  border: 1px solid ${(props) => props.theme.gray_500};
  border-radius: 4px;
  background-color: ${(props) => props.theme.white};
`;

const CoinCommunity = ({ communityData }) => {
  const {
    facebook_likes,
    twitter_followers,
    reddit_average_posts_48h,
    reddit_average_comments_48h,
    reddit_subscribers,
    reddit_accounts_active_48h,
    telegram_channel_user_count,
  } = communityData;

  return (
    <Wrapper>
      {(facebook_likes && (
        <Card>
          <Title>
            <FaFacebook /> Facebook
          </Title>
          <Content>
            <StatisticsWrapper>
              <StatBadge title="Facebook Likes" aria-label="Facebook Likes">
                Likes {compactNumber(facebook_likes)}
              </StatBadge>
            </StatisticsWrapper>
          </Content>
        </Card>
      )) ||
        null}
      {(twitter_followers && (
        <Card>
          <Title>
            <FaTwitter /> Twitter
          </Title>
          <Content>
            <StatisticsWrapper>
              <StatBadge
                title="Twitter Followers"
                aria-label="Twitter Followers"
              >
                Followers {compactNumber(twitter_followers)}
              </StatBadge>
            </StatisticsWrapper>
          </Content>
        </Card>
      )) ||
        null}
      {(reddit_subscribers && (
        <Card>
          <Title>
            <FaRedditAlien /> Reddit
          </Title>
          <Content>
            <StatisticsWrapper>
              <StatBadge
                title="Reddit Subscribers"
                aria-label="Reddit Subscribers"
              >
                Subscribers {compactNumber(reddit_subscribers)}
              </StatBadge>
              {reddit_average_posts_48h && (
                <StatBadge
                  title="Average posts (48h)"
                  aria-label="Average posts (48h)"
                >
                  Avg posts 48h {reddit_average_posts_48h}
                </StatBadge>
              )}
              {reddit_average_comments_48h && (
                <StatBadge
                  title="Average comments (48h)"
                  aria-label="Average comments (48h)"
                >
                  Avg comments 48h {reddit_average_comments_48h}
                </StatBadge>
              )}
            </StatisticsWrapper>
          </Content>
        </Card>
      )) ||
        null}
      {(telegram_channel_user_count && (
        <Card>
          <Title>
            <FaTelegramPlane /> Telegram
          </Title>
          <Content>
            <StatisticsWrapper>
              <StatBadge title="Telegram Users" aria-label="Telegram Users">
                Users {compactNumber(telegram_channel_user_count)}
              </StatBadge>
            </StatisticsWrapper>
          </Content>
        </Card>
      )) ||
        null}
    </Wrapper>
  );
};

CoinCommunity.defaultProps = {
  communityData: {},
};

CoinCommunity.propTypes = {
  communityData: PropTypes.object,
};

export default CoinCommunity;
