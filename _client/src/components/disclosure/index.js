import getClassnames from 'js/getClassnames';
import { Disclosure } from 'aria-components';
import './disclosure.scss';

// Get the components hashed classnames.
const { button, info } = getClassnames(siteClassNames.disclosure);

// Get the elements.
const controllers = document.querySelectorAll(button);
const targets = document.querySelectorAll(info);

// Create the Disclosures.
if (controllers.length === targets.length) {
  // eslint-disable-next-line no-unused-vars
  const maps = Array.prototype.map.call(controllers, (controller, index) => (
    new Disclosure({ controller, target: targets[index] })
  ));
}

window.addEventListener('load', disclosureHashCheck);
window.addEventListener('hashchange', disclosureHashCheck);

/**
 * Check for a hash in the URL and open the corresponding disclosure.
 */
function disclosureHashCheck() {
  const hash = window.location.hash.replace('#', '');
  const el = document.getElementById(hash);

  if (null !== el && el.disclosure instanceof Disclosure) {
    const { disclosure } = el;
    disclosure.open();
    disclosure.controller.scrollIntoView({ behavior: 'smooth' });
  }
}
