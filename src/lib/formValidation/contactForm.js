import * as yup from 'yup';

const contactSchema = yup.object().shape({
	name: yup.string().required('Name is required'),
	email: yup.string().required('Email is required').email('Email is invalid'),
	gender: yup.string().required('Rembember Me is required'),
	radioOpt: yup.string().required('Radio is required'),
	rembemberMe: yup
		.boolean()
		.required('Rembember Me is required')
		.oneOf([true], 'The terms and conditions must be accepted.')
});

export default contactSchema;
