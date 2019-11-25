import styled from 'styled-components';

interface IProps {
  icon_url: string
  user_id: string
}


const Icon = (props: IProps) => {
  return (
    <Wrapper>
      <a href={"https://twitter.com/"+props.user_id} target="_blank"><img src={props.icon_url} /></a>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  display: inline-block;
  flex-direction: column;
  margin-left: 5px;
  margin-right: 5px;

  img {
    width: 49px;
    height: auto;
    border-bottom-left-radius: 9999px;
    border-bottom-right-radius: 9999px;
    border-top-left-radius: 9999px;
    border-top-right-radius: 9999px;
  }
`;


export default Icon;
