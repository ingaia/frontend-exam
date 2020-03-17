import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Login from './Login';
import styles from './Login.module.scss';

configure({adapter: new Adapter()});

describe('Component <Login />', () => {

    let wrapper = undefined;   

    beforeEach(() => {
        wrapper = mount(
            <MemoryRouter>
                <Login />
            </MemoryRouter>);
    });

    it('should reder a <Login />', () => {
        const login = wrapper.find(`div.${styles.login}`);
        expect(login).toBeDefined();        
        expect(login.find('button').html().includes('disabled')).toBe(true);
    });

    fit('should disable login button when email not filled', () => {
        const login = wrapper.find(`div.${styles.login}`);
        
        const loginButton = login.find('button');
        expect(loginButton.html().includes('disabled')).toBe(true);

        wrapper.find("input").at(0).simulate("change", { target: { id: 'email', value: "" }});
        wrapper.update();
        wrapper.find("input").at(1).simulate("change", { target: { id: 'password', value: "123456" }});
        wrapper.update();
        
        expect(loginButton.html().includes('disabled')).toBe(true);
    });    

    fit('should disable login button when password not filled', () => {
        const login = wrapper.find(`div.${styles.login}`);
        
        const loginButton = login.find('button');
        expect(loginButton.html().includes('disabled')).toBe(true);

        wrapper.find("input").at(0).simulate("change", { target: { id: 'email', value: "user@email.com" }});
        wrapper.update();
        wrapper.find("input").at(1).simulate("change", { target: { id: 'password', value: "" }});
        wrapper.update();
        
        expect(loginButton.html().includes('disabled')).toBe(true);
    });    

    fit('should enable login button when credentials are filled', () => {
        const login = wrapper.find(`div.${styles.login}`);
        
        const loginButton = login.find('button');
        expect(loginButton.html().includes('disabled')).toBe(true);

        wrapper.find("input").at(0).simulate("change", { target: { id: 'email', value: "user@email.com" }});
        wrapper.update();
        wrapper.find("input").at(1).simulate("change", { target: { id: 'password', value: "123456" }});
        wrapper.update();
        
        expect(loginButton.html().includes('disabled')).toBe(false);
    });

});