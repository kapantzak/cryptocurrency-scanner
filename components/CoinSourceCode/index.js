import PropTypes from "prop-types";
import Card from "../Card";
import { BadgeLink } from "../../styles/globalStyles";
import { FaGithub, FaBitbucket, FaExternalLinkAlt } from "react-icons/fa";
import {
  GoRepoForked,
  GoStar,
  GoIssueOpened,
  GoRss,
  GoIssueClosed,
  GoGitMerge,
  GoPerson,
} from "react-icons/go";
import { trimString, compactNumber } from "../../utils/helpers";
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

const CoinSourceCode = ({ reposUrl, developerData }) => {
  const { github, bitbucket } = reposUrl;
  const {
    forks,
    stars,
    subscribers,
    total_issues,
    closed_issues,
    pull_requests_merged,
    pull_request_contributors,
  } = developerData;

  return (
    <Wrapper>
      {github.length > 0 && (
        <Card>
          <Title>
            <FaGithub /> Github
          </Title>
          <Content>
            <StatisticsWrapper>
              <StatBadge title="Stars" aria-label="Stars">
                <GoStar />
                {compactNumber(stars)}
              </StatBadge>
              <StatBadge title="Forks" aria-label="Forks">
                <GoRepoForked />
                {compactNumber(forks)}
              </StatBadge>
              <StatBadge title="Subscribers" aria-label="Subscribers">
                <GoRss />
                {compactNumber(subscribers)}
              </StatBadge>
              <StatBadge title="Total issues" aria-label="Total issues">
                <GoIssueOpened />
                {compactNumber(total_issues)}
              </StatBadge>
              <StatBadge title="Closed issues" aria-label="Closed issues">
                <GoIssueClosed />
                {compactNumber(closed_issues)}
              </StatBadge>
              <StatBadge
                title="Pull requests merged"
                aria-label="Pull requests merged"
              >
                <GoGitMerge />
                {compactNumber(pull_requests_merged)}
              </StatBadge>
              <StatBadge
                title="Pull request contributors"
                aria-label="Pull request contributors"
              >
                <GoPerson />
                {compactNumber(pull_request_contributors)}
              </StatBadge>
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
