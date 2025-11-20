import { render as myRenderer } from '../../scripts/__dropins__/my-custom-dropin/render.js';
import { FormDropinContrainer } from '../../scripts/__dropins__/my-custom-dropin/containers/FormDropinContrainer.js';

export default async function decorate(block) {
  console.log('Rendering custom drop-in...');
  block.innerHTML = ''; 
  await myRenderer.render(FormDropinContrainer, {})(block);
  console.log('Drop-in rendered ✅');
}