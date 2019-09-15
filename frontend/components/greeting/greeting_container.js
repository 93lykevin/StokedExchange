import { connect } from 'react-redux';
import { logout, login, clearErrors } from '../../actions/session_actions';
import { requestProducts } from '../../actions/product_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
    return{
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors()),
    requestProducts: () => dispatch(requestProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);