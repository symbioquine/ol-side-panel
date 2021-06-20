import BaseObject from 'ol/Object';
import Collection from 'ol/Collection';

import el from './el';
import SidePanelWidget from './SidePanelWidget';

/**
 * Represents a pane within the ol-side-panel control.
 * @observableProperty {String|external:Element} name - Name of this pane - User-facing name of this pane.
 * @observableProperty {String|external:Element} icon - Icon of this pane - User-facing icon for this pane.
 * @observableProperty {Number} weight - Weight of this pane - controls the order of
 *  the pane tabs with lower numbers appearing closer to the top and higher
 *  numbers appearing farther down. Panes with a weight >= 100 will have their
 *  icons appear at the bottom of the tab bar.
 * @observableProperty {boolean} active - State of whether this pane is currently active.
 * @hideconstructor
 * @extends external:BaseObject
 */
class SidePanelPane extends BaseObject {
  /**
   * @param {Object} args - constructor args
   * @param {String} args.paneId - Locally unique identifier for this pane - used to refer to this pane within an
   *  instance of the ol-side-panel control.
   * @param {String} args.paneUniqId - Globally unique identifier for this pane - used to generate unique DOM element ids.
   * @param {String|external:Element} args.name - Name of this pane - User-facing name of this pane.
   * @param {String|external:Element} args.icon - Icon of this pane - User-facing icon for this pane.
   * @param {Number} args.weight - Weight of this pane - controls the order of
   *  the pane tabs with lower numbers appearing closer to the top and higher
   *  numbers appearing farther down. Panes with a weight >= 100 will have their
   *  icons appear at the bottom of the tab bar.
   */
  constructor({
    sidePanel, paneId, paneUniqId, name, icon, weight,
  }) {
    super({ name, icon, weight });

    this.sidePanel_ = sidePanel;
    this.paneId_ = paneId;
    this.paneUniqId_ = paneUniqId;

    this.element_ = el('div', {
      id: `ol-side-panel-pane-${this.paneUniqId_}`,
      role: 'tabpanel',
      class: 'ol-side-panel-pane',
      tabindex: '0',
      'aria-labelledby': `ol-side-panel-tab-${this.paneUniqId_}`,
    });

    this.headerElement_ = el('h1', { class: 'ol-side-panel-header' });
    this.element_.appendChild(this.headerElement_);

    this.headerElementText_ = document.createElement('span');
    this.headerElementText_.innerHTML = this.get('name');
    this.headerElement_.appendChild(this.headerElementText_);

    this.headerElementCloser_ = el('span', { class: 'ol-side-panel-close' });
    this.headerElementCloser_.innerHTML = '«';
    this.headerElement_.appendChild(this.headerElementCloser_);

    this.headerElementCloser_.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.set('active', false);
    });

    this.on('change:name', () => {
      this.headerElementText_.innerHTML = this.get('name');
    });

    /**
     * @type {Collection<SidePanelWidget>}
     * @private
     */
    this.widgets = new Collection();

    this.widgets.on('add', evt => this.element_.appendChild(evt.element.element_));
    this.widgets.on('remove', evt => this.element_.removeChild(evt.element.element_));

    this.on('change:active', () => {
      if (this.get('active')) {
        if (this.element_.className.search(/\bactive\b/) === -1) {
          this.element_.className += ' active';
        }
      } else {
        this.element_.className = this.element_.className.replace(/\s*\bactive\b/g, '');
      }
    });
  }

  /**
   * Remove this pane from its side panel.
   */
  remove() {
    this.sidePanel_.removePane_(this);
    this.sidePanel_ = undefined;
  }

  /**
   * Add an {@link external:Element|Element} to this pane as a new {@link SidePanelWidget}.
   * @param {external:Element} widgetElement - The element to add as a widget to this pane.
   * @returns {SidePanelWidget} A reference to the newly added widget.
   */
  addWidgetElement(widgetElement) {
    const widget = new SidePanelWidget({ pane: this, element: widgetElement });
    this.widgets.push(widget);
    return widget;
  }

  /**
   * Remove a {@link SidePanelWidget} from this pane.
   * @param {SidePanelWidget} - The widget to remove from this pane.
   * @private
   */
  removeWidget_(widget) {
    this.widgets.remove(widget);
  }

}

export default SidePanelPane;
