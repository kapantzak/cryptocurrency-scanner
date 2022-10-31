import PropTypes from "prop-types";
import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Dropdown } from "../../styles/globalStyles";

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

const PaginationHandlers = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.gray_500};
  background-color: ${(props) => props.theme.white};
`;

const perPageOptions = (process.env.NEXT_PUBLIC_PAGINATION_OPTIONS || "")
  .split(",")
  .map((num) => Number(num));

const Pagination = ({
  page,
  perPage,
  onPerPageChange,
  onNextClick,
  onPreviousClick,
}) => {
  return (
    <PaginationWrapper data-testid="pagination">
      <PaginationHandlers>
        Items per page
        <Dropdown
          value={perPage}
          onChange={onPerPageChange}
          aria-label="Change page size"
        >
          {perPageOptions.map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </Dropdown>
      </PaginationHandlers>
      <PaginationHandlers>
        <Button
          type="button"
          disabled={page === 1}
          onClick={onPreviousClick}
          title="Previous page"
          aria-label="Previous page"
        >
          <FaArrowLeft />
        </Button>
        <div>Page {page}</div>
        <Button
          type="button"
          onClick={onNextClick}
          title="Next page"
          aria-label="Next page"
        >
          <FaArrowRight />
        </Button>
      </PaginationHandlers>
    </PaginationWrapper>
  );
};

Pagination.defaultProps = {
  page: 1,
  onPerPageChange: () => {},
  onNextClick: () => {},
  onPreviousClick: () => {},
};

Pagination.propTypes = {
  page: PropTypes.number,
  perPage: PropTypes.number.isRequired,
  onPerPageChange: PropTypes.func,
  onNextClick: PropTypes.func,
  onPreviousClick: PropTypes.func,
};

export default Pagination;
