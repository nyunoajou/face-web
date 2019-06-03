import { compose } from 'recompose';
import { reduxForm } from 'redux-form';
import { NEW_ANSWER_FORM_NAME } from 'constants/formNames';

export default key => compose(
  reduxForm({
    form: `${key}/NEW_ANSWER_FORM_NAME`,
    // Clear the form for future use (creating another project)
    //onSubmitSuccess: (result, dispatch, props) => props.reset(),
  }),
);
