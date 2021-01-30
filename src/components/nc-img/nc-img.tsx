import { Component, Host, Element, Prop, h } from '@stencil/core';

// those props won't be applied to the img element
const implicitProps = ['src', 'alt', 'class', 'data-hmr'];

const getElementAttributes = (nodeMap: NamedNodeMap) => {
  if (nodeMap) {
    return Object.keys(nodeMap).reduce((props, current) => {
      try {
        const numCurrent = parseInt(current);

        if (numCurrent < nodeMap.length) {
          const property = nodeMap[current];

          if (implicitProps.indexOf(property.name) === -1) {
            return {
              ...props,
              [property.name]: property.value
            };
          }
        }
      } catch (err) {}
    }, {});
  }
  return {};
};

@Component({
  tag: 'nc-img',
  styleUrl: 'nc-img.css',
  shadow: true
})
export class NcImg {
  @Prop({ reflect: true }) alt: string;
  @Prop({ reflect: true }) src: string;
  @Prop({ reflect: true }) srcset: string;
  @Prop({ reflect: true }) hasSize: boolean = false;

  @Element() el: any;

  render() {
    const otherProps = getElementAttributes(this.el.attributes);

    return (
      <Host>
        <div class={`nc-img__container ${!this.hasSize ? 'nc-img__container--padding' : ''}`}>
          <img src={this.src} alt={this.alt} srcset={this.srcset} {...otherProps} />
        </div>

        <div class="nc-img__overlay" />
      </Host>
    );
  }
}
