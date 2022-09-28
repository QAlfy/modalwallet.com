var Haiku = require("@haiku/core");
var _code_clock_code = require("./../clock/code.js");
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
      "haiku:Path-faea9df3bc3428bf": {
        d:
          "M183.781,263.006h-7.545c-4.465,0-8.085-3.618-8.085-8.083s3.621-8.084,8.085-8.084h7.545\r\n\t\tc4.465,0,8.083,3.62,8.083,8.084S188.246,263.006,183.781,263.006z",
        fill: "#FFFFFF"
      },
      "haiku:Main-03757d2ca1026e0a": {
        "style.WebkitTapHighlightColor": "rgba(0,0,0,0)",
        "style.position": "relative",
        "style.overflowX": "hidden",
        "style.overflowY": "hidden",
        "sizeAbsolute.x": 1920,
        "sizeAbsolute.y": 1080,
        "sizeMode.x": 1,
        "sizeMode.y": 1,
        "sizeMode.z": 1,
        "style.backgroundColor": {
          "0": { value: "#000", edited: true },
          "39333": { value: "#000", edited: true }
        }
      },
      "haiku:Bob-f881ee4c2535f493": {
        "translation.x": 1665.92,
        "sizeAbsolute.y": 100,
        "style.padding": "0",
        "style.border": "0",
        "sizeMode.x": 1,
        "sizeMode.y": 1,
        "sizeAbsolute.x": 100,
        "style.margin": "0",
        "style.position": "absolute",
        "translation.y": 262.4249933359623,
        "origin.x": 0.63,
        "origin.y": 0.77,
        "style.zIndex": { "0": { value: 2, edited: true } },
        opacity: {
          "0": { value: 0, edited: true },
          "2350": { value: 0, edited: true, curve: [0.95, 0.05, 0.655, 0.25] },
          "2500": { value: 1, edited: true }
        },
        "scale.x": 3,
        "scale.y": 3
      },
      "haiku:Layer-1-Cake-4d555ea7e02ff517": {
        "sizeMode.x": 1,
        x: "0px",
        viewBox: "0 0 512 512",
        "xml:space": "preserve",
        enableBackground: "new 0 0 512 512",
        "style.position": "absolute",
        "style.margin": "0",
        "style.padding": "0",
        "style.border": "0",
        y: "0px",
        "sizeMode.y": 1,
        "sizeAbsolute.x": 512,
        "sizeAbsolute.y": 512,
        "translation.x": 222.16796875,
        "translation.y": 224.925,
        "style.zIndex": 3,
        "scale.x": {
          "0": { value: 0, edited: true },
          "2717": { value: 0, edited: true, curve: "easeInQuad" },
          "6300": { value: 0.6, edited: true }
        },
        "scale.y": {
          "0": { value: 0, edited: true },
          "2667": { value: 0, edited: true, curve: "easeInQuad" },
          "6300": { value: 0.6, edited: true }
        },
        opacity: {
          "0": { value: 0, edited: true },
          "2783": { value: 0, edited: true, curve: [1, 0.405, 0.19, 0.4] },
          "5833": { value: 1, edited: true }
        }
      },
      "haiku:Rect-a24eb423b5c8c4ce": {
        x: 247.912,
        y: 136.882,
        width: 16.168,
        height: 41.796,
        fill: "#8DCCD3"
      },
      "haiku:Path-acb5b6e5bd02239e": {
        d:
          "M255.999,144.69c-2.379,0-4.657-0.955-6.338-2.652l-61.876-62.391\r\n\tc-8.749-8.805-13.569-20.524-13.569-32.983c0-12.466,4.82-24.182,13.569-32.998C196.53,4.855,208.163,0,220.535,0\r\n\tc12.369,0,24.002,4.855,32.749,13.665l2.717,2.741l2.721-2.741C267.467,4.855,279.097,0,291.471,0\r\n\tc12.361,0,23.998,4.855,32.747,13.665c8.743,8.817,13.565,20.532,13.565,32.998c0,12.46-4.822,24.179-13.565,32.992l-61.876,62.382\r\n\tC260.661,143.735,258.379,144.69,255.999,144.69z",
        fill: "#FF8163"
      },
      "haiku:Group-e45a003cf909d7ae": { opacity: 0.1 },
      "haiku:Path-2a80a54758d14f79": {
        d:
          "M221.336,68.33c-8.751-8.805-13.569-20.525-13.569-32.984c0-12.466,4.818-24.181,13.569-32.998\r\n\t\tc0.771-0.776,1.572-1.511,2.385-2.225C222.665,0.049,221.604,0,220.535,0c-12.372,0-24.004,4.855-32.749,13.665\r\n\t\tc-8.749,8.817-13.569,20.532-13.569,32.998c0,12.46,4.82,24.179,13.569,32.983l61.876,62.391c1.681,1.697,3.959,2.652,6.338,2.652\r\n\t\ts4.661-0.955,6.343-2.652l16.046-16.178L221.336,68.33z"
      },
      "haiku:Path-88a4f881bf1167d6": {
        d:
          "M302.771,200.57c0,7.639-6.249,13.832-13.961,13.832H223.19c-7.71,0-13.961-6.194-13.961-13.832\r\n\tv-13.832c0-7.639,6.251-13.832,13.961-13.832h65.62c7.712,0,13.961,6.194,13.961,13.832v13.832H302.771z",
        fill: "#C9F0F4"
      },
      "haiku:Path-1cec102a8d9ef538": {
        d:
          "M243.065,200.57v-13.832c0-7.639,6.251-13.832,13.961-13.832H223.19\r\n\tc-7.71,0-13.961,6.194-13.961,13.832v13.832c0,7.639,6.251,13.832,13.961,13.832h33.837\r\n\tC249.316,214.403,243.065,208.209,243.065,200.57z",
        opacity: 0.1,
        enableBackground: "new"
      },
      "haiku:Path-7e7fcca3154dbf07": {
        d:
          "M406.946,347.207c0,7.609-6.282,13.832-13.961,13.832H119.013c-7.68,0-13.961-6.223-13.961-13.832\r\n\tV218.226c0-7.607,6.282-13.831,13.961-13.831h273.972c7.68,0,13.961,6.224,13.961,13.831V347.207z",
        fill: "#FFECD9"
      },
      "haiku:Path-d89f5bbdbf247eed": {
        d:
          "M392.986,204.394H119.013c-7.68,0-13.961,6.224-13.961,13.831v65.774\r\n\tc0.259,0.004,0.518,0.019,0.777,0.019c16.23,0,30.341-8.988,37.543-22.212c7.202,13.224,21.311,22.212,37.541,22.212\r\n\tc16.232,0,30.343-8.988,37.543-22.212c7.202,13.224,21.312,22.212,37.543,22.212s30.339-8.988,37.543-22.212\r\n\tc7.202,13.224,21.311,22.212,37.543,22.212c16.23,0,30.341-8.988,37.541-22.212c7.202,13.224,21.311,22.212,37.543,22.212\r\n\tc0.261,0,0.518-0.016,0.777-0.019v-65.774C406.946,210.618,400.665,204.394,392.986,204.394z",
        fill: "#FFAA99"
      },
      "haiku:Path-997b3281db400511": {
        d:
          "M144.977,239.293h-7.545c-4.465,0-8.085-3.62-8.085-8.084s3.621-8.083,8.085-8.083h7.545\r\n\t\tc4.465,0,8.083,3.618,8.083,8.083C153.06,235.674,149.442,239.293,144.977,239.293z",
        fill: "#FFFFFF"
      },
      "haiku:Alice-440ec2010c54d918": {
        "style.margin": "0",
        "translation.x": 218.16790771484375,
        "style.padding": "0",
        "style.border": "0",
        "sizeMode.x": 1,
        "sizeMode.y": 1,
        "sizeAbsolute.x": "auto",
        "sizeAbsolute.y": "auto",
        "style.position": "absolute",
        "translation.y": 869,
        "origin.x": 0.5,
        "origin.y": 0.5,
        "style.zIndex": { "0": { value: 1, edited: true } },
        "scale.x": 10,
        "scale.y": 10,
        playback: { "0": { value: "loop", edited: true } },
        opacity: {
          "0": { value: 0, edited: true, curve: "easeInExpo" },
          "650": { value: 1, edited: true }
        }
      },
      "haiku:Path-614685ee2545ab6e": {
        d:
          "M149.914,347.207V218.226c0-7.607,6.282-13.831,13.961-13.831h-44.862\r\n\tc-7.68,0-13.961,6.224-13.961,13.831v128.981c0,7.609,6.282,13.832,13.961,13.832h44.862\r\n\tC156.195,361.039,149.914,354.816,149.914,347.207z",
        opacity: 0.1,
        enableBackground: "new"
      },
      "haiku:Path-fabad0c2ab69fc53": {
        d:
          "M218.273,239.293h-7.545c-4.465,0-8.083-3.62-8.083-8.084s3.618-8.083,8.083-8.083h7.545\r\n\t\tc4.465,0,8.085,3.618,8.085,8.083C226.359,235.674,222.738,239.293,218.273,239.293z",
        fill: "#FFFFFF"
      },
      "haiku:Path-50b782a78a79b998": {
        d:
          "M260.308,263.006h-7.545c-4.465,0-8.083-3.618-8.083-8.083s3.618-8.084,8.083-8.084h7.545\r\n\t\tc4.465,0,8.085,3.62,8.085,8.084S264.772,263.006,260.308,263.006z",
        fill: "#FFFFFF"
      },
      "haiku:Path-055b42e544a85a27": {
        d:
          "M294.802,239.293h-7.547c-4.464,0-8.083-3.62-8.083-8.084s3.621-8.083,8.083-8.083h7.547\r\n\t\tc4.465,0,8.083,3.618,8.083,8.083C302.885,235.674,299.267,239.293,294.802,239.293z",
        fill: "#FFFFFF"
      },
      "haiku:Path-55e953808aaa0831": {
        d:
          "M335.765,263.006h-7.547c-4.465,0-8.083-3.618-8.083-8.083s3.618-8.084,8.083-8.084h7.547\r\n\t\tc4.465,0,8.083,3.62,8.083,8.084S340.23,263.006,335.765,263.006z",
        fill: "#FFFFFF"
      },
      "haiku:Path-417b4e2b6a1c4037": {
        d:
          "M370.257,239.293h-7.545c-4.466,0-8.083-3.62-8.083-8.084s3.618-8.083,8.083-8.083h7.545\r\n\t\tc4.465,0,8.083,3.618,8.083,8.083C378.34,235.674,374.722,239.293,370.257,239.293z",
        fill: "#FFFFFF"
      },
      "haiku:Path-dfa33bc602793e19": {
        d:
          "M437.251,477.772c0,7.609-6.282,13.832-13.959,13.832H88.709c-7.68,0-13.963-6.223-13.963-13.832\r\n\tV349.997c0-7.607,6.284-13.832,13.963-13.832h334.582c7.678,0,13.959,6.226,13.959,13.832v127.775H437.251z",
        fill: "#FFECD9"
      },
      "haiku:Path-0ebca61a56f071d9": {
        d:
          "M423.291,336.165H88.709c-7.68,0-13.963,6.226-13.963,13.832v59.863\r\n\tc2.728,0.466,5.531,0.723,8.392,0.723c18.684,0,34.927-10.346,43.216-25.57c8.29,15.223,24.531,25.57,43.214,25.57\r\n\ts34.927-10.346,43.214-25.57c8.29,15.223,24.533,25.57,43.216,25.57s34.923-10.346,43.216-25.57\r\n\tc8.29,15.223,24.531,25.57,43.214,25.57c18.683,0,34.925-10.346,43.214-25.57c8.29,15.223,24.533,25.57,43.216,25.57\r\n\tc2.861,0,5.663-0.257,8.389-0.723v-59.863C437.251,342.39,430.969,336.165,423.291,336.165z",
        fill: "#FFAA99"
      },
      "haiku:Path-d9fc2313dc49d12f": {
        d:
          "M119.608,477.772V349.997c0-7.607,6.284-13.832,13.963-13.832H88.709\r\n\tc-7.68,0-13.963,6.226-13.963,13.832v127.775c0,7.609,6.284,13.832,13.963,13.832h44.862\r\n\tC125.891,491.605,119.608,485.381,119.608,477.772z",
        opacity: 0.1,
        enableBackground: "new"
      },
      "haiku:Path-8c3830bd9967f9da": {
        d:
          "M503.248,505.084c0,3.806-3.141,6.916-6.982,6.916H15.733c-3.839,0-6.982-3.112-6.982-6.916v-31.765\r\n\tc0-3.802,3.143-6.915,6.982-6.915h480.535c3.841,0,6.982,3.113,6.982,6.915v31.765H503.248z",
        fill: "#C9F0F4"
      },
      "haiku:Path-ac4822c9bb99086a": {
        d:
          "M503.248,505.084c0,3.806-3.141,6.916-6.982,6.916H15.733c-3.839,0-6.982-3.112-6.982-6.916v-31.765\r\n\tc0-3.802,3.143-6.915,6.982-6.915h480.535c3.841,0,6.982,3.113,6.982,6.915v31.765H503.248z",
        fill: "#8DCCD3"
      },
      "haiku:Path-9f2033d29999bdf8": {
        d:
          "M65.212,505.084v-31.765c0-3.802,3.141-6.915,6.982-6.915H15.733\r\n\tc-3.839,0-6.982,3.113-6.982,6.915v31.765c0,3.806,3.143,6.916,6.982,6.916h56.461C68.353,512,65.212,508.888,65.212,505.084z",
        opacity: 0.1,
        enableBackground: "new"
      },
      "haiku:Clock-23c98d8771cf0034": {
        "translation.x": 1677.72,
        "style.position": "absolute",
        "style.padding": "0",
        "style.border": "0",
        "sizeMode.x": 1,
        "sizeMode.y": 1,
        "sizeAbsolute.x": 100,
        "sizeAbsolute.y": 100,
        "style.margin": "0",
        "translation.y": 873.3,
        "origin.x": {
          "0": { value: 0.5, edited: true, curve: "easeInOutQuad" },
          "6067": { value: 0.511 }
        },
        "origin.y": {
          "0": { value: 0.5, edited: true, curve: "easeInOutQuad" },
          "6067": { value: 0.516 }
        },
        "style.zIndex": 4,
        opacity: {
          "0": { value: 0, edited: true },
          "2650": { value: 0, edited: true, curve: [0.76, 0.12, 0.68, 0.53] },
          "5967": { value: 1, edited: true }
        },
        "scale.x": {
          "0": { value: 0, edited: true },
          "2650": { value: 0, edited: true, curve: [0.76, 0.12, 0.68, 0.53] },
          "6067": { value: 3, edited: true }
        },
        "scale.y": {
          "0": { value: 0, edited: true },
          "2650": { value: 0, edited: true, curve: [0.76, 0.12, 0.68, 0.53] },
          "6067": { value: 3, edited: true }
        }
      },
      "haiku:Layer-1-Chef-6214dedd32e10597": {
        x: "0px",
        y: "0px",
        viewBox: "0 0 512.001 512.001",
        "xml:space": "preserve",
        enableBackground: "new 0 0 512.001 512.001",
        "style.position": "absolute",
        "style.margin": "0",
        "style.padding": "0",
        "style.border": "0",
        "sizeMode.x": 1,
        "sizeMode.y": 1,
        "sizeAbsolute.x": 512.001,
        "sizeAbsolute.y": 512.001,
        "translation.x": 222.668,
        "translation.y": 624,
        "style.zIndex": 5,
        "scale.x": 0.5,
        "scale.y": 0.5,
        opacity: {
          "0": { value: 0, edited: true },
          "5233": { value: 0, edited: true, curve: "easeInQuint" },
          "5883": { value: 1, edited: true }
        }
      },
      "haiku:Path-6163236b2ac7284f": {
        d:
          "M97.343,364.929v99.195h317.316V299.716c53.921-0.963,97.343-44.944,97.343-99.094\r\n\tc0-54.753-44.386-99.139-99.139-99.139c-22.928,0-44.021,7.805-60.815,20.873c-10.961-42.824-49.805-74.483-96.046-74.483\r\n\ts-85.085,31.659-96.046,74.483c-16.794-13.068-37.887-20.873-60.815-20.873C44.386,101.483,0,145.869,0,200.622\r\n\tc0,54.151,43.422,98.131,97.343,99.094v34.971V364.929z",
        fill: "#F2F2F2"
      },
      "haiku:Path-b27fa0144dfe3aad": {
        d:
          "M142.703,334.687v-34.971c-53.921-0.963-97.343-44.944-97.343-99.094\r\n\tc0-46.947,32.643-86.245,76.463-96.503c-7.287-1.711-14.876-2.636-22.685-2.636C44.386,101.483,0,145.869,0,200.622\r\n\tc0,54.151,43.422,98.131,97.343,99.094v34.971v30.242v99.195h45.361v-99.195V334.687z",
        fill: "#E6E6E6"
      },
      "haiku:Rect-3a74bbaabcdcb3b3": {
        x: 97.344,
        y: 398.906,
        width: 317.314,
        height: 65.223,
        fill: "#F97E62"
      },
      "haiku:Rect-c59b10e083ceefc8": {
        x: 97.344,
        y: 398.906,
        width: 45.361,
        height: 65.223,
        fill: "#E86B56"
      }
    }
  },
  template: {
    elementName: "div",
    attributes: { "haiku-id": "Main-03757d2ca1026e0a", "haiku-title": "Main" },
    children: [
      {
        elementName: "svg",
        attributes: {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          "haiku-id": "Layer-1-Chef-6214dedd32e10597",
          "haiku-title": "chef",
          "haiku-source": "designs/chef.svg",
          id: "Layer_1"
        },
        children: [
          {
            elementName: "path",
            attributes: { "haiku-id": "Path-6163236b2ac7284f" },
            children: []
          },
          {
            elementName: "path",
            attributes: { "haiku-id": "Path-b27fa0144dfe3aad" },
            children: []
          },
          {
            elementName: "rect",
            attributes: { "haiku-id": "Rect-3a74bbaabcdcb3b3" },
            children: []
          },
          {
            elementName: "rect",
            attributes: { "haiku-id": "Rect-c59b10e083ceefc8" },
            children: []
          }
        ]
      },
      {
        elementName: _code_clock_code,
        attributes: {
          "haiku-id": "Clock-23c98d8771cf0034",
          "haiku-var": "_code_clock_code",
          "haiku-title": "Clock",
          "haiku-source": "./code/clock/code.js"
        },
        children: []
      },
      {
        elementName: "svg",
        attributes: {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          "haiku-id": "Layer-1-Cake-4d555ea7e02ff517",
          "haiku-title": "cake",
          "haiku-source": "designs/cake.svg",
          id: "Layer_1"
        },
        children: [
          {
            elementName: "rect",
            attributes: { "haiku-id": "Rect-a24eb423b5c8c4ce" },
            children: []
          },
          {
            elementName: "path",
            attributes: { "haiku-id": "Path-acb5b6e5bd02239e" },
            children: []
          },
          {
            elementName: "g",
            attributes: { "haiku-id": "Group-e45a003cf909d7ae" },
            children: [
              {
                elementName: "path",
                attributes: { "haiku-id": "Path-2a80a54758d14f79" },
                children: []
              }
            ]
          },
          {
            elementName: "path",
            attributes: { "haiku-id": "Path-88a4f881bf1167d6" },
            children: []
          },
          {
            elementName: "path",
            attributes: { "haiku-id": "Path-1cec102a8d9ef538" },
            children: []
          },
          {
            elementName: "path",
            attributes: { "haiku-id": "Path-7e7fcca3154dbf07" },
            children: []
          },
          {
            elementName: "path",
            attributes: { "haiku-id": "Path-d89f5bbdbf247eed" },
            children: []
          },
          {
            elementName: "g",
            attributes: { "haiku-id": "Group-1cbc9aa65eb540e1" },
            children: [
              {
                elementName: "path",
                attributes: { "haiku-id": "Path-997b3281db400511" },
                children: []
              },
              {
                elementName: "path",
                attributes: { "haiku-id": "Path-faea9df3bc3428bf" },
                children: []
              }
            ]
          },
          {
            elementName: "path",
            attributes: { "haiku-id": "Path-614685ee2545ab6e" },
            children: []
          },
          {
            elementName: "g",
            attributes: { "haiku-id": "Group-82f04eb6b8bf12a5" },
            children: [
              {
                elementName: "path",
                attributes: { "haiku-id": "Path-fabad0c2ab69fc53" },
                children: []
              },
              {
                elementName: "path",
                attributes: { "haiku-id": "Path-50b782a78a79b998" },
                children: []
              },
              {
                elementName: "path",
                attributes: { "haiku-id": "Path-055b42e544a85a27" },
                children: []
              },
              {
                elementName: "path",
                attributes: { "haiku-id": "Path-55e953808aaa0831" },
                children: []
              },
              {
                elementName: "path",
                attributes: { "haiku-id": "Path-417b4e2b6a1c4037" },
                children: []
              }
            ]
          },
          {
            elementName: "path",
            attributes: { "haiku-id": "Path-dfa33bc602793e19" },
            children: []
          },
          {
            elementName: "path",
            attributes: { "haiku-id": "Path-0ebca61a56f071d9" },
            children: []
          },
          {
            elementName: "path",
            attributes: { "haiku-id": "Path-d9fc2313dc49d12f" },
            children: []
          },
          {
            elementName: "path",
            attributes: { "haiku-id": "Path-8c3830bd9967f9da" },
            children: []
          },
          {
            elementName: "path",
            attributes: { "haiku-id": "Path-ac4822c9bb99086a" },
            children: []
          },
          {
            elementName: "path",
            attributes: { "haiku-id": "Path-9f2033d29999bdf8" },
            children: []
          }
        ]
      },
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
