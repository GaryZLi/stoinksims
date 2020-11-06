import { useEffect } from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import Search from './Search';
import {
    Paper,
    IconButton,
    ListItem,
    Divider,
    List,
    ListItemText,
} from '@material-ui/core';
import {
    ChevronLeft,
    ChevronRight,
    MonetizationOnOutlined,
    HomeOutlined,
    History,
} from '@material-ui/icons';

import {
    updateSidePanel,
} from '../../redux/actions';

const useStyles = makeStyles({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        transition: 'all 0.5s ease-out',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,

        backgroundColor: 'rgba(17, 91, 240, 0.2)',
    },
    greetingText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        height: 25,
        overflow: 'hidden',
    },
    chevronIcon: {
        marginLeft: 'auto',
        marginRight: 6,
    },
    icon: {
        marginRight: 20,
        marginLeft: 4,
    },
});

const getTimeOfDay = hour => {
    if (hour >= 0 && hour < 12) {
        return 'morning';
    }
    else if (hour >= 12 && hour < 18) {
        return 'afternoon';
    }
    else {
        return 'evening';
    }
};

const SidePanel = ({
    uid,
    firstName,
    lastName,
    sidePanelOpened,
    updateSidePanel,
}) => {
    const classes = useStyles();
    
    const handleDrawer = () => updateSidePanel(!sidePanelOpened);
    
    const listItems = [
        {
            icon: <HomeOutlined />,
            href: '/',
            component: <ListItemText primary='Home' />,
        },
        {
            icon: <MonetizationOnOutlined />,
            href: '',
            component: <ListItemText primary='Portfolio' />,
        },
        {
            icon: <History />,
            href: '',
            component: <ListItemText primary='History' />,
        }
    ];

    return (
        <Paper
            className={classes.root}
            style={{
                minWidth: sidePanelOpened ? 250 : 64,
                maxWidth: sidePanelOpened ? 250 : 64,
            }}
            elevation={7}
        >
            <IconButton
                className={classes.chevronIcon}
                onClick={handleDrawer}
            >
                {sidePanelOpened ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
            <div className={classes.greetingText}>
                {sidePanelOpened && `
                    Good ${getTimeOfDay(new Date().getHours())}, ${firstName} ${lastName}
                `}
            </div>
            <Divider />
            <List>
                <Search/>
                {listItems.map((item, id) => (
                    <Link
                        key={id}
                        href={item.href}
                        as={item.href}
                    >
                        <ListItem button>
                            <div className={classes.icon}>
                                {item.icon}
                            </div>
                            {item.component}
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Paper>
    );
};

const mapStateToProps = ({
    uid,
    firstName,
    lastName,
    sidePanelOpened,
}) => ({
    uid,
    firstName,
    lastName,
    sidePanelOpened,
});

const mapDispatchToProps = {
    updateSidePanel,
};

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);