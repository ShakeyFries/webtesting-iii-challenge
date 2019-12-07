import React from 'react';
import {render} from '@testing-library/react';
import'@testing-library/jest-dom';

import Dashboard from "../dashboard/Dashboard";
import Controls from './Controls';


test('Controls renders correctly', () => {
      const controls = render(<Controls />);
      expect(controls).toMatchSnapshot();
})

test('should render correctly', () => {
      const locked = jest.fn();// mock functions
      const closed = jest.fn();
      const toggleLocked = jest.fn();
      const toggleClosed = jest.fn();
      render(
      <Controls 
          locked={locked} 
          closed={closed} 
          toggleLocked={toggleLocked}
          toggleClosed={toggleClosed}
          />
      );
});