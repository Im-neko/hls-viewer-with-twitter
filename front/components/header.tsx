import styled from 'styled-components';


const Header = () => {
  return (
    <Wrapper>
      hls-viewer-with-twitter
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  font-size: 42px;
  color: #FFF;
  background-color: #000;
  padding-bottom: 58px;
  z-index: 1000;
`;

export default Header;
