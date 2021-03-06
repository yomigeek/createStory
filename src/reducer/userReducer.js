import constant from '../constants/login';

export default (state={}, action) => {
	switch(action.type){
		case constant.LOGIN_SUCCESS:
			return {...action.user, isLoggedIn: true}
		default:
			return state;
	}
}
