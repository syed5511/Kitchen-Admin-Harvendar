import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import SignUp from './SignUp.component';


describe('SignUp', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<SignUp />).toJSON();
        expect(tree).toMatchSnapshot();
      });

   it('renders without crashing', () => {
      shallow(<SignUp />);
    });
});