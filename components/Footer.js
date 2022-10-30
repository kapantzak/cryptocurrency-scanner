import styled from "styled-components";

const FooterElem = styled.footer`
  display: flex;
  height: 200px;
  column-gap: 0.2rem;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.gray_800};
  color: ${({ theme }) => theme.white};

  a {
    color: ${({ theme }) => theme.white};
  }
`;

const Footer = () => {
  return (
    <FooterElem>
      Developed by{" "}
      <a
        href="https://www.linkedin.com/in/johnkapantzakis/"
        target="_blank"
        rel="noopener noreferrer"
      >
        John Kapantzakis
      </a>
    </FooterElem>
  );
};

export default Footer;
