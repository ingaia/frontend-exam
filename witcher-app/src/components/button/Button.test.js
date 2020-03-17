import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Button from './Button';
import styles from './Button.module.scss';

configure({adapter: new Adapter()});

describe('Component <Button />', () => {

    let wrapper = undefined;
    const onClickFn = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<Button />);
    });

    it('should reder a <Button />', () => {
        const button = wrapper.find('button');
        expect(button).toBeDefined();
        expect(button.hasClass(styles.Button)).toBe(true);
    });

    it('shoud have a label from props.label', () => {
        wrapper.setProps({ label: 'My Button' });
        const button = wrapper.find('button');
        expect(button.text()).toEqual('My Button');
    });

    it('should add a custom class from props.className', () => {
        wrapper.setProps({ className: 'my-class' });
        const button = wrapper.find('button');
        expect(button.hasClass('my-class')).toBe(true);
    });

    it('should trigger action received in props.onClick', () => {
        wrapper.setProps({ onClick: onClickFn });
        wrapper.simulate('click');
        expect(onClickFn).toHaveBeenCalled();
    });

});