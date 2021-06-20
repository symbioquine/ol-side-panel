/**
 * A wrapper around a DOM {@link external:Element|Element}.
 * @hideconstructor
 */
class SidePanelWidget {
  /**
   * @param {Object} args - constructor args
   * @param {SidePanelPane} args.pane - The pane to which this widget is being added.
   * @param {external:Element} args.element - The element for this widget.
   */
  constructor({ pane, element }) {
    this.pane_ = pane;
    this.element_ = element;
  }

  /**
   * Remove this widget from its pane.
   */
  remove() {
    this.pane_.removeWidget_(this);
    this.pane_ = undefined;
  }

}

export default SidePanelWidget;
