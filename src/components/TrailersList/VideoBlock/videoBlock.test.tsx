import Enzyme, { mount } from "enzyme";
import ReactSeventeenAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import VideoBlock from "./VideoBlock";

Enzyme.configure({ adapter: new ReactSeventeenAdapter() });
const mockCallBack = jest.fn();

const infoVideo = {
  key: 0,
  idVideo: "543535",
  tooglePopup: mockCallBack,
  thumbnail: "witcher",
  title: "the witcher",
};
describe("VideoBlock", () => {
  it("mount correctly", () => {
    const wrapper = mount(
      <VideoBlock
        key={infoVideo.key}
        idVideo={infoVideo.idVideo}
        tooglePopup={infoVideo.tooglePopup}
        thumbnail={infoVideo.thumbnail}
        title={infoVideo.title}
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("div")).toHaveLength(2);
    expect(wrapper.find("span").text()).toEqual("the witcher");
  });
});
