import React from 'react';
import {shallow} from 'enzyme';

import Hello from './Hello';
import renderer from 'react-test-renderer';

describe('Hello World:', function() {

  it('renders without exploding', () => {

    expect(shallow(<Hello/>)).toHaveLength(1);
  });

  it('should render to match the snapshot', function () {
    const component = renderer.create(
        <Hello friend="Luke"/>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render with default text', function() {

    const component = shallow(<Hello/>);

    expect(component).toIncludeText('Howdy');
    expect(component).toIncludeText('Partner');
  });

  it('should render with our props', function() {

    const component = shallow(
        <Hello friend="Fred2"/>
    );

    expect(component).toIncludeText('Howdy');
    expect(component).toIncludeText('Fred');
    expect(component).not.toIncludeText('Partner');
  });
});