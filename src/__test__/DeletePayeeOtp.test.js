import React from 'react';
import { shallow} from 'enzyme';
import DeletePayeeOtp from '../components/ListPayee/DeletePayeeOtp';


describe('When Controlled component is given', () => {
    let wrapper;
        beforeEach(() => {
            wrapper = shallow(<DeletePayeeOtp/>);
  });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should render table', () => {
        expect(wrapper.find('table')).toHaveLength(1);
    });
   
    it('should render h2 tag',()=>{
        expect(wrapper.find('h4')).toHaveLength(1);
    });

    it('should render student id field', ()=> {
        expect(wrapper.find('#otp')).toHaveLength(1);
    });

    it('should render button field', ()=> {
        expect(wrapper.find('#btn16')).toHaveLength(1);
    });
    

    describe('When onChange event is not triggered on student Id field', () => {
        it('should have empty state', () => {
          expect(wrapper.state().otpData.otp).toEqual('');
        });
      });
     
      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const otp = wrapper.find('#otp');
          otp.simulate('change', { target: { name:'otp',value: '123456' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().otpData.otp).toEqual('123456');
        })
      });

      describe('When submit button is clicked', () => {
        beforeEach(() => {
          wrapper.find('#otp').simulate('change', { target: {name:'otp', value: '123456' } });
          const fakeEvent = { preventDefault: () => console.log('preventDefault') };
          const submit = wrapper.find('#btn13');
          submit.simulate('click', fakeEvent);
        });
    
        it('should have excepted userName', () => {
          expect(wrapper.state().otpData.otp).toEqual('123456');
        });
    });
    describe('When first button is cliked', () => {
        it('should have called handle submit function', () => {
          const comp = shallow(<DeletePayeeOtp />);
          const spy = jest.spyOn(comp.instance(), 'validateOtp');
          comp.instance().forceUpdate();
          comp.find('#btn16').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
     
});