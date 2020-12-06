import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

const Container = styled.div`
  height: 135px;
`;

const MenuBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Menu = styled.div`
  &:first-child {
    width: 50px;
  }
  width: 250px;
`;

const ListBlock = styled.div``;

const List = ({ currentPosts }) => {
  return (
    <Container>
      <MenuBar>
        <Menu>인덱스</Menu>
        <Menu>이메일</Menu>
        <Menu>쿠폰번호</Menu>
      </MenuBar>
      <ListBlock>
        {/* items 객체 갯수만큼 ListItem 생성한다. */}
        {currentPosts.map((currentPost) => (
          <ListItem
            id={currentPost.id}
            email={currentPost.email}
            cNum={currentPost.cNum}
            key={currentPost.id}
          />
        ))}
      </ListBlock>
    </Container>
  );
};

export default List;
