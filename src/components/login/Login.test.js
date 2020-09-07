import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Login from './Login.component';

describe('Login', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    shallow(<Login />);
  });
});
