import React from "react";
import { ShallowWrapper, shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Confirmation from "../Confirmation";

configure({ adapter: new Adapter() });

describe("Render Confirmation component", () => {
  let wrapper: ShallowWrapper<undefined, undefined>;

  beforeEach(() => {
    wrapper = shallow(
      <Confirmation
        accept={() => {}}
        decline={() => {}}
        message="Reveal the answer?"
        type="message"
        acceptLabel="Yes Please"
        declineLabel="Not Yet"
      />
    );
  });

  it("should render without error", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render btn container", () => {
    const btnContainer = wrapper.find(".btn-container").length;
    expect(btnContainer).toBe(1);
    expect(wrapper.prop("className")).toEqual("alert alert-info");
  });

  it("click on confirm btn", () => {
    const confirmBtn = wrapper.find(".btn-primary");
    confirmBtn.simulate("click");
    const btnContainer = wrapper.find(".btn-container").length;
    expect(btnContainer).toBe(0);
  });
});
