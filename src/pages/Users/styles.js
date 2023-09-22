import styled from "styled-components"

import Background from "../../assets/backgroung-sign-up.svg"

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;

  height: 100%;
  min-height: 100vh;
`

export const Image = styled.img`
  margin-top: 83px;
  margin-bottom: 30px;
`

export const Button = styled.button`
  width: 342px;
  height: 74px;

  margin-top: 120px;

  border-radius: 14px;
  border: 1px solid #fff;
  background: transparent;

  color: #fff;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  img {
    transform: rotateY(180deg);
  }
`

export const User = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;

  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  border: none;
  outline: none;

  height: 48px;
  width: 342px;

  margin-top: 20px;

  p {
    color: #fff;

    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  button {
    cursor: pointer;

    border: none;
    background: none;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }
  }
`
