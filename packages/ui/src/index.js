import B from './button';
import I from './input';
import L from './loader';
import {
  useTheme as ut,
  withTheme as wt,
  Theme as T,
} from './theme';
import {
  Nav as N,
  NavItem as Ni,
} from './nav';

export const useTheme = ut;
export const withTheme = wt;
export const Theme = T;
export const Button = B;
export const TextInput = I;
export const Nav = N;
export const NavItem = Ni;
export const Loader = L;

export default {
  useTheme,
  withTheme,
  Theme,
  Button,
  TextInput,
  Nav,
  NavItem,
  Loader,
};
