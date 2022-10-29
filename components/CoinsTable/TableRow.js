import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import {
  FaLongArrowAltUp,
  FaLongArrowAltDown,
  FaExternalLinkAlt,
} from "react-icons/fa";
import styled from "styled-components";

const Cell = styled.td`
  padding: 1rem 0;
`;

const NameCell = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.8rem;

  a {
    text-decoration: underline;
  }
`;

const PriceCell = styled.div`
  display: flex;
  justify-content: end;
  font-weight: bold;
`;

const HighLowCell = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  align-items: end;
  row-gap: 0.4rem;

  .high {
    color: ${(props) => props.theme.success};
  }

  .low {
    color: ${(props) => props.theme.error};
  }
`;

const ChangeCell = styled.div`
  display: flex;
  justify-content: end;

  .high {
    color: ${(props) => props.theme.success};
  }

  .low {
    color: ${(props) => props.theme.error};
  }
`;

const DetailsCell = styled.div`
  display: flex;
  justify-content: end;

  a {
    color: ${(props) => props.theme.black};
  }
`;

const getCurrencyFormat = (amount) =>
  new Intl.NumberFormat("en", {
    style: "currency",
    currency: "usd",
  }).format(amount);

const TableRow = ({
  id,
  symbol,
  name,
  image,
  current_price,
  high_24h,
  low_24h,
  price_change_percentage_24h,
}) => {
  const change = Intl.NumberFormat("en", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price_change_percentage_24h);

  return (
    <tr>
      <Cell>
        <NameCell>
          <Image src={image} width={24} height={24} alt={`${name} image`} />
          <Link href={`/${id}/details`} title={`View details about ${name}`}>
            {name} ({symbol})
          </Link>
        </NameCell>
      </Cell>
      <Cell>
        <PriceCell>
          <div className="current">{getCurrencyFormat(current_price)}</div>
        </PriceCell>
      </Cell>
      <Cell>
        <HighLowCell>
          <div>
            <FaLongArrowAltUp className="high" /> {getCurrencyFormat(high_24h)}
          </div>
          <div>
            <FaLongArrowAltDown className="low" />
            {getCurrencyFormat(low_24h)}
          </div>
        </HighLowCell>
      </Cell>
      <Cell>
        <ChangeCell>
          {(price_change_percentage_24h > 0 && (
            <FaLongArrowAltUp className="high" />
          )) ||
            (price_change_percentage_24h < 0 && (
              <FaLongArrowAltDown className="low" />
            )) ||
            null}
          {change}
        </ChangeCell>
      </Cell>
      <Cell>
        <DetailsCell>
          <Link
            href={`/${id}/details`}
            title={`View details about ${name}`}
            aria-label={`View details about ${name}`}
          >
            <FaExternalLinkAlt />
          </Link>
        </DetailsCell>
      </Cell>
    </tr>
  );
};

TableRow.defaultProps = {
  data: [],
};

TableRow.propTypes = {
  data: PropTypes.array,
};

export default TableRow;
