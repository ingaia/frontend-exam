import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'
import InputText from '../src/components/InputText';

describe('<InputText/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<InputText />);
    });

    it('should render', () => {
        wrapper.setProps({
            label: 'Email',
            name: 'email'
        });

        const input = wrapper.children('input');
        const label = wrapper.children('label');

        expect(label.text()).toBe('Email');
        expect(input.exists('[htmlFor="email"]'))
        expect(input.exists('[type="text"]')).toBe(true);
        expect(input.exists('[name="email"]')).toBe(true);
        expect(wrapper.hasClass('input-group')).toBe(true);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('should the input a type email', () => {
        wrapper.setProps({type: 'email'});
        const input = wrapper.children('input');
        expect(input.exists('[type="email"]')).toBe(true);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});