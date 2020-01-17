import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'
import SideMenu from '../src/components/SideMenu';

describe('<SideMenu/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<SideMenu />);
    });

    it('should render', () => {
        expect(wrapper.hasClass('side-menu')).toBe(true);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('should call the function logOut', () => {
        const logOut = jest.fn();
        wrapper.setProps({ logOut })
        wrapper.find('.btn-default').simulate('click');
        expect(logOut).toHaveBeenCalled();
    });
});