import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import {App} from './App';
import { initialState } from './reducers/';

it('renders without crashing', () => {
  const mockFunction = jest.fn();
  
    const component = shallow(
      <App
        state={initialState}
        submitTodo={mockFunction}
        deleteTodo={mockFunction}
        undeleteTodo={mockFunction}
      />,
    );
  expect(component.exists()).toEqual(true);
});
