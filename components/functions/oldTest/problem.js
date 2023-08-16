import { redirect } from './routing.js';
import { getTaxInformation } from './taxService.js';

function formatPrice({ price, location }) {
  const user = document.getElementById('user').innerHTML; // <label id="test.dom" />

  if (!location) { // <label id="test.redirect" />
    redirect('/');
    return;
  }

  const rate = getTaxInformation(location); // <label id="test.external" />
  const taxes = rate ? `plus $${price * rate} in taxes.` : 'plus tax.';

  const totalEl = document.getElementById('total'); // <label id="test.total"/>
  totalEl.innerHTML = `${user} your total is: ${price} ${taxes}`;
}

export { formatPrice };
