/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { memo, forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../theme';

/* eslint-disable react/require-default-props, jsx-a11y/label-has-associated-control */

const TextInput = memo(forwardRef(({
  type,
  placeholder,
  onChange,
  block,
  ...props
}, ref) => {
  const theme = useTheme();
  const [value, setValue] = useState('');
  const changeFn = (e) => {
    setValue(e.target.value);

    if (typeof onChange === 'function') {
      onChange(e);
    }
  };

  const fixed = css`
    transform: translateX(-0.5rem) translateY(-1.392857143rem) scale(0.8);
  `;

  const styles = css`
    display: inline-block;
    position: relative;
    margin-bottom: 1.5rem;
    input {
      outline: 0;
      background-color: transparent;
      border: 0;
      border-bottom: 1px solid ${theme.input.borderColor};
      font-size: 1rem;
      height: 2.785714286rem;
      padding: 0 0.5rem;
      color: ${theme.input.fontColor};
      &:focus {
        border-color: ${theme.input.focusBorderColor};
      }
    }
    input + span {
      display: block;
      position: absolute;
      font-size: 1rem;
      line-height: 2.785714286rem;
      color: ${theme.input.placeholderColor};
      top: 0;
      left: 0.5rem;
      transition: transform 0.2s ease;
    }
    input:focus + span {
      ${fixed};
    }
  `;

  const blockStyle = css`
    display: block;
    width: 100%;
    input {
      display: block;
      width: 100%;
    }
  `;

  return (
    <label css={block ? [styles, blockStyle] : styles}>
      <input type={type} ref={ref} onChange={changeFn} {...props} />
      <span css={value ? [fixed] : []}>{placeholder}</span>
    </label>
  );
}));

TextInput.defaultProps = {
  type: 'text',
  block: false,
};

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  block: PropTypes.bool,
  type: PropTypes.string,
};

export default TextInput;
