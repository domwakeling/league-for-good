import test from 'tape';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Card, CardActions, CardTitle } from 'material-ui/Card';
import CreateLeagueButton from '../CreateLeagueButton';
import CreateLeagueSelector from '../CreateLeagueSelector';
import { cssCreateLeague } from '../../styles';
import { sports } from '../../sports.js';

configure({ adapter: new Adapter() });

test('shallow render test of CreateLeagueSelector', (t) => {

    const baseProps = {
        onSelect: () => {},
        selectedSport: ''
    }

    const wrapper = shallow(<CreateLeagueSelector {...baseProps} />);

    t.equal(wrapper.type(), Card, 'should render an outer <Card>');

    t.equal(wrapper.find(CardTitle).length, 1, 'should render one <CardTitle >');
    
    t.equal(wrapper.find(CardActions).length, 1, 'should render one <CardActions >');

    const target = sports.length;
    t.equal(wrapper.find(CreateLeagueButton).length, target,
        'should render a <CreateLeagueButton/> for each sport');
    
    t.end();
});
