import PropTypes from "prop-types";
import { BadgeLink } from "../styles/globalStyles";
import {
  FaFacebook,
  FaTwitter,
  FaRedditAlien,
  FaExternalLinkAlt,
} from "react-icons/fa";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
`;

const SocialLinks = ({ links }) => {
  const { twitter_screen_name, facebook_username, subreddit_url } = links;

  return (
    <Wrapper>
      {facebook_username && (
        <BadgeLink
          href={`https://www.facebook.com/${facebook_username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook /> Facebook <FaExternalLinkAlt />
        </BadgeLink>
      )}
      {twitter_screen_name && (
        <BadgeLink
          href={`https://twitter.com/${twitter_screen_name}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter /> Twitter <FaExternalLinkAlt />
        </BadgeLink>
      )}
      {subreddit_url && (
        <BadgeLink
          href={subreddit_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaRedditAlien /> Reddit <FaExternalLinkAlt />
        </BadgeLink>
      )}
    </Wrapper>
  );
};

SocialLinks.defaultProps = {
  links: {},
};

SocialLinks.propTypes = {
  links: PropTypes.object,
};

export default SocialLinks;
