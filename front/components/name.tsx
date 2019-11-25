import styled from 'styled-components';

interface IProps {
  user_id: string
  name: string
}


const Name = (props: IProps) => {
  return (
    <Wrapper>
      <a href={"https://twitter.com/"+props.user_id} target="_blank">
        <span id="name">{props.name}</span>
      </a>
      <span id="user_id">@{props.user_id}</span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 2px;
  
  a {
    cursor: pointer;
    text-decoration: none;
    color: #000;
  }

  #name {
    margin: 4px;
  } 

  #user_id {
    margin: 4px;
  }
`;


export default Name;

