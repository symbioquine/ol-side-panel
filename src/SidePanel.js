import Collection from 'ol/Collection';
import Control from 'ol/control/Control';

import { CLASS_CONTROL, CLASS_UNSELECTABLE } from 'ol/css';

import el from './el';
import SidePanelPane from './SidePanelPane';
import SidePanelTab from './SidePanelTab';

import './SidePanel.css';

/**
 * Top-level {@link external:Control|Control} for ol-side-panel - provides a responsive tabbed left side panel for OpenLayers.
 * @observableProperty {SidePanelPane} activePane - The currently active pane - or null if no pane is active.
 * @extends external:Control
 * @example
 * import { SidePanel } from 'ol-side-panel';
 *
 * const sidePanel = new SidePanel();
 *
 * map.addControl(sidePanel);
 *
 * const layersPane = sidePanel.definePane({
 *   paneId: 'layers',
 *   name: "Layers",
 *   icon: '<i class="bi bi-layers-half"></i>'
 * });
 *
 * const layersGreeting = document.createElement('p');
 * layersGreeting.innerHTML = "Hi there layers!";
 *
 * layersPane.addWidgetElement(layersGreeting);
 */
class SidePanel extends Control {

  constructor() {

    super({
      element: document.createElement('div'),
      activePane: null,
    });

    const { element } = this;
    element.className = `ol-side-panel ${CLASS_UNSELECTABLE} ${CLASS_CONTROL}`;

    window.nextOlSidePanelPaneUniqId = window.nextOlSidePanelPaneUniqId || 0;

    /**
     * @type {external:Collection<SidePanelPane>}
     * @private
     */
    this.panes = new Collection();

    element.appendChild(el('div', { class: 'ol-side-panel-tabs', role: 'tablist' }, (tabList) => {
      this.panes.on('add', (evt) => {
        const pane = evt.element;

        tabList.appendChild(SidePanelTab.fromPane(pane).element_);

        pane.on('change:active', () => {
          if (!pane.get('active') && pane === this.get('activePane')) {
            this.updateActivePane_(null);
          } else if (pane.get('active')) {
            this.updateActivePane_(pane);
          }
        });

      });
      this.panes.on('remove', (evt) => {
        tabList.removeChild(evt.element.tabRef_.element_);
      });

      tabList.appendChild(el('div', { class: 'ol-side-panel-tabs-separator' }));

    }));

    element.appendChild(el('div', { class: 'ol-side-panel-content' }, (sidePanelContent) => {
      this.panes.on('add', evt => sidePanelContent.appendChild(evt.element.element_));
      this.panes.on('remove', (evt) => {
        sidePanelContent.removeChild(evt.element.element_);
        if (evt.element === this.get('activePane')) {
          this.updateActivePane_(null);
        }
      });
    }));

    this.on('change:activePane', () => {
      if (this.get('activePane')) {
        this.getMap().getTargetElement().className = this.getMap().getTargetElement().className.replace(/\bol-side-panel-collapsed\b/g, '');
      } else if (this.getMap().getTargetElement().className.search(/\bol-side-panel-collapsed\b/) === -1) {
        this.getMap().getTargetElement().className += ' ol-side-panel-collapsed';
      }
    });

  }

  /**
   * Defines a new pane.
   * @param {Object} args - pane args
   * @param {String} args.paneId - Locally unique identifier for the pane - used to refer to the pane within an
   *  instance of the ol-side-panel control.
   * @param {String|external:Element} args.name - Name of the pane - User-facing name of this pane.
   * @param {String|external:Element} args.icon - Icon of the pane - User-facing icon for this pane.
   * @param {Number} args.weight - Weight of the pane - controls the order of
   *  the pane tabs with lower numbers appearing closer to the top and higher numbers appearing farther
   *  down. Panes with a weight >= 100 will have their icons appear at the bottom of the tab bar.
   * @returns {SidePanelPane} A reference to the newly defined pane.
   */
  definePane({
    paneId, name, icon, weight,
  }) {
    /* eslint-disable-next-line no-plusplus */
    const paneUniqId = window.nextOlSidePanelPaneUniqId++;
    const pane = new SidePanelPane({
      paneId, paneUniqId, name, icon, weight,
    });
    this.panes.push(pane);
    return pane;
  }

  /**
   * Get the pane with the specified identifier.
   * @param {String} paneId - The identifier of the pane to get - this is the same identifier that was
   *  passed into {@link SidePanel#definePane|definePane}.
   * @returns {SidePanelPane} A reference to the pane.
   */
  getPaneById(paneId) {
    return this.panes.getArray().find(p => p.paneId_ === paneId);
  }

  /**
   * Remove the pane with the specified identifier.
   * @param {String} paneId - The identifier of the pane to remove - this is the same identifier that was
   *  passed into {@link SidePanel#definePane|definePane}.
   */
  removePaneById(paneId) {
    this.removePane_(this.getPaneById(paneId));
  }

  /**
   * Remove the pane with the specified identifier.
   * @param {String} paneId - The identifier of the pane to remove - this is the same identifier that was
   *  passed into {@link SidePanel#definePane|definePane}.
   * @private
   */
  removePane_(pane) {
    this.panes.remove(pane);
  }

  /**
   * Add an HTML element to the named pane as a new {@link SidePanelWidget}.
   * @param {String} paneId The identifier of the pane to add the widget to.
   * @param {external:Element} widgetElement
   * @returns {SidePanelWidget} A reference to the newly added widget.
   */
  addWidgetElement(paneId, widgetElement) {
    return this.getPane(paneId).addWidgetElement(widgetElement);
  }

  updateActivePane_(pane) {
    this.set('activePane', pane);
    this.panes.getArray().filter(p => p !== pane).forEach(p => p.set('active', false));
  }

  /**
   * @param {external:Map} map - The OpenLayers map instance this control is being added to.
   */
  setMap(map) {
    const oldMap = this.getMap();
    if (map === oldMap) {
      return;
    }

    const removeClassFromOldMapTarget = (oldMapTarget) => {
      if (oldMapTarget) {
        oldMapTarget.className.replace(/\bmap-with-ol-side-panel\b/g, '');
      }
    };

    const addClassToNewMapTarget = (newMapTarget) => {
      if (newMapTarget) {

        /* eslint-disable-next-line no-param-reassign */
        newMapTarget.className += ' map-with-ol-side-panel ol-side-panel-collapsed';
      }
    };

    if (oldMap) {
      removeClassFromOldMapTarget(oldMap.getTargetElement());
      // Cleanup the old event listener
      if (this.onMapTargetChange) {
        oldMap.un('change:target', this.onMapTargetChange.listener);
        this.onMapTargetChange = null;
      }
    }
    super.setMap(map);

    if (map) {
      addClassToNewMapTarget(map.getTargetElement());

      const handleMapTargetChange = (evt) => {
        removeClassFromOldMapTarget(evt.oldValue);
        addClassToNewMapTarget(map.getTargetElement());
      };

      this.onMapTargetChange = map.getInteractions().on('change:target', handleMapTargetChange);
    }
  }

}

export default SidePanel;
