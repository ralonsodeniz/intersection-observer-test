import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

const Button = ({ enabled, children, onClick }) => (
  <StyledButton onClick={onClick} enabled={enabled}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  enabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
