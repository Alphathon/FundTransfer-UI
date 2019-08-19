import React from 'react';
import { shallow ,mount } from 'enzyme';
import Login from '../components/Register/Register';


describe('When Controlled component is given', () => {
    let wrapper;
        beforeEach(() => {
            wrapper = shallow(<Register/>);
  });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should render table', () => {
        expect(wrapper.find('form')).toHaveLength(1);
    });

    it('should render student id field', ()=> {
        expect(wrapper.find('#firstName')).toHaveLength(1);
    });

    it('should render password field', ()=> {
        expect(wrapper.find('#lastName')).toHaveLength(1);
    });

    it('should render button field', ()=> {
        expect(wrapper.find('#mobileNumber')).toHaveLength(1);
    });
    it('should render button field', ()=> {
        expect(wrapper.find('#password')).toHaveLength(1);
    });
    it('should render button field', ()=> {
        expect(wrapper.find('#confirmPassword')).toHaveLength(1);
    });
    it('should render button field', ()=> {
        expect(wrapper.find('#btn2')).toHaveLength(1);
    });

    describe('When onChange event is not triggered on student Id field', () => {
        it('should have empty state', () => {
          expect(wrapper.state().registerData.firstName).toEqual('');
        });
      });
      describe('When onChange event is not triggered on student Id field', () => {
        it('should have empty state', () => {
          expect(wrapper.state().registerData.lastName).toEqual('');
        });
      });
      describe('When onChange event is not triggered on student Id field', () => {
        it('should have empty state', () => {
          expect(wrapper.state().registerData.mobileNumber).toEqual('');
        });
      });
     
      describe('When onChange event is not triggered on student Id field', () => {
        it('should have empty state', () => {
          expect(wrapper.state().registerData.password).toEqual('');
        });
      });
      describe('When onChange event is not triggered on student Id field', () => {
        it('should have empty state', () => {
          expect(wrapper.state().registerData.confirmPassword).toEqual('');
        });
      });
      describe('when onChange event is not triggered on password field',()=>{
          it('should have empty state',()=>{
              expect(wrapper.state().registerData.password).toEqual('');
          });
      });

      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const firstName = wrapper.find('#firstName');
          firstName.simulate('change', { target: { name:'firstName',value: 'divya' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().registerData.firstName).toEqual('divya');
        })
      });
      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const lastName = wrapper.find('#lastName');
          lastName.simulate('change', { target: { name:'lastName',value: 'emuri' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().registerData.firstName).toEqual('emuri');
        })
      });
      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const mobileNumber = wrapper.find('#mobileNumber');
          mobileNumber.simulate('change', { target: { name:'mobileNumber',value: '9581147205' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().registerData.mobileNumber).toEqual('9581147205');
        })
      });
      describe('When onChange event triggered on password field', () => {
        beforeEach(() => {
          const password = wrapper.find('#password');
          password.simulate('change', { target: {name:'password', value: 'divya@123' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().registerData.password).toEqual('divya@123');
        })
      });
      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const confirmPassword = wrapper.find('#confirmPassword');
          confirmPassword.simulate('change', { target: { name:'confirmPassword',value: 'divya@123' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().registerData.confirmPassword).toEqual('divya@123');
        })
      });

      describe('When submit button is clicked', () => {
        beforeEach(() => {
          wrapper.find('#firstName').simulate('change', { target: {name:'firstName', value: 'divya' } });
          wrapper.find('#lastName').simulate('change', { target: {name:'lastName', value: 'emuri' } });
          wrapper.find('#mobileNumber').simulate('change', { target: {name:'moibleNumber', value: '9581147205' } });
          wrapper.find('#password').simulate('change', { target: { name:'password',value: 'divya@123' } });
          wrapper.find('#confirmPassword').simulate('change', { target: { name:'confirmPassword',value: 'divya@123' } });
    
          const fakeEvent = { preventDefault: () => console.log('preventDefault') };
          const submit = wrapper.find('#btn2');
          submit.simulate('click', fakeEvent);
        });
    
        it('should have excepted userName', () => {
          expect(wrapper.state().registerData.firstName).toEqual('divya');
        });
        it('should have excepted userName', () => {
            expect(wrapper.state().registerData.lastName).toEqual('emuri');
          });
          it('should have excepted userName', () => {
            expect(wrapper.state().registerData.mobileNumber).toEqual('9581147205');
          });
          it('should have excepted userName', () => {
            expect(wrapper.state().registerData.password).toEqual('divya@123');
          });  
        it('should have excepted Password', () => {
          expect(wrapper.state().registerData.confirmPassword).toEqual('divya@123');
        });
      });
    describe('When first button is cliked', () => {
        it('should have called handle submit function', () => {
          const comp = shallow(<Register />);
          const spy = jest.spyOn(comp.instance(), 'handleRegister');
          comp.instance().forceUpdate();
          comp.find('#btn2').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
     
});