# Guide

This is an example component.

```jsx
import { Guide } from 'antd-components';
const json = {
  "modules": [
    {
      "title": "功能模块1",
      "steps": [
        {
          "title": "step1-1",
          "state": {
            "value": 0,
            "component": "Tag"
          },
          "media": {
            "component": "Img",
            "props": {
              "src": "https://guostz.github.io/Tuan/images/assets/1.png"
            }
          }
        },
        {
          "title": "step1-2",
          "state": {
            "value": 1
          },
          "media": {
            "component": "Video",
            "props": {
              "src": "https://guostz.github.io/Tuan/images/assets/test2.mp4"
            }
          }
        },
        {
          "title": "step1-3",
          "state": {
            "value": 0
          },
          "media": {
            "component": "Img",
            "props": {
              "src": "https://guostz.github.io/Tuan/images/assets/3.png"
            }
          }
        }
      ]
    },
    {
      "title": "功能模块2",
      "steps": [
        {
          "title": "step2-1",
          "state": {
            "value": 0
          },
          "media": {
            "component": "Img",
            "props": {
              "src": "https://guostz.github.io/Tuan/images/assets/4.png"
            }
          }
        },
        {
          "title": "step2-2",
          "state": {
            "value": 1
          },
          "media": {
            "component": "Img",
            "props": {
              "src": "https://guostz.github.io/Tuan/images/assets/5.png"
            }
          }
        },
        {
          "title": "step2-3",
          "state": {
            "value": 0
          },
          "media": {
            "component": "Img",
            "props": {
              "src": "https://guostz.github.io/Tuan/images/assets/6.png"
            }
          }
        },
        {
          "title": "step2-4",
          "state": {
            "value": 2
          },
          "media": {
            "component": "Video",
            "props": {
              "src": "https://guostz.github.io/Tuan/images/assets/test6.mp4"
            }
          }
        }
      ]
    }
  ]
 }


const arr = [
  {label: "未设置", value: 0},
  {label: "已设置", value: 1},
  {label: "已断开", value: 2},
]

export default () => <Guide schema={json} status={arr}/>
```