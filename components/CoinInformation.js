import PropTypes from "prop-types";
import Card from "./Card";
import styled from "styled-components";

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${(props) => props.theme.gray_700};
`;

const Title = styled.h2`
  margin-top: 0;
  color: ${({ theme }) => theme.black_light};
`;

const CoinInformation = ({ name, description }) => {
  return (
    <Card>
      <Title>About {name}</Title>
      <Content dangerouslySetInnerHTML={{ __html: description }} />
    </Card>
  );
};

CoinInformation.defaultProps = {
  name: "",
  description: "",
};

CoinInformation.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

export default CoinInformation;
