import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Spinner from './Spinner';
import styles from './Spinner.module.scss';

configure({adapter: new Adapter()});

describe('Component <Spinner />', () => {

    let wrapper = undefined;

    beforeEach(() => {
        wrapper = mount(<Spinner />);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('should reder a <Spinner />', () => {
        const spinner = wrapper.find(`.${styles.SpinnerOverlay}`);
        expect(spinner).toBeDefined();
        expect(spinner.hasClass(styles.hide)).toBe(true);
    });

});