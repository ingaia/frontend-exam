import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'
import Login from '../src/pages/Login';
import history from '../__mocks__/HistoryMock'

describe('<Login/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Login history={history}/>);
    });

    it('should render', () => {
        expect(wrapper.hasClass('login')).toBe(true);
        expect(wrapper.find('.box-login').length).toBe(1);
        expect(wrapper.find('.logo').length).toBe(1);
        expect(wrapper.find('.form-login').length).toBe(1);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('should call submit()', () => {
        const form = wrapper.find('form')
        jest.spyOn(history, 'push');
        
        form.simulate('submit', {
            preventDefault: () => {}
        });
        
        expect(history.push).toHaveBeenCalled();
    });
});