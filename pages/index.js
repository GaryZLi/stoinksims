// import {
//     useEffect, 
//     useState,
// } from 'react';
// import Router from 'next/router';
// import { connect } from 'react-redux';
// import { makeStyles } from '@material-ui/styles';
// import Loading from '../frontend/containers/Loading';
import Home from '../frontend/containers/Home';
// import { isLoggedIn } from '../frontend/services/auth';
// import { updateUserLoginState } from '../frontend/redux/actions';

// const useStyles = makeStyles({
//     root: {
//         // height: '100%',
//         // width: '100%',
//         // minWidth: 800,
//         // overflow: 'auto',
//         // position: 'relative',
//         // fontFamily: '-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif',
//     }
// });

// const Main = ({
//     uid,
//     updateUserLoginState,
// }) => {
//     const [initialRender, setInitialRender] = useState(true);    
//     const classes = useStyles();

//     useEffect(() => {
//         isLoggedIn()
//         .then(results => {
//             updateUserLoginState(results);
//             setInitialRender(false);
//         })
//         .catch(err => {
//             console.log(err);
//             setInitialRender(false);
//         });

//     }, []);

//     if (initialRender) return <></>;

//     if (uid) {
//         return (        
//             <div className={classes.root}>
//                 <Loading />
                
//             </div>
//         );
//     }
//     else {
//         // Router.push('/login');
//         return <></>
//     }
// };

// const mapStateToProps = ({
//     uid,
// }) => ({
//     uid,
// });

// const mapDispatchToProps = {
//     updateUserLoginState,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Main);


export default Home;