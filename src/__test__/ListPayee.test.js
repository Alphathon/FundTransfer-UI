import React from 'react';
import {shallow,mount} from 'enzyme';
import ListPayee from '../components/ListPayee/ListPayee';

describe('When Controlled component is given', () => {
    let wrapper;
        beforeEach(() => {
            wrapper = mount(<ListPayee/>);
  });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });
    if('should render table element',()=>{
      expect(wrapper.find('table')).toHaveLength(1);
    });
    it('should render button element',()=>{
        expect(wrapper.find('#btn11')).toHaveLength(0);
    });
    
    it('should render button element',()=>{
        expect(wrapper.find('#btn12')).toHaveLength(1);
    });
 
    it('should render h1 tag',()=>{
        expect(wrapper.find('h4')).toHaveLength(1);
    })

   
      describe('When first button is cliked', () => {
        it('should have called cancel function', () => {
          const comp = shallow(<ListPayee/>);
          const spy = jest.spyOn(comp.instance(), 'editPayee');
          comp.instance().forceUpdate();
          comp.find('#btn11').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
      describe('When first button is cliked', () => {
        it('should have called cancel function', () => {
          const comp = shallow(<ListPayee/>);
          const spy = jest.spyOn(comp.instance(), 'deletePayee');
          comp.instance().forceUpdate();
          comp.find('#btn12').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
      describe('when account summary is ',()=>{
        const account=[
          {
            payeeName:"divya",
            payeAccountNumber:1234678,
            ifscCode:12345678,
            branchName:"indian"
          },
          {
            payeeName:"hari",
            payeAccountNumber:56781234,
            ifscCode:12345678,
            branchName:"indian"
          },
          {
            payeeName:"deepika",
            payeAccountNumber:12356784,
            ifscCode:12345678,
            branchName:"indian"
          }
        ]
        beforeEach(()=>{
          wrapper=shallow(<ListPayee list={list} />)
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
         wrapper=shallow(<ListPayee list={emptyArray}/>);
       });
       it('should not display account row data',()=>{
         const table=wrapper.find('table');
         const tbody=table.find('tbody');
         const tr= tbody.find('tr');
         expect(tr.length).toBe(0)
       });

      });


  
});