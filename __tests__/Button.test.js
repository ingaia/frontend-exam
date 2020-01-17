import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'
import Button from '../src/components/Button';

describe('<Button/>', () => {
    it('should render', () => {
        const wrapper = shallow(<Button label="Label"/>);
        
        expect(wrapper.exists('[type="button"]')).toBe(true);
        expect(wrapper.hasClass('btn')).toBe(true);
        expect(wrapper.text()).toBe("LABEL");
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    }); 

    it('should render the button with type "submit"', () => {
        const wrapper = shallow(<Button type="submit"/>);
        
        expect(wrapper.exists('[type="submit"]')).toBe(true);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    }); 
});