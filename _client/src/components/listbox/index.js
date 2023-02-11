import getClassnames from 'js/getClassnames';
import { Listbox } from 'aria-components';
import './listbox.scss';

// Get the components hashed classnames.
const { button, list } = getClassnames(siteClassNames.listbox);

// Get the elements.
const controller = document.querySelector(button);
const target = document.querySelector(list);

// Create the Listbox.
const listbox = new Listbox({ // eslint-disable-line no-unused-vars
  controller,
  target,
});
