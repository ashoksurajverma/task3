import * as React from "react";
import { shallow, ShallowWrapper, configure } from "enzyme";
// @ts-ignore
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
import App from "../App";
import QuestionList from "../QuestionList";

describe("Render App component", () => {
  let wrapper: ShallowWrapper<undefined, undefined>;
  beforeEach(() => (wrapper = shallow(<App />)));

  it("should render without error", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have one children", () => {
    expect(wrapper.children().find(QuestionList).length).toBe(1);
  });
});
