import React from 'react';
import { shallow} from 'enzyme';
import FundTransfer from '../components/FundTransfer/FundTransfer';


describe('When Controlled component is given', () => {
    let wrapper;
        beforeEach(() => {
            wrapper = shallow(<FundTransfer/>);
  });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should render table', () => {
        expect(wrapper.find('form')).toHaveLength(1);
    });
   
    it('should render h2 tag',()=>{
        expect(wrapper.find('h2')).toHaveLength(1);
    });

    it('should render student id field', ()=> {
        expect(wrapper.find('#toAccountNumber')).toHaveLength(1);
    });

    it('should render password field', ()=> {
        expect(wrapper.find('#amount')).toHaveLength(1);
    });

    it('should render button field', ()=> {
        expect(wrapper.find('#comment')).toHaveLength(1);
    });
    it('should render button field', ()=> {
        expect(wrapper.find('#btn5')).toHaveLength(1);
    });

    it('should render button field', ()=> {
        expect(wrapper.find('#btn6')).toHaveLength(1);
    });
    it('should render button field', ()=> {
        expect(wrapper.find('#btn7')).toHaveLength(1);
    });

    describe('When onChange event is not triggered on student Id field', () => {
        it('should have empty state', () => {
          expect(wrapper.state().fundTransfer.toAccountNumber).toEqual('');
        });
      });
      describe('when onChange event is not triggered on password field',()=>{
          it('should have empty state',()=>{
              expect(wrapper.state().fundTransfer.amount).toEqual('');
          });
      });
      describe('when onChange event is not triggered on password field',()=>{
        it('should have empty state',()=>{
            expect(wrapper.state().fundTransfer.comment).toEqual('');
        });
    });

      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const toAccountNumber = wrapper.find('#toAccountNumber');
          toAccountNumber.simulate('change', { target: { name:'toAccountNumber',value: '12345678' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().fundTransfer.toAccountNumber).toEqual('12345678');
        })
      });
    
      describe('When onChange event triggered on password field', () => {
        beforeEach(() => {
          const amount = wrapper.find('#amount');
          amount.simulate('change', { target: {name:'amount', value: '10000' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().fundTransfer.amount).toEqual('10000');
        })
      });

      describe('When onChange event triggered on password field', () => {
        beforeEach(() => {
          const comment = wrapper.find('#comment');
          comment.simulate('change', { target: {name:'comment', value: 'transferred to divya' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().fundTransfer.comment).toEqual('transferred to divya');
        })
      });
      describe('When submit button is clicked', () => {
        beforeEach(() => {
          wrapper.find('#toAccountNumber').simulate('change', { target: {name:'toAccountNumber', value: '12345678' } });
          wrapper.find('#amount').simulate('change', { target: { name:'amount',value: '10000' } });
          wrapper.find('#comment').simulate('change', { target: { name:'comment',value: 'transferred to divya' } });
    
          const fakeEvent = { preventDefault: () => console.log('preventDefault') };
          const submit = wrapper.find('#btn5');
          submit.simulate('click', fakeEvent);
        });
    
        it('should have excepted userName', () => {
          expect(wrapper.state().fundTransfer.toAccountNumber).toEqual('12345678');
        });
    
        it('should have excepted Password', () => {
          expect(wrapper.state().fundTransfer.amount).toEqual('10000');
        });
      it('should have excepted Password', () => {
        expect(wrapper.state().fundTransfer.comment).toEqual('transferred to divya');
      });
    });
    describe('When first button is cliked', () => {
        it('should have called handle submit function', () => {
          const comp = shallow(<FundTransfer />);
          const spy = jest.spyOn(comp.instance(), 'handleTransfer');
          comp.instance().forceUpdate();
          comp.find('#btn5').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });

      describe('When first button is cliked', () => {
        it('should have called handle submit function', () => {
          const comp = shallow(<FundTransfer />);
          const spy = jest.spyOn(comp.instance(), 'handleTransactions');
          comp.instance().forceUpdate();
          comp.find('#btn6').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
      describe('When first button is cliked', () => {
        it('should have called handle submit function', () => {
          const comp = shallow(<FundTransfer />);
          const spy = jest.spyOn(comp.instance(), 'handleSummary');
          comp.instance().forceUpdate();
          comp.find('#btn7').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
     
     
});