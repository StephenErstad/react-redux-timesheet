import React from 'react';
import EmployeeRow from './EmployeeRow';
import {shallow} from 'enzyme';

describe('Employee Row Component: ', function() {

  it('implement me', function() {
    expect(true).toBe(true);
  });

  it('should instantiate the Employee Table', function() {
    const employee = {
      username: 'fflintstone',
      email: 'fred.flintstone@slatequarry.com',
      firstName: 'Fred',
      lastName: 'Flintstone',
      admin: true
    };

    const component = shallow(
        <EmployeeRow employee={employee}/>
    );

    expect(component).toContainReact(<td>Flintstone</td>);
    expect(component).toContainReact(<td>fflintstone</td>);
    expect(component).toContainReact(<td>Yes</td>);
  });
});
