import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, is_float, children, margin, width, padding } = props;

  if(is_float){
    return (
      <>
        <FloatButton onClick={_onClick}>{text? text:children}</FloatButton>
      </>
    );
  }
  
  const styles = {
    margin: margin,
    width: width,
    padding: padding,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>{text? text: children}</ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: '100%',
  padding: "12px 0px"
};

const ElButton = styled.button`
  width: 100%;
  background-color: #212121;
  color: #ffffff;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
  ${(props) => (props.margin? `margin: ${props.margin};` : '')};
`;

const FloatButton = styled.button`
  // width: 50px;
  // height: 50px;
  background-color: #212121;
  color: #ffffff;
  padding: 16px;
  box-sizing: border-box;
  font-size: 13.3333px;
  font-weight: 500;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  border:none;
`

export default Button;
