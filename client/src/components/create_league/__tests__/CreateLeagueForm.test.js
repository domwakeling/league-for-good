import test from 'tape';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import FlatButton from 'material-ui/FlatButton';

import { CreateLeagueForm } from '../CreateLeagueForm';
import CreateLeagueSelector from '../CreateLeagueSelector';
// import { cssCreateLeague } from '../../styles';

configure({ adapter: new Adapter() });

test('shallow render test of CreateLeagueForm', (t) => {

    const baseProps = {
        SelectedSportType: '',
        change: () => {},
        createLeague: () => {},
        handleSubmit: () => {},
        history: {}
    }

    const wrapper = shallow(<CreateLeagueForm {...baseProps} />);
    
    t.equal(wrapper.type(), 'div', 'should render an outside <div>');

    t.equal(wrapper.find(CreateLeagueSelector).length, 1,
        'should contain one <CreateLeagueSelector/>');

    t.equal(wrapper.find('form').length, 0,
        'should not contain a form if SelectedSportType is empty');
    
    const sportType = 'baseball';
    const wrapper2 = shallow(
        <CreateLeagueForm {...baseProps} SelectedSportType={sportType} />
    );
    
    t.equal(wrapper2.find('form').length, 1,
        'should contain a form if SelectedSportType is defined');

    t.end();
});
