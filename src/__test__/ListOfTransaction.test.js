import React from 'react';
import {shallow,mount} from 'enzyme';
import ListOfTransaction from '../components/ListOfTransaction/ListOfTransaction';

describe('When Controlled component is given', () => {
    let wrapper;
        beforeEach(() => {
            wrapper = mount(<ListOfTransaction/>);
  });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });
    if('should render table element',()=>{
      expect(wrapper.find('table')).toHaveLength(1);
    });
    it('should render button element',()=>{
        expect(wrapper.find('#btn23')).toHaveLength(1);
    });
     
    it('should render button element',()=>{
        expect(wrapper.find('#btn24')).toHaveLength(1);
    });
    it('should render h1 tag',()=>{
        expect(wrapper.find('h5')).toHaveLength(1);
    })

   
      describe('When first button is cliked', () => {
        it('should have called cancel function', () => {
          const comp = shallow(<ListOfTransaction/>);
          const spy = jest.spyOn(comp.instance(), 'handleAccountSummary');
          comp.instance().forceUpdate();
          comp.find('#btn23').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
      describe('When first button is cliked', () => {
        it('should have called cancel function', () => {
          const comp = shallow(<ListOfTransaction/>);
          const spy = jest.spyOn(comp.instance(), 'logout');
          comp.instance().forceUpdate();
          comp.find('#btn24').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
      describe('when account summary is ',()=>{
        const list=[
          {
            transactionId:100000,
            toAccountNo:1234,
            amount:100,
            transactionType:"debited",
            comment:"transferred"

          },
          {
            transactionId:100000,
            toAccountNo:1234,
            amount:100,
            transactionType:"debited",
            comment:"transferred"
          },
          {
            transactionId:100000,
            toAccountNo:1234,
            amount:100,
            transactionType:"debited",
            comment:"transferred"
          }
        ]
        beforeEach(()=>{
          wrapper=shallow(<ListOfTransaction list={list} />)
        });
        it('should renderlist of accounts for a user',()=>{
          const table=wrapper.find('table');
          const tbody=table.find('tbody');
          const tr=tbody.find('tr');
          expect(tr.length=3).toBe(3);
        });
      });
      describe('when the account summary is empty',()=>{
       const emptyArray=[];
       beforeEach(()=>{
         wrapper=shallow(<ListOfTransaction accountSummary={emptyArray}/>);
       });
       it('should not display account row data',()=>{
         const table=wrapper.find('table');
         const tbody=table.find('tbody');
         const tr= tbody.find('tr');
         expect(tr.length).toBe(0)
       });

      });


  
});