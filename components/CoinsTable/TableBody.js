import PropTypes from "prop-types";
import TableRow from "./TableRow";

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map((coin) => (
        <TableRow key={coin.id} {...coin} />
      ))}
    </tbody>
  );
};

TableBody.defaultProps = {
  data: [],
};

TableBody.propTypes = {
  data: PropTypes.array,
};

export default TableBody;
