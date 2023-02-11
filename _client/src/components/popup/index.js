/* eslint-disable no-unused-vars */
import getClassnames from 'js/getClassnames';
import logEventDetail from 'js/logEventDetail';
import Popup, { UseButtonRole } from 'aria-components/popup';
import './popup.scss';

// Get the components hashed classnames.
const { button } = getClassnames(siteClassNames.popup);

// Get the elements.
const controller = document.querySelector(button);

// Report event details.
controller.addEventListener('init', logEventDetail);
controller.addEventListener('stateChange', logEventDetail);
controller.addEventListener('destroy', logEventDetail);

// Create the Popup.
const popup = new Popup(controller, { modules: UseButtonRole });
popup.init();
