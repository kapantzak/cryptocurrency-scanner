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
  return (
    <Wrapper>
      {links
        .filter((href) => href.length > 0)
        .map((href) => (
          <BadgeLink href={href} target="_blank" rel="noopener noreferrer">
            {trimString(href.replace(/http[s]?:\/\//, ""))}{" "}
            <FaExternalLinkAlt />
          </BadgeLink>
        ))}
    </Wrapper>
  );
};

CoinLinks.defaultProps = {
  links: [],
};

CoinLinks.propTypes = {
  links: PropTypes.array,
};

export default CoinLinks;
