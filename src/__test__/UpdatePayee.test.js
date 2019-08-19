import React from 'react';
import { shallow} from 'enzyme';
import UpdatePayee from '../components/UpdatePayee/UpdatePayee';


describe('When Controlled component is given', () => {
    let wrapper;
        beforeEach(() => {
            wrapper = shallow(<UpdatePayee/>);
  });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should render table', () => {
        expect(wrapper.find('form')).toHaveLength(1);
    });
   
    it('should render h2 tag',()=>{
        expect(wrapper.find('h4')).toHaveLength(1);
    });
    it('should render h2 tag',()=>{
        expect(wrapper.find('table')).toHaveLength(1);
    });


    it('should render student id field', ()=> {
        expect(wrapper.find('#payeeName')).toHaveLength(1);
    });

    it('should render password field', ()=> {
        expect(wrapper.find('#payeeAccountNumber')).toHaveLength(1);
    });
    it('should render password field', ()=> {
      expect(wrapper.find('#ifscCode')).toHaveLength(1);
  });
  it('should render password field', ()=> {
    expect(wrapper.find('#branchName')).toHaveLength(1);
});
it('should render password field', ()=> {
    expect(wrapper.find('#btn13')).toHaveLength(1);
});

    describe('When onChange event is not triggered on student Id field', () => {
        it('should have empty state', () => {
          expect(wrapper.state().payeeData.payeeName).toEqual('');
        });
      });
      describe('when onChange event is not triggered on password field',()=>{
          it('should have empty state',()=>{
              expect(wrapper.state().payeeData.payeeAccountNumber).toEqual('');
          });
      });
      describe('when onChange event is not triggered on password field',()=>{
        it('should have empty state',()=>{
            expect(wrapper.state().payeeData.ifscCode).toEqual('');
        });
    });
    describe('when onChange event is not triggered on password field',()=>{
      it('should have empty state',()=>{
          expect(wrapper.state().payeeData.branchName).toEqual('');
      });
  });

      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const payeeName = wrapper.find('#payeeName');
          payeeName.simulate('change', { target: { name:'payeeName',value: 'priya' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().payeeData.payeeName).toEqual('priya');
        })
      });
    
      describe('When onChange event triggered on password field', () => {
        beforeEach(() => {
          const payeeAccountNumber = wrapper.find('#payeeAccountNumber');
          payeeAccountNumber.simulate('change', { target: {name:'payeeAccountNumber', value: '12345678' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().payeeData.payeeAccountNumber).toEqual('12345678');
        })
      });
      describe('When onChange event triggered on password field', () => {
        beforeEach(() => {
          const ifscCode = wrapper.find('#ifscCode');
          ifscCode.simulate('change', { target: {name:'ifscCode', value: '1234567891' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().payeeData.ifscCode).toEqual('1234567891');
        })
      });
      describe('When onChange event triggered on password field', () => {
        beforeEach(() => {
          const branchName = wrapper.find('#branchName');
          branchName.simulate('change', { target: {name:'branchName', value: 'indian' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().payeeData.branchName).toEqual('indian');
        })
      });
      describe('When submit button is clicked', () => {
        beforeEach(() => {
          wrapper.find('#payeeName').simulate('change', { target: {name:'payeeName', value: 'priya' } });
          wrapper.find('#payeeAccountNumber').simulate('change', { target: { name:'payeeAccountNumber',value: '12345678' } });
          wrapper.find('#ifscCode').simulate('change', { target: {name:'ifscCode', value: '1234567891' } });
          wrapper.find('#branchName').simulate('change', { target: {name:'branchName', value: 'indian' } });
          const fakeEvent = { preventDefault: () => console.log('preventDefault') };
          const submit = wrapper.find('#btn10');
          submit.simulate('click', fakeEvent);
        });
        it('should have excepted Password', () => {
          expect(wrapper.state().payeeData.payeeName).toEqual('priya');
        });
      it('should have excepted Password', () => {
        expect(wrapper.state().payeeData.payeeAccountNumber).toEqual('12345678');
      });
      it('should have excepted Password', () => {
        expect(wrapper.state().payeeData.ifscCode).toEqual('1234567891');
      });
      it('should have excepted Password', () => {
        expect(wrapper.state().payeeData.branchName).toEqual('indian');
      });
    });
    describe('When first button is cliked', () => {
        it('should have called handle submit function', () => {
          const comp = shallow(<UpdatePayee />);
          const spy = jest.spyOn(comp.instance(), 'addPayee');
          comp.instance().forceUpdate();
          comp.find('#btn13').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
     
});