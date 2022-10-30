import PropTypes from "prop-types";
import { BadgeLink } from "../../styles/globalStyles";
import { FaExternalLinkAlt } from "react-icons/fa";
import { trimString } from "../../utils/helpers";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
`;

const CoinLinks = ({ links }) => {
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
  } = links;
  const { github, bitbucket } = repos_url || {};

  return (
    <Wrapper>
      {(blockchain_site || [])
        .filter((href) => href.length > 0)
        .map((href) => (
          <BadgeLink href={href} target="_blank" rel="noopener noreferrer">
            {trimString(href.replace("https://", ""))} <FaExternalLinkAlt />
          </BadgeLink>
        ))}
    </Wrapper>
  );
};

CoinLinks.defaultProps = {
  links: {},
};

CoinLinks.propTypes = {
  links: PropTypes.object,
};

export default CoinLinks;
