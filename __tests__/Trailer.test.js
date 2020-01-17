import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'
import Trailer from '../src/components/Trailer';

describe('<Trailer/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Trailer/>);
    });

    it('should render', () => {
        wrapper.setProps({
            label: 'https://i.ytimg.com/vi/1ke3zayKKm8/maxresdefault.jpg',
            title: 'The Witcher 3: Wild Hunt'
        });
        const trailer = wrapper.find('li');

        expect(trailer.hasClass('trailer')).toBe(true);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('should have a title', () => {
        wrapper.setProps({
            title: 'The Witcher 3: Wild Hunt'
        });
        const trailer = wrapper.find('li');
        const title = trailer.find('.trailer-title');

        expect(title.text()).toBe('The Witcher 3: Wild Hunt');
    });
});