import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import InputText from './InputText';
import styles from './InputText.module.scss';

configure({adapter: new Adapter()});

describe('Component <InputText />', () => {

    let wrapper = undefined;
    const onChangeFn = jest.fn();

    beforeEach(() => {
        const props = {
            id: 'myInput',
            value: '',
            onChange: onChangeFn
        }
        wrapper = shallow(<InputText { ...props }/>);
    });

    it('should reder a <InputText />', () => {
        const input = wrapper.find('input');
        expect(input).toBeDefined();
        expect(input.hasClass(styles.InputText)).toBe(true);
        expect(input.prop('type')).toBe('text');
    });

    it('should add a custom type from props.type', () => {
        wrapper.setProps({ type: 'password' });
        const input = wrapper.find('input');
        expect(input).toBeDefined();
        expect(input.prop('type')).toBe('password');
    });    
    
    it('should add a custom class from props.className', () => {
        wrapper.setProps({ className: 'my-class' });
        const input = wrapper.find('input');
        expect(input.hasClass('my-class')).toBe(true);
    });    

    it('should add a custom placeholder from props.placeholder', () => {
        wrapper.setProps({ placeholder: 'Type you user' });
        const input = wrapper.find('input');
        expect(input.prop('placeholder')).toBe('Type you user');
    });    

    it('should trigger action received in props.onClick', () => {
        wrapper.simulate('change');
        expect(onChangeFn).toHaveBeenCalled();
    });

});