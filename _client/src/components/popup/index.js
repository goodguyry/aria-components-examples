import getClassnames from 'js/getClassnames';
import { Popup } from 'aria-components';
import './popup.scss';

// Get the components hashed classnames.
const { button, info } = getClassnames(siteClassNames.popup);

// Get the elements.
const controller = document.querySelector(button);
const target = document.querySelector(info);

// Create the Popup.
const popup = new Popup({ controller, target }); // eslint-disable-line no-unused-vars
