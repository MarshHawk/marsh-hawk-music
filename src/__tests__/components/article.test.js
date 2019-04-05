import React from 'react';
import { shallow } from 'enzyme';

import Article from '../../components/article';

//Shallow Render tests
describe('<Article />', () => {

  const article = shallow(<Article />);
  it('renders a top-level article tag', () => {  
    expect(article.find('article')).toHaveLength(1);
  });

  it('article tag has correct bootstrap CSS', () =>{
    expect(article.find('article.page-section.text-center.py-5')).toHaveLength(1);
  });
  
  it('article tag has nested sections', () =>{
    expect(article.find('article section')).toHaveLength(2);
  });
  
  it('article tag has bootstrap button', () =>{
    expect(article.find('article button.btn.btn-primary')).toHaveLength(1);
  });
  
  it('article tag has h3 title', () =>{
    expect(article.find('article h3')).toHaveLength(1);
  });
  
  it('article tag has h3 title', () =>{
    expect(article.find('article section section h3')).toHaveLength(1);
  });
  
  it('render correct branded navbar text', () =>{
    expect(article.find('article section section h3').text()).toEqual('Motown Milonga Music');
  });
  
    it('article tag has h5 subtext', () =>{
    expect(article.find('article section section h5')).toHaveLength(1);
  });
  
  it('render correct branded navbar text', () =>{
    expect(article.find('article section section h5').text()).toEqual('Original track');
  });
  
});