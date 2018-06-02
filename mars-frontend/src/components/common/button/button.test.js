import React from 'react'
import app from './index'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter : new Adapter()})
describe('Button Compnent',()=>{
    
    it('is button componant in the view', ()=>{
        const wrapper = shallow(<app/>)
     //expect(wrapper.find('#but').exists()).toEqual(true);
     expect(wrapper.find('.primary-button').length).toEqual(1);

    })

})