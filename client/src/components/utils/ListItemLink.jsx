import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import { Route, MemoryRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';


class ListItemLink extends React.Component {
    renderLink = React.forwardRef((itemProps, ref) => (
        // with react-router-dom@^5.0.0 use `ref` instead of `innerRef`
        <RouterLink to={this.props.to} {...itemProps} innerRef={ref} />
    ));

    render() {
        const { icon, primary } = this.props;
        return (
            <li>
                <ListItem button={true} component={this.renderLink}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={primary} />
                </ListItem>
            </li>
        );
    }
}

ListItemLink.propTypes = {
    icon: PropTypes.node.isRequired,
    primary: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired
};

export default ListItemLink;
