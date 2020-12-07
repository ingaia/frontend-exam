import Enzyme, { mount } from "enzyme";
import ReactSeventeenAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import VideoPopup from "./VideoPopup";

Enzyme.configure({ adapter: new ReactSeventeenAdapter() });
const mockCallBack = jest.fn();
const infoVideo = {
  key: 0,
  idVideo: "543535",
  thumbnail: "witcher",
  tooglePopup: mockCallBack,
};
describe("VideoPopup", () => {
  it("mount correctly", () => {
    const wrapper = mount(
      <VideoPopup
        key={infoVideo.key}
        popup={true}
        idVideo={infoVideo.idVideo}
        tooglePopup={infoVideo.tooglePopup}
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("div")).toHaveLength(4);
    expect(wrapper.find("iframe")).toHaveLength(1);
    expect(wrapper.find("button").text()).toEqual("CLOSE");
  });
});
