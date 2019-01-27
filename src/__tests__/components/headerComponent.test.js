import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../components/headerComponent';

//Shallow Render tests
describe('<Header />', () => {

  const wrapper = shallow(<Header />);
  it('renders a top-level header', () => {  
    expect(wrapper.find('header')).toHaveLength(1);
  });

  it('renders nav with bootstrap classes', () =>{
    expect(wrapper.find('nav.text-uppercase.navbar.navbar-expand-md.bg-info.navbar-dark')).toHaveLength(1);
  });

  it('renders div container', () =>{
    expect(wrapper.find('nav div.container')).toHaveLength(1);
  });

  it('renders a bootstrap branded navbar', () =>{
    expect(wrapper.find('nav div.container a.navbar-brand')).toHaveLength(1);
  });

  it('render correct branded navbar text', () =>{
    expect(wrapper.find('nav div.container a.navbar-brand').text()).toEqual('Marsh Hawk Music');
  });

  it('renders a bootstrap navbar nav', () =>{
    expect(wrapper.find('nav div.container div.navbar-nav')).toHaveLength(1);
  });

  it('renders a bootstrap navbar nav', () =>{
    expect(wrapper.find('nav div.container div.navbar-nav')).toHaveLength(1);
  });

  it('renders one item link', () => {
    expect(wrapper.find('div.navbar-nav a.nav-item.nav-link')).toHaveLength(1);
  });

  it('renders first item link text', () => {
    expect(wrapper.find('div.navbar-nav a.nav-item.nav-link').text()).toEqual('Home');
  });
  
});