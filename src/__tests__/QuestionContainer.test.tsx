import React from "react";
import { shallow, ShallowWrapper, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import QuestionList from "../QuestionList";
import QuestionContainer from "../QuestionContainer";
import Confirmation from "../Confirmation";

configure({ adapter: new Adapter() });

describe("Render QuestionContainer component", () => {
  let wrapper: ShallowWrapper<undefined, undefined>;
  const question =
    "What is the average the airspeed velocity of a (European) unladen swallow?";
  const answer = "11 meters per second";

  beforeEach(() => {
    wrapper = shallow(
      <QuestionContainer question={question} answer={answer} />
    );
  });

  it("should render without error", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should render container", () => {
    expect(wrapper.find(".container").length).toBe(1);
  });

  it("Should not render confirmation component initially", () => {
    expect(wrapper.children().find(Confirmation).length).toBe(0);
  });

  it("Should render confirmation component", () => {
    const showAnsBtn = wrapper.find(".show-answer");
    showAnsBtn.simulate("click");
    expect(wrapper.children().find(Confirmation).length).toBe(1);
  });

  it("get btns of confirmation component", () => {
    const showAnsBtn = wrapper.find(".show-answer");
    showAnsBtn.simulate("click");
    const confirmBtn = wrapper.find(".btn-primary");
    expect(confirmBtn.length).toBe(1);
  });
});
