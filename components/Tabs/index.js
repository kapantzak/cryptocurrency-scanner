import PropTypes from "prop-types";
import React, { useState } from "react";
import ButtonDefault from "../Button/ButtonDefault";
import styled from "styled-components";
import classNames from "classnames";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .tabs {
    display: flex;
    column-gap: 0.5rem;
    padding: 1rem 0;
    border-top: 1px solid ${(props) => props.theme.gray_300};
    border-bottom: 1px solid ${(props) => props.theme.gray_300};
  }

  .content {
    padding: 1.5rem 0;
  }

  .section {
    display: none;

    &.active {
      display: block;
    }
  }
`;

const TabButton = styled(ButtonDefault)`
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme.gray_200};
  padding: 0.5rem 0.6rem;
  font-size: 0.95rem;
  color: ${(props) => props.theme.black_light};
  cursor: pointer;

  &.active,
  &:hover {
    background-color: ${(props) => props.theme.gray_400};
  }
`;

const Tabs = ({ tabs, initiallyActiveIndex, children }) => {
  const [activeIndex, setActiveIndex] = useState(initiallyActiveIndex);

  return (
    <Wrapper>
      <div className="tabs">
        {tabs.map(({ label }, index) => (
          <TabButton
            className={index === activeIndex ? "active" : ""}
            onClick={() => setActiveIndex(index)}
          >
            {label}
          </TabButton>
        ))}
      </div>
      <div className="content">
        {React.Children.map(children, (child, index) => {
          const isActive = index === activeIndex;
          const contentStyles = classNames("section grow", {
            active: isActive,
          });

          return React.cloneElement(child, {
            className: contentStyles,
          });
        })}
      </div>
    </Wrapper>
  );
};

Tabs.defaultProps = {
  tabs: [],
  initiallyActiveIndex: 0,
};

Tabs.propTypes = {
  tabs: PropTypes.array,
  initiallyActiveIndex: PropTypes.number,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Tabs;
