import shortid from 'shortid';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <>
        {options.map((option) =>
          <button type="button" key={shortid.generate()} className={s.btn} name={option} onClick={onLeaveFeedback} >{option}</button>
            )}
    </>
    );
}
export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func
};