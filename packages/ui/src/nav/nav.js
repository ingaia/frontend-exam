/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import {
  memo,
  Children,
  isValidElement,
  cloneElement,
} from 'react';

export const Nav = memo(({
  decorate,
  children,
  ...props
}) => {
  const styles = css`
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: center;
    @media screen and (min-width: 448px) and (max-width: 870px) {
      text-align: right;
    }
  `;

  let child = children;

  if (decorate) {
    child = Children.map(children, (c) => (isValidElement(c) ? cloneElement(c, { decorate }) : c));
  }

  return (
    <nav {...props}>
      <ul css={styles}>
        {child}
      </ul>
    </nav>
  );
});

Nav.defaultProps = {
  decorate: false,
};

Nav.propTypes = {
  decorate: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Nav;
