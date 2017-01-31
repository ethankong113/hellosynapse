import { renderComponent, renderMUIComponent, expect } from '../test_helper';
import App from '../../frontend/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderMUIComponent(App);
  });

  it('renders the component', () => {
    expect(component).to.exist;
  });

  it('contains the name HelloSynapse', () => {
    expect(component).to.contain('HelloSynapse');
  });
});
