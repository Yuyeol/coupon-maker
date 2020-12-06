import React from "react";
import styled from "styled-components";

const ItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  &:first-child {
    width: 50px;
  }
  width: 250px;
`;

const ListItem = ({ id, email, cNum }) => (
  <ItemBlock>
    <Item>{id + 1}</Item>
    <Item>{email}</Item>
    {/* 정규식으로 하이픈삽입했음 */}
    <Item>{cNum.replace(/(\d{4})(\d{4})(\d{2})/, "$1-$2-$3")}</Item>
  </ItemBlock>
);

export default ListItem;
