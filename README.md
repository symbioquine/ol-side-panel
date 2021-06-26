# ol-side-panel

A responsive tabbed left side panel for OpenLayers.

* Docs: [https://symbioquine.github.io/ol-side-panel/latest/docs/](https://symbioquine.github.io/ol-side-panel/latest/docs/)
* Example: [https://symbioquine.github.io/ol-side-panel/latest/](https://symbioquine.github.io/ol-side-panel/latest/)

![image](https://user-images.githubusercontent.com/30754460/123520513-faa39e80-d665-11eb-9b39-394a5cff2464.png)

## Inspiration / Credit

ol-side-panel is inspired by and originally based on the code of [Turbo87/sidebar-v2](https://github.com/Turbo87/sidebar-v2) - also MIT licensed.

## Getting started

```sh
npm i ol-grid
```

```javascript
import SidePanel from 'ol-side-panel';

const sidePanel = new SidePanel();

map.addControl(sidePanel);

const layersPane = sidePanel.definePane({
  paneId: 'layers',
  name: "Layers",
  icon: '<i class="bi bi-layers-half"></i>'
});

const layersGreeting = document.createElement('p');
layersGreeting.innerHTML = "Hi there layers!";

layersPane.addWidgetElement(layersGreeting);
```
