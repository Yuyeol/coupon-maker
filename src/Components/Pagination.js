import React from "react";
import styled from "styled-components";

const PageBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const Page = styled.div`
  border: 1px solid black;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Pagination = ({ postsPerPage, itemNum, paginate }) => {
  const pageNums = [];

  for (let i = 1; i <= Math.ceil(itemNum / postsPerPage); i++) {
    pageNums.push(i);
  }
  return (
    <PageBlock>
      {pageNums.map((pageNum) => (
        <Page key={pageNum} onClick={() => paginate(pageNum)}>
          {pageNum}
        </Page>
      ))}
    </PageBlock>
  );
};

export default Pagination;
