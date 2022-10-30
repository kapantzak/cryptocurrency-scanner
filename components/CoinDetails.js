import PropTypes from "prop-types";
import Image from "next/image";
import styled from "styled-components";
import { BadgeUppercase, BadgeUppercaseSmall } from "../styles/globalStyles";
import CoinPriceChart from "./CoinPriceChart";
import LowHigh from "./LowHigh.js";
import PriceChange from "./PriceChange";
import CoinLinks from "./CoinLinks";
import SocialLinks from "./SocialLinks";
import CoinReputation from "./CoinReputation";
import CoinSourceCode from "./CoinSourceCode";
import CoinCommunity from "./CoinCommunity";
import CoinInformation from "./CoinInformation";
import Tabs from "./Tabs";
import { getCurrencyFormat } from "../utils/helpers";
import { CURRENCY } from "../utils/constants";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;

  section {
    display: flex;
    column-gap: 1rem;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  row-gap: 0.8rem;

  .name-wrapper {
    display: flex;
    align-items: center;
    column-gap: 1rem;

    .name {
      font-size: 2rem;
      font-weight: bold;
    }
  }

  .coin-overview {
    display: flex;
    column-gap: 1rem;
    align-items: center;
  }
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  flex: 7;
  row-gap: 0.3rem;

  .current-price-header {
    font-size: 0.95rem;
    color: ${(props) => props.theme.black_light};
  }

  .price-and-change {
    display: flex;
    align-items: center;
    column-gap: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .current-price {
    font-size: 2rem;
    font-weight: bold;
  }
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
    sentiment_votes_down_percentage,
    community_data,
    developer_data,
  } = data;
  const { current_price } = market_data || {};
  const { en: descriptionEnglish } = description || {};
  const { homepage, blockchain_site, official_forum_url, repos_url } =
    links || {};
  const { small } = image || {};

  return (
    <Wrapper>
      <section>
        <Info>
          <div className="name-wrapper">
            <Image src={small} width={50} height={50} alt={`${name} image`} />
            <div className="name">{name}</div>
            <BadgeUppercase>{symbol}</BadgeUppercase>
          </div>
          <div className="coin-overview">
            <CoinReputation
              votesUp={sentiment_votes_up_percentage}
              votesDown={sentiment_votes_down_percentage}
            />
            <CoinLinks links={homepage} />
          </div>
          <SocialLinks links={links} />
          <CoinLinks links={official_forum_url} />
          <CoinLinks links={blockchain_site} />
        </Info>
        <Price>
          <div className="current-price-header">
            Current price <BadgeUppercaseSmall>{CURRENCY}</BadgeUppercaseSmall>
          </div>
          <div className="price-and-change">
            <div className="current-price">
              {getCurrencyFormat(current_price[CURRENCY])}
            </div>
            <PriceChange {...market_data} />
          </div>
          <LowHigh {...market_data} />
        </Price>
      </section>
      <Tabs
        tabs={[
          { label: "Price Chart" },
          { label: `About ${name}` },
          { label: "Source Code" },
          { label: "Community" },
        ]}
      >
        <div>
          <CoinPriceChart id={id} />
        </div>
        <div>
          <CoinInformation name={name} description={descriptionEnglish} />
        </div>
        <div>
          <CoinSourceCode reposUrl={repos_url} developerData={developer_data} />
        </div>
        <div>
          <CoinCommunity communityData={community_data} />
        </div>
      </Tabs>
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
