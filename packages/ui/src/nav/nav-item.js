/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import { useTheme } from '../theme';
import Button from '../button';

/* eslint-disable react/require-default-props */

export const NavItem = ({
  as,
  href,
  to,
  active,
  decorate,
  children,
  ...props
}) => {
  const theme = useTheme();

  const style = css`
    display: inline;
    @media screen and (min-width: 870px) {
      display: block;
      position: relative;
      margin-bottom: 1rem;
    }
  `;

  const activeStyle = css`
    @media screen and (min-width: 870px) {
      &::after {
        content: "";
        display: block;
        width: 12px;
        height: 12px;
        right: -6px;
        top: 12px;
        border-left: 1px solid ${theme.masthead.borderColor};
        border-bottom: 1px solid ${theme.masthead.borderColor};
        background-color: ${theme.masthead.bgColor};
        position: absolute;
        transform: rotate(45deg);
      }
    }
  `;

  const buttonStyles = css`
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    @media screen and (min-width: 870px) {
      width: 254px;
      margin-left: 0;
      margin-right: 0;
    }
  `;

  const styles = (active && decorate) ? [style, activeStyle] : [style];

  return (
    <li css={styles} {...props}>
      <Button
        as={as}
        href={href}
        to={to}
        kind={active ? 'active' : 'primary'}
        readOnly={active}
        link
        decorate={decorate}
        css={buttonStyles}
      >
        {children}
      </Button>
    </li>
  );
};

NavItem.defaultProps = {
  as: 'a',
  active: false,
  decorate: false,
};

NavItem.propTypes = {
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.object,
    PropTypes.func,
  ]),
  decorate: PropTypes.bool,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  to: PropTypes.string,
  active: PropTypes.bool,
};

export default NavItem;
