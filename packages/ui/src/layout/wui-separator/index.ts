import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import '../../components/wui-text'
import styles from './styles'

@customElement('wui-separator')
export class WuiSeparator extends LitElement {
  public static styles = [styles]

  @property({ type: Boolean }) public showText = false

  public render() {
    return html`${this.template()}`
  }

  private template() {
    if (this.showText) {
      return html`<wui-text variant="small-500" color="fg-200">or</wui-text>`
    }

    return null
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wui-separator': WuiSeparator
  }
}