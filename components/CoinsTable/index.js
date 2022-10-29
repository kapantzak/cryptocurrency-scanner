import PropTypes from "prop-types";
import styled from "styled-components";
import TableBody from "./TableBody";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr {
    td {
      font-size: 1.1rem;
      border-bottom: 1px solid ${(props) => props.theme.gray_300};
    }

    &:last-of-type {
      td {
        border-bottom: none;
      }
    }
  }
`;

const HeadCell = styled.th`
  font-size: 0.85rem;
  text-align: left;
  padding: 1rem 0;
  color: ${(props) => props.theme.black_light};
  border-bottom: 1px solid ${(props) => props.theme.gray_200};
`;

const HeadCellRight = styled(HeadCell)`
  text-align: right;
`;

const CoinsTable = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <HeadCell>NAME</HeadCell>
          <HeadCell>SYMBOL</HeadCell>
          <HeadCellRight>PRICE</HeadCellRight>
          <HeadCellRight>HIGH / LOW</HeadCellRight>
          <HeadCellRight>CHANGE (LAST 24H)</HeadCellRight>
          <HeadCellRight style={{ width: "40px" }} />
        </tr>
      </thead>
      <TableBody data={data} />
    </Table>
  );
};

CoinsTable.defaultProps = {
  data: [],
};

CoinsTable.propTypes = {
  data: PropTypes.array,
};

export default CoinsTable;
