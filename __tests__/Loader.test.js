import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'
import Loader from '../src/components/Loader';

describe('<Loader/>', () => {
    it('should render', () => {
        const wrapper = shallow(<Loader/>);

        expect(wrapper.hasClass('loader')).toBe(true);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});