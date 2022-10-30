import PropTypes from "prop-types";
import Card from "../Card";
import { BadgeLink } from "../../styles/globalStyles";
import { FaGithub, FaBitbucket, FaExternalLinkAlt } from "react-icons/fa";
import Statistics from "./Statistics";
import { trimString } from "../../utils/helpers";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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

const CoinSourceCode = ({ reposUrl, developerData }) => {
  const { github, bitbucket } = reposUrl;

  return (
    <Wrapper>
      {github.length > 0 && (
        <Card>
          <Title>
            <FaGithub /> Github
          </Title>
          <Content>
            <StatisticsWrapper>
              <Statistics developerData={developerData} />
            </StatisticsWrapper>
            <LinksWrapper>
              {github.map((link) => (
                <BadgeLink
                  key={link}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.replace("https://github.com/", "")}
                  <FaExternalLinkAlt />
                </BadgeLink>
              ))}
            </LinksWrapper>
          </Content>
        </Card>
      )}
      {bitbucket.length > 0 && (
        <Card>
          <Title>
            <FaBitbucket /> Bitbucket
          </Title>
          <Content>
            <LinksWrapper>
              {bitbucket.map((link) => (
                <BadgeLink
                  key={link}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {trimString(link)}
                  <FaExternalLinkAlt />
                </BadgeLink>
              ))}
            </LinksWrapper>
          </Content>
        </Card>
      )}
    </Wrapper>
  );
};

CoinSourceCode.defaultProps = {
  reposUrl: {},
  developerData: {},
};

CoinSourceCode.propTypes = {
  reposUrl: PropTypes.object,
  developerData: PropTypes.object,
};

export default CoinSourceCode;
