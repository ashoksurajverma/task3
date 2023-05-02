import React from "react";
import { shallow, ShallowWrapper, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import QuestionList from "../QuestionList";

configure({ adapter: new Adapter() });

describe("Render QuestionList component", () => {
  let wrapper: ShallowWrapper<undefined, undefined>;
  const questionMockData = [
    {
      question:
        "What is the average the airspeed velocity of a (European) unladen swallow?",
      answer: "11 meters per second",
    },
  ];

  beforeEach(() => {
    wrapper = shallow(<QuestionList questions={questionMockData} />);
  });

  it("should render without error", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
