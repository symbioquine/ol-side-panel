import el from './el';

/**
 * SidePanelTab references a SidePanelPane and keeps its icon in sync with
 * the pane's properties.
 * @private
 */
class SidePanelTab {
  constructor({ pane }) {
    this.pane_ = pane;

    this.element_ = el('button', {
      id: `ol-side-panel-tab-${this.pane_.paneUniqId_}`,
      role: 'tab',
      'aria-controls': `ol-side-panel-pane-${this.pane_.paneUniqId_}`,
    });

    this.updateName_();
    this.updateIcon_();
    this.updateWeight_();

    this.pane_.on('change:name', () => this.updateName_());
    this.pane_.on('change:icon', () => this.updateIcon_());
    this.pane_.on('change:weight', () => this.updateWeight_());

    this.pane_.on('change:active', () => {
      const isActive = this.pane_.get('active');

      if (isActive) {
        if (this.element_.className.search(/\bactive\b/) === -1) {
          this.element_.className += ' active';
        }
      } else {
        this.element_.className = this.element_.className.replace(/\s*\bactive\b/g, '');
      }
      this.element_.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    this.element_.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.pane_.set('active', !this.pane_.get('active'));
      this.element_.blur();
    });
  }

  static fromPane(pane) {
    const tab = new SidePanelTab({ pane });

    /* eslint-disable-next-line no-param-reassign */
    pane.tabRef_ = tab;

    return tab;
  }

  updateName_() {
    const paneName = this.pane_.get('name');
    this.element_.setAttribute('aria-label', `Tab for map side pane: '${paneName}'`);
  }

  updateIcon_() {
    this.element_.innerHTML = this.pane_.get('icon');
  }

  updateWeight_() {
    this.element_.style.order = this.pane_.get('weight');
  }

}

export default SidePanelTab;
