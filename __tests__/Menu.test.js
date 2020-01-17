import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'
import Menu from '../src/components/Menu';

describe('<Menu/>', () => {
    it('should render', () => {
        const wrapper = shallow(<Menu/>);

        expect(wrapper.hasClass('menu')).toBe(true);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('should call the function logOut', () => {
        const logOut = jest.fn();
        const wrapper = shallow(<Menu logOut={logOut}/>);

        wrapper.find('.btn-default').simulate('click');

        expect(logOut).toHaveBeenCalled();
    });
});