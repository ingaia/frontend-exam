import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'
import TrailersPage from '../src/pages/TrailersPage';

describe('<TrailersPage/>', () => {
    let wrapper;

    beforeEach(() => {

        wrapper = shallow(<TrailersPage/>);
    });

    it('should render', () => {

        expect(wrapper.hasClass('trailers-page')).toBe(true);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});