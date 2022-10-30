import PropTypes from "prop-types";
import Image from "next/image";
import styled from "styled-components";
import { BadgeUppercase } from "../styles/globalStyles";
import CoinPriceChart from "./CoinPriceChart";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  section {
    display: flex;
    column-gap: 1rem;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;

  .name-wrapper {
    display: flex;
    align-items: center;
    column-gap: 1rem;

    .name {
      font-size: 2rem;
      font-weight: bold;
    }
  }
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  flex: 7;
`;

const CoinDetails = ({ data }) => {
  const {
    id,
    symbol,
    name,
    market_data,
    description,
    links,
    image,
    sentiment_votes_up_percentage,
    sentiment_votes_dows_percentage,
    community_data,
    developer_data,
  } = data;
  const {
    current_price,
    ath,
    ath_date,
    atl,
    atl_date,
    high_24h,
    low_24h,
    price_change_24h,
    price_change_percentage_7d,
    price_change_percentage_14d,
    price_change_percentage_30d,
    price_change_percentage_60d,
    price_change_percentage_200d,
    price_change_percentage_1y,
  } = market_data || {};
  const { en: descriptionEnglish } = description || {};
  const {
    homepage,
    blockchain_site,
    official_forum_url,
    chat_url,
    announcement_url,
    twitter_screen_name,
    facebook_username,
    bitcointalk_thread_identifier,
    telegram_channel_identifier,
    subreddit_url,
    repos_url,
  } = links || {};
  const { github, bitbucket } = repos_url || {};
  const { thumb, small, large } = image || {};
  const {
    facebook_likes,
    twitter_followers,
    reddit_average_posts_48h,
    reddit_average_comments_48h,
    reddit_subscribers,
    reddit_accounts_active_48h,
    telegram_channel_user_count,
  } = community_data || {};
  const {
    forks,
    stars,
    subscribers,
    total_issues,
    closed_issues,
    pull_requests_merged,
    pull_request_contributors,
  } = developer_data || {};

  return (
    <Wrapper>
      <section>
        <Info>
          <div className="name-wrapper">
            <Image src={small} width={50} height={50} alt={`${name} image`} />
            <div className="name">{name}</div>
            <BadgeUppercase>{symbol}</BadgeUppercase>
          </div>
          {/* <div dangerouslySetInnerHTML={{ __html: descriptionEnglish }} /> */}
        </Info>
        <Price>Price</Price>
      </section>
      <CoinPriceChart id={id} />
    </Wrapper>
  );
};

CoinDetails.defaultProps = {
  data: {},
};

CoinDetails.propTypes = {
  data: PropTypes.object,
};

export default CoinDetails;
