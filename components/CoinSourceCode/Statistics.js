import PropTypes from "prop-types";
import {
  GoRepoForked,
  GoStar,
  GoIssueOpened,
  GoRss,
  GoIssueClosed,
  GoGitMerge,
  GoPerson,
} from "react-icons/go";
import { compactNumber } from "../../utils/helpers";
import styled from "styled-components";

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

const Statistics = ({ developerData }) => {
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
    <>
      {stars && (
        <StatBadge title="Stars" aria-label="Stars">
          <GoStar />
          {compactNumber(stars)}
        </StatBadge>
      )}
      {forks && (
        <StatBadge title="Forks" aria-label="Forks">
          <GoRepoForked />
          {compactNumber(forks)}
        </StatBadge>
      )}
      {subscribers && (
        <StatBadge title="Subscribers" aria-label="Subscribers">
          <GoRss />
          {compactNumber(subscribers)}
        </StatBadge>
      )}
      {total_issues && (
        <StatBadge title="Total issues" aria-label="Total issues">
          <GoIssueOpened />
          {compactNumber(total_issues)}
        </StatBadge>
      )}
      {closed_issues && (
        <StatBadge title="Closed issues" aria-label="Closed issues">
          <GoIssueClosed />
          {compactNumber(closed_issues)}
        </StatBadge>
      )}
      {pull_requests_merged && (
        <StatBadge
          title="Pull requests merged"
          aria-label="Pull requests merged"
        >
          <GoGitMerge />
          {compactNumber(pull_requests_merged)}
        </StatBadge>
      )}
      {pull_request_contributors && (
        <StatBadge
          title="Pull request contributors"
          aria-label="Pull request contributors"
        >
          <GoPerson />
          {compactNumber(pull_request_contributors)}
        </StatBadge>
      )}
    </>
  );
};

Statistics.defaultProps = {
  developerData: {},
};

Statistics.propTypes = {
  developerData: PropTypes.object,
};

export default Statistics;
