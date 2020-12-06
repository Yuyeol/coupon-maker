import { Component } from "react";
import styled from "styled-components";
import InputForm from "./InputForm";
import List from "./List";
import Pagination from "./Pagination";

const Container = styled.div`
  width: 600px;
`;

class App extends Component {
  id = 1;
  state = {
    //emails와 cNums는 배열체크 중복검사를 위한 용도로 쓰는 배열임.
    emails: ["jeanbro@naver.com"],
    cNums: ["425631452360"],
    items: [{ id: 0, email: "jeanbro@naver.com", cNum: "425631452360" }],
    // Pagination
    currentPage: 1,
    setCurrentPage: 1,
    postsPerPage: 5,
  };

  // 쿠폰번호 생성
  createCNum = () => {
    const random = Math.random();
    let randomNum = Math.floor(random * 1000000000000);
    // 자릿수 안맞는거 방지하기위해 자릿수 하나 더함
    if (randomNum < 100000000000) {
      randomNum += 100000000000;
    }
    const { cNums } = this.state;
    if (cNums.includes(randomNum)) {
    } else {
      // 중복이면 undefined 리턴, 중복아니면 값 리턴
      return randomNum;
    }
  };

  createTodo = (email) => {
    const { emails, cNums, items } = this.state;
    // 중복 아닌 번호 찾을때 까지 무한루프.
    while (this.createCNum() === undefined) {}
    // 중복아닌 쿠폰번호가 생성됐을때 randomNum으로 초기화한다.
    const randomNum = String(this.createCNum());
    // state에 값을 추가한다.
    if (items.length < 50) {
      this.setState({
        emails: emails.concat(email),
        cNums: cNums.concat(randomNum),
        items: items.concat({
          id: this.id++,
          email: email,
          cNum: randomNum,
        }),
      });
    } else {
      //그냥 내맘대로 50개 이상 뽑지 못하게 함. 뽑을수록 중복번호가 많아져서 속도가 느려지기때문.
      console.log("그만뽑아");
    }
  };

  // submit 했을때
  handleCreate = (e) => {
    e.preventDefault(e);
    const { value: id } = e.target[0],
      { value: ad } = e.target[1];
    if (id !== "") {
      // id(인풋)와 주소(콤보박스)를 합쳐서 email로 만든다.
      const email = id + ad;
      const { emails } = this.state;
      // 이메일 중복체크.
      if (emails.includes(email)) {
        console.log("이미 발급받은 계정입니다.");
      } else {
        this.createTodo(email);
      }
      // 인풋 비움.
      const input = document.querySelector(".js-input");
      input.value = "";
    }
  };

  // 페이지 넘버 클릭했을때 현재페이지 넘버를 알려줌
  paginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    console.log(this.state);
    const { handleCreate, paginate } = this;
    const { currentPage, postsPerPage, items } = this.state;
    // 페이지 계산공식
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // 전체 아이템 중 해당페이지의 아이템만 잘라줌
    // 최근작성이 위로 가도록 reverse()
    const currentPosts = items
      .reverse()
      .slice(indexOfFirstPost, indexOfLastPost);
    return (
      <Container>
        <InputForm handleCreate={handleCreate} />
        <List currentPosts={currentPosts} />
        <Pagination
          postsPerPage={postsPerPage}
          itemNum={items.length}
          paginate={paginate}
        />
      </Container>
    );
  }
}

export default App;
