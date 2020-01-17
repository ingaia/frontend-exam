import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'
import VideoModal from '../src/components/VideoModal';

describe('<VideoModal/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<VideoModal/>);
    });

    it('should render', () => {
        expect(wrapper.hasClass('video-modal')).toBe(true);
        expect(wrapper.find('iframe').length).toBe(1);
        expect(wrapper.find('Button').length).toBe(1);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});