import styled from "styled-components"

import Background from "../../assets/background-login.svg"

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;

  height: 100vh;
`

export const Image = styled.img`
  margin-top: 30px;
`

export const ContainerItens = styled.div`
  height: 100vh;
  width: 414px;

  border-radius: 61px 61px 0px 0px;
  background: linear-gradient(
    157deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );

  display: flex;
  flex-direction: column;
  padding: 50px 36px;
`

export const H1 = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-bottom: 81px;
`

export const InputLabel = styled.p`
  padding-left: 25px;

  color: #eee;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;
`

export const Input = styled.input`
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  outline: none;
  border: none;

  height: 48px;
  width: 342px;

  margin-bottom: 34px;
  padding-left: 25px;

  color: #fff;

  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const Button = styled.button`
  width: 342px;
  height: 74px;

  margin-top: 130px;

  border-radius: 14px;
  border: none;
  background: var(--templates-5-color-1, rgba(0, 0, 0, 0.8));

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
