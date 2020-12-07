import Enzyme, { mount } from "enzyme";
import ReactSeventeenAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import Trailers from "./Trailers";

Enzyme.configure({ adapter: new ReactSeventeenAdapter() });
const mockCallBack = jest.fn();

describe("Trailers", () => {
  it("mount correctly", () => {
    const wrapper = mount(<Trailers />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("button")).toHaveLength(4);
    expect(wrapper.find("button").at(0).text()).toEqual("CLOSE");
    expect(wrapper.find("button").at(1).text()).toEqual("TRAILERS");
    expect(wrapper.find("button").at(2).text()).toEqual("LOGOUT");
    expect(wrapper.find("button").at(3).text()).toEqual("MENU");
  });
});
