var Haiku = require("@haiku/core");
var _code_bob_code = require("./../bob/code.js");
var _code_alice_code = require("./../alice/code.js");
module.exports = {
  metadata: {
    username: "user@haiku.ai",
    uuid: "HAIKU_SHARE_UUID",
    organization: "Haiku",
    project: "modal",
    branch: "master",
    folder: "/home/nico/Documents/modal",
    version: "0.0.0",
    root: "HAIKU_CDN_PROJECT_ROOT",
    core: "5.1.2",
    title: "Main",
    type: "haiku",
    relpath: "code/main/code.js"
  },
  options: {},
  states: {},
  eventHandlers: {},
  timelines: {
    Default: {
      "haiku:Main-03757d2ca1026e0a": {
        "style.WebkitTapHighlightColor": "rgba(0,0,0,0)",
        "style.position": "relative",
        "style.overflowX": "hidden",
        "style.overflowY": "hidden",
        "sizeAbsolute.x": 550,
        "sizeAbsolute.y": 400,
        "sizeMode.x": 1,
        "sizeMode.y": 1,
        "sizeMode.z": 1,
        "style.backgroundColor": {
          "0": { value: "#000", edited: true },
          "39333": { value: "#000", edited: true }
        }
      },
      "haiku:Alice-440ec2010c54d918": {
        "style.margin": "0",
        "translation.x": {
          "0": { value: 99.502, edited: true },
          "4267": { value: 99.502, edited: true }
        },
        "style.padding": "0",
        "style.border": "0",
        "sizeMode.x": 1,
        "sizeMode.y": 1,
        "sizeAbsolute.x": "auto",
        "sizeAbsolute.y": "auto",
        "style.position": "absolute",
        "translation.y": {
          "0": { value: 200.00000000000003, edited: true },
          "4267": {
            value: 200.00000000000003,
            edited: true,
            curve: [0.405, 0.445, 0.265, 0.755]
          },
          "5567": { value: 317, edited: true }
        },
        "origin.x": 0.5,
        "origin.y": 0.5,
        "style.zIndex": { "0": { value: 1, edited: true } },
        "scale.x": 3.361,
        "scale.y": 3.389,
        playback: { "0": { value: "loop", edited: true } },
        opacity: {
          "0": { value: 0, edited: true, curve: "easeInExpo" },
          "650": { value: 1, edited: true }
        }
      },
      "haiku:Bob-f881ee4c2535f493": {
        "translation.x": {
          "0": { value: 438, edited: true },
          "4267": { value: 438, edited: true }
        },
        "sizeAbsolute.y": 100,
        "style.padding": "0",
        "style.border": "0",
        "sizeMode.x": 1,
        "sizeMode.y": 1,
        "sizeAbsolute.x": 100,
        "style.margin": "0",
        "style.position": "absolute",
        "translation.y": {
          "0": { value: 212, edited: true },
          "4267": {
            value: 212,
            edited: true,
            curve: [0.54, 0.83, 0.755, 0.315]
          },
          "5567": { value: 107 }
        },
        "origin.x": 0.63,
        "origin.y": 0.77,
        "style.zIndex": { "0": { value: 2, edited: true } },
        opacity: {
          "0": { value: 0, edited: true },
          "2350": { value: 0, edited: true, curve: [0.95, 0.05, 0.655, 0.25] },
          "2500": { value: 1, edited: true }
        },
        "scale.x": 1,
        "scale.y": 1
      }
    }
  },
  template: {
    elementName: "div",
    attributes: { "haiku-id": "Main-03757d2ca1026e0a", "haiku-title": "Main" },
    children: [
      {
        elementName: _code_bob_code,
        attributes: {
          "haiku-id": "Bob-f881ee4c2535f493",
          "haiku-var": "_code_bob_code",
          "haiku-title": "Bob",
          "haiku-source": "./code/bob/code.js"
        },
        children: []
      },
      {
        elementName: _code_alice_code,
        attributes: {
          "haiku-id": "Alice-440ec2010c54d918",
          "haiku-var": "_code_alice_code",
          "haiku-title": "Alice",
          "haiku-source": "./code/alice/code.js"
        },
        children: []
      }
    ]
  }
};
