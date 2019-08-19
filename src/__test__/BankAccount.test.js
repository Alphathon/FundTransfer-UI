import React from 'react';
import { shallow} from 'enzyme';
import BankAccount from '../components/BankAccount/BankAccount';


describe('When Controlled component is given', () => {
    let wrapper;
        beforeEach(() => {
            wrapper = shallow(<BankAccount/>);
  });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should render button field', ()=> {
        expect(wrapper.find('#btn16')).toHaveLength(1);
    });

    it('should render button field', ()=> {
        expect(wrapper.find('#btn17')).toHaveLength(1);
    });
    it('should render button field', ()=> {
        expect(wrapper.find('#btn18')).toHaveLength(1);
    });
    it('should render button field', ()=> {
        expect(wrapper.find('#btn18')).toHaveLength(1);
    });

    describe('When first button is cliked', () => {
        it('should have called handle submit function', () => {
          const comp = shallow(<BankAccount />);
          const spy = jest.spyOn(comp.instance(), 'fundTransfer');
          comp.instance().forceUpdate();
          comp.find('#btn16').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
      describe('When first button is cliked', () => {
        it('should have called handle submit function', () => {
          const comp = shallow(<BankAccount />);
          const spy = jest.spyOn(comp.instance(), 'addPayee');
          comp.instance().forceUpdate();
          comp.find('#btn17').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
      describe('When first button is cliked', () => {
        it('should have called handle submit function', () => {
          const comp = shallow(<BankAccount />);
          const spy = jest.spyOn(comp.instance(), 'listOfTransaction');
          comp.instance().forceUpdate();
          comp.find('#btn18').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
      describe('When first button is cliked', () => {
        it('should have called handle submit function', () => {
          const comp = shallow(<BankAccount />);
          const spy = jest.spyOn(comp.instance(), 'accountSummary');
          comp.instance().forceUpdate();
          comp.find('#btn19').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
     
});