import { compose } from 'recompose';
import { reduxForm } from 'redux-form';
import { NEW_POST_FORM_NAME } from 'constants/formNames';

export default compose(
  reduxForm({
    form: NEW_POST_FORM_NAME,
    // Clear the form for future use (creating another project)
    onSubmitSuccess: (result, dispatch, props) => props.reset(),
  }),
);
