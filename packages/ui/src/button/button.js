/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { memo, forwardRef } from 'react';
import { isValidElementType } from 'react-is';
import PropTypes from 'prop-types';

import { useTheme } from '../theme';

/* eslint-disable react/button-has-type */

const setStyles = (theme, isDecorated, isActive, isDisabled, isReadOnly) => {
  const border = isDecorated ? css`
    border-image-source: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOSAzOSI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQTk5RTdFIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0zOC41LjVILjVWMTZsNC4zIDQtNC4zIDR2MTQuNWgzOFYyNGwtMy45LTQgMy45LTR6Ii8+PC9zdmc+");
    border-image-slice: 3% 13%;
    border-image-outset: 0;
    border-image-repeat: stretch;
  ` : css`
    border-color: ${theme.button.borderColor};
  `;

  const reset = css`
    appearance: none;
    cursor: pointer;
    display: inline-block;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    &:hover, &:focus {
      text-decoration: none;
    }
  `;

  const base = css`
    background-color: transparent;
    border-width: ${isDecorated ? '1px 8px' : '1px'};
    border-style: solid;
    border-color: transparent;
    color: ${theme.button.fontColor};
    font-size: 0.857142857rem;
    height: 2.785714286rem;
    line-height: 39px;
    padding: 0 1em;
    text-transform: uppercase;
    transition: color 0.5s ease;
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${theme.focus.outlineColor};
    }
    @media screen and (min-width: 780px) {
      font-size: 1rem;
    }
  `;

  const baseHover = css`
    &:hover {
      color: ${theme.button.fontColorHover};
      ${border};
    }
  `;

  const active = css`
    ${border};
    color: ${theme.button.activeFontColor};
    transition: background-color 0.5s ease;
  `;

  const activeHover = css`
    &:hover {
      color: ${theme.button.activeFontColorHover};
      background-color: ${theme.button.activeBgColorHover};
    }
  `;

  const disabled = css`
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.4;
  `;

  const result = [reset, base];

  if (!isReadOnly) {
    result.push(baseHover);
  }

  if (isActive) {
    result.push(active);
    if (!isReadOnly) {
      result.push(activeHover);
    }
  }

  if (isDisabled) {
    result.push(disabled);
  }

  return result;
};

const Button = memo(forwardRef(({
  as,
  type,
  link,
  kind,
  children,
  readOnly,
  disabled,
  decorate,
  ...props
}, ref) => {
  const theme = useTheme();
  const newProps = { ...props };
  const isDisabled = readOnly || disabled;
  const disabledLinkFn = (e) => e.preventDefault();

  const styles = setStyles(theme, decorate, (kind === 'active'), disabled, readOnly);

  if (isDisabled) {
    newProps['aria-disabled'] = 'true';

    if (link) {
      newProps.onClick = disabledLinkFn;
    } else {
      newProps.disabled = isDisabled;
    }
  }

  if (link) {
    newProps.role = 'button';
    const Comp = as && isValidElementType(as) ? as : 'a';
    return (
      <Comp ref={ref} css={styles} {...newProps}>
        {children}
      </Comp>
    );
  }

  return (
    <button type={type} css={styles} ref={ref} {...newProps}>
      {children}
    </button>
  );
}));

Button.defaultProps = {
  as: 'a',
  link: false,
  readOnly: false,
  disabled: false,
  kind: 'primary',
  type: 'button',
  decorate: false,
};

Button.propTypes = {
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.object,
    PropTypes.func,
  ]),
  link: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  kind: PropTypes.oneOf(['primary', 'active']),
  type: PropTypes.string,
  decorate: PropTypes.bool,
};

export default Button;
