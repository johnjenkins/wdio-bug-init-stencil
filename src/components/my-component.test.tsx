import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';
import { expect } from '@wdio/globals';


describe('testing-stuff', () => {
  beforeEach(async () => {
    render({
      template: () => <my-component />,
    });
  });

  it('testing things', async () => {
    expect(true).toBe(true);
  });
});
