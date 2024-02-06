import styled from 'styled-components';

export const ContactListStyled = styled.ul`
  text-align: start;
  margin: 0 auto;
`;

export const ContactListItemsStyled = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 10px;

  /* @media screen and (max-width: 750px) {
    max-width: 100px;
  } */

  @media screen and (min-width: 750px) {
    font-size: 15px;
  }
`;

export const DeleteBtnStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: 0;
  height: 20px;
  padding: 0px 6px;
  cursor: pointer;

  border-radius: 6px;
  color: #ffffff;
  background: linear-gradient(rgb(255, 13, 0) 0%, rgba(0, 0, 0, 0.86) 100%);
  box-shadow: 0px 7px 27px -2px rgba(253, 88, 140, 0.35);
  border: inherit;

  font-family: 'Roboto';
  font-size: 14px;

  &:hover,
  &:focus {
    border: solid 1px #ff0d00;
    color: #ff0d00;
    background: #ffffff;
    filter: drop-shadow(10px 15px 25px rgba(232, 183, 183, 0.45));
  }
`;
