import test from 'tape';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FlatButton from 'material-ui/FlatButton';

import CreateLeagueIcon from '../CreateLeagueIcon';

configure({ adapter: new Adapter() });

test('shallow render test of CreateLeagueIcon', (t) => {

    const wrapper = shallow(
        <CreateLeagueIcon
            active={true}
            icon="/test"
            label="test"
        />
    );

    t.equal(wrapper.type(), 'img',
    'should render an <img>');

    t.end();
});
