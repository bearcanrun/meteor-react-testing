/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */
import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import chai from 'chai';
import MainPage from './MainPage.jsx';

describe('MainPage Component', () => {
  describe('Shallow', () => {
    let welcome;
    let page;

    beforeEach(() => {
      welcome = 'testing';
      page = shallow(<MainPage welcome={welcome} />);
    });
    it('should have `.page` and one h1 element', () => {
      chai.expect(page.find('.page')).to.have.length(1);
      chai.expect(page.find('h1')).to.have.length(1);
    });
  });

  describe('Deep', () => {
    let welcome;
    let page;

    beforeEach(() => {
      welcome = 'testing';
      page = mount(<MainPage welcome={welcome} />);
    });
    it('should have props welcome', () => {
      chai.expect(page.props().welcome).to.equal('testing');
    });
    it('should be able to set props welcome', () => {
      page.setProps({ welcome: 'still testing' });
      chai.expect(page.props().welcome).to.equal('still testing');
    });
  });
});
