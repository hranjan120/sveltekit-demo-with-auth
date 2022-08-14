import * as yup from 'yup';

const loginForm = yup.object().shape({
	email: yup.string().required('Email is required').email('Email is invalid'),
	password: yup.string().required('Password is required')
});

export default loginForm;
