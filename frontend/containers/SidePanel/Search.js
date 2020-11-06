import Router from 'next/router';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import {
    ListItem,
    TextField,
    Button,
} from '@material-ui/core';
import {
    Search as SearchIcon,
} from '@material-ui/icons';
import {
    updateSearchInput,
    updateSidePanel,
    updateUserLoginState,
    updateLoading,
    updateStockInfo,
} from '../../redux/actions';
import { getStockInfo } from '../../services/stock';

const useStyles = makeStyles({
    list: {
        paddingLeft: 0,
    },
});

const Search = ({
    ticker,
    sidePanelOpened,
    updateLoading,
    updateSearchInput,
    updateSidePanel,
    updateUserLoginState,
    updateStockInfo,
}) => {
    const classes = useStyles();

    const handleInput = e => {
        if (e.target.value.length <= 5) updateSearchInput(e.target.value);;
    };

    const handleSearch = () => {
        if (!sidePanelOpened) {
            updateSidePanel(true);

            setTimeout(() => document.getElementById('searchField').focus(), 500);
        }
        else if (sidePanelOpened && !ticker.length) {
            document.getElementById('searchField').focus();
        }
        else {
            updateLoading(true);

            getStockInfo(ticker)
                .then(stockInfo => {
                    updateStockInfo(stockInfo);
                    updateLoading(false);
                })
                .catch(error => {
                    updateLoading(false);
                    
                    if (error.response) {
                        const { status } = error.response;

                        if (status === 401) {
                            updateUserLoginState(undefined);
                        }
                        else if (status === 400) {
                            updateStockInfo(undefined);
                        }
                        else if (status === 500) {
                            console.log('500 error')
                        }
                    }
                })

            Router.push('/stock');
        }
    };

    return (
        <ListItem className={classes.list}>
            <Button
                style={{ maxWidth: 64, minWidth: 64 }}
                onClick={handleSearch}
            >
                <SearchIcon />
            </Button>
            <TextField
                value={ticker}
                id='searchField'
                placeholder='Search Ticker'
                onChange={handleInput}
                onKeyDown={e => e.key === 'Enter' && handleSearch()}
            />
        </ListItem>
    );
};

const mapStateToProps = ({
    ticker,
    sidePanelOpened,
}) => ({
    ticker,
    sidePanelOpened,
});

const mapDispatchToProps = {
    updateSearchInput,
    updateSidePanel,
    updateUserLoginState,
    updateLoading,
    updateStockInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);