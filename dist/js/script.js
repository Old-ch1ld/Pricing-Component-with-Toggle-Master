'use strict';

const togglePricingBtn = document.querySelector('.pricing-toggle__checkbox');
const pricesAnnually = document.querySelectorAll('.pricing-card__price--annually');
const pricesMonthly = document.querySelectorAll('.pricing-card__price--monthly');

togglePricingBtn.addEventListener('change', function () {
  if (this.checked) {
    pricesAnnually.forEach(price => price.style.display = 'none');
    pricesMonthly.forEach(price => price.style.display = 'flex');
  } else {
    pricesAnnually.forEach(price => price.style.display = 'flex');
    pricesMonthly.forEach(price => price.style.display = 'none');
  }
});
