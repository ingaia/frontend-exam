import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'
import Trailers from '../src/components/Trailers';
import TrailersMock from '../__mocks__/TrailersMock';

describe('<Trailers/>', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Trailers trailers={TrailersMock}/>);
    });

    it('should render', () => {
        expect(wrapper.hasClass('trailers')).toBe(true);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('should show the list of trailers with 5 items', () => {
        const list = wrapper.find('.trailers-list');
        
        expect(list.find('Trailer').length).toBe(TrailersMock.length);
    });

    it('should show button load more', () => {
        wrapper.setProps({
            nextPageToken: '1A2B3C',
            loading: false
        });
        
        expect(wrapper.exists('.load-more')).toBe(true);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('should show the Loader component', () => {
        wrapper.setProps({
            loading: true
        });
        
        expect(wrapper.exists('Loader')).toBe(true);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});