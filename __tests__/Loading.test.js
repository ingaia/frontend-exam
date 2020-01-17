import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'
import Loading from '../src/components/Loading';

describe('<Loading/>', () => {
    it('should render', () => {
        const wrapper = shallow(<Loading/>);

        expect(wrapper.hasClass('loading-page')).toBe(true);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});