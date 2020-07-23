import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Logo from './Logo';
import styles from './Logo.module.scss';

configure({adapter: new Adapter()});

describe('Component <Logo />', () => {

    let wrapper = undefined;

    beforeEach(() => {
        const props = {
            image: '/assets/logo.png'
        }
        wrapper = shallow(<Logo { ...props }/>);
    });

    it('should reder a <Logo />', () => {
        const logo = wrapper.find('img');
        expect(logo).toBeDefined();
        expect(logo.hasClass(styles.Logo)).toBe(true);
        expect(logo.prop('src')).toBe('/assets/logo.png');
    });

    it('should add a custom class from props.className', () => {
        wrapper.setProps({ className: 'my-class' });
        const logo = wrapper.find('img');
        expect(logo.hasClass('my-class')).toBe(true);
    });

    it('should add a custom alt from props.alt', () => {
        wrapper.setProps({ alt: 'The logo' });
        const logo = wrapper.find('img');
        expect(logo.prop('alt')).toBe('The logo');
    });    

});