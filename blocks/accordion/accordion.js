/*
 * Accordion Block
 * Recreate an accordion
 * https://www.hlx.live/developer/block-collection/accordion
 */

export default function decorate(block) {
  const button = document.createElement('button');
  button.textContent = 'Accordion Components';
  button.style.padding = '1em';
  button.style.marginBottom = '1em';
  block.appendChild(button);
}
