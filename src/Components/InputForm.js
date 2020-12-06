import React from "react";
import styled from "styled-components";

const Form = styled.form``;

const Input = styled.input`
  ime-mode: disabled;
`;

const Span = styled.span``;

const Submit = styled.input``;

const Select = styled.select``;

const InputForm = ({ handleCreate }) => (
  <Form onSubmit={handleCreate}>
    <Input type="text" className="js-input" />
    <Span>@</Span>
    <Select name="job">
      <option value="@naver.com">naver.com</option>
      <option value="@hanmail.net">hanmail.net</option>
      <option value="@daum.net">daum.net</option>
      <option value="@nate.com">nate.com</option>
      <option value="@gmail.com">gmail.com</option>
      <option value="@hotmail.com">hotmail.com</option>
    </Select>
    <Submit type="submit" value="생성" />
  </Form>
);

export default InputForm;
