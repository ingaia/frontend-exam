import React from "react";
import Enzyme, { shallow } from "enzyme";
import ReactSeventeenAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import Button from "./Button";

Enzyme.configure({ adapter: new ReactSeventeenAdapter() });

describe("Button", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Button label="test" />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("button"));
  });
  it("renders show label", () => {
    const wrapper = shallow(<Button label="test" />);
    expect(wrapper.text()).toEqual("test");
  });
  it("test Button click", () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<Button onClick={mockCallBack} label="test" />);
    wrapper.simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
