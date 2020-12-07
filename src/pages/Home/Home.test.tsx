import Enzyme, { mount } from "enzyme";
import ReactSeventeenAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import Home from "./Home";

Enzyme.configure({ adapter: new ReactSeventeenAdapter() });
const mockCallBack = jest.fn();

describe("Home", () => {
  it("mount correctly", () => {
    const wrapper = mount(<Home />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("input")).toHaveLength(2);
    expect(wrapper.find("button").text()).toEqual("LOGIN");
  });
});
