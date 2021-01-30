import { newSpecPage } from '@stencil/core/testing';
import { NcImg } from '../nc-img';

describe('nc-img', () => {
  it('builds', () => {
    expect(new NcImg()).toBeTruthy();
  });

  it('renders html with default attributes', async () => {
    const page = await newSpecPage({
      components: [NcImg],
      html: `<div></div>`
    });

    let component = page.doc.createElement('nc-img');

    (component as any).src = 'image.jpg';
    (component as any).alt = 'My non-copyable image';
    page.root.appendChild(component);
    await page.waitForChanges();

    expect(page.rootInstance.src).toBe('image.jpg');
    expect(page.rootInstance.alt).toBe('My non-copyable image');
  });

  it('renders with size attributes', async () => {
    const page = await newSpecPage({
      components: [NcImg],
      html: `<div></div>`
    });

    let component = page.doc.createElement('nc-img');

    (component as any).src = 'image.jpg';
    (component as any).srcset = 'image.jpg 1x, image@2x.jpg 2x';
    (component as any).hasSize = true;
    page.root.appendChild(component);
    await page.waitForChanges();

    expect(page.rootInstance.src).toBe('image.jpg');
    expect(page.rootInstance.srcset).toBe('image.jpg 1x, image@2x.jpg 2x');
    expect(page.rootInstance.hasSize).toBe(true);
  });
});
