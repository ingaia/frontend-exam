import Enzyme, { shallow, mount } from "enzyme";
import Input from "./Input";
import ReactSeventeenAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new ReactSeventeenAdapter() });

describe("Input", () => {
  const mockCallBack = jest.fn();
  it("renders correctly", () => {
    const wrapper = shallow(
      <Input
        name="email"
        type="text"
        value=""
        onChange={mockCallBack}
        label="test"
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("input"));
    expect(wrapper.find("label"));
  });
  it("renders correct input value", () => {
    const wrapper = mount(
      <Input
        name="email"
        type="text"
        value="test"
        onChange={mockCallBack}
        label="test"
      />
    );
    wrapper.find("input").simulate("change", { target: { value: "test" } });
    expect(wrapper.find("input").instance().value).toBe("test");
  });
  it("renders correct label value", () => {
    const wrapper = mount(
      <Input
        name="email"
        type="text"
        value="test"
        onChange={mockCallBack}
        label="label"
      />
    );
    expect(wrapper.find("label").text()).toEqual("label");
  });
});
