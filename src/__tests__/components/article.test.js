import React from 'react';
import { shallow } from 'enzyme';

import Article from '../../components/article';

//Shallow Render tests
describe('<Article />', () => {

  const wrapper = shallow(<Article />);
  it('renders a top-level article tag', () => {  
    expect(wrapper.find('article')).toHaveLength(1);
  });

  it('article tag has correct bootstrap CSS', () =>{
    expect(wrapper.find('article.page-section.text-center.py-5')).toHaveLength(1);
  });
  
});