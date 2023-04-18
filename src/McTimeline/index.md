# McTimeline

This is an example component.

```jsx
import { McTimeline } from 'antd-components';

const data = [
  {
    content: '192.168.239.119:80',
    description: '2023-04-18 09:00:00',
    tip: [
      { label: '应用名称', value: 'app' },
      { label: '应用地址', value: 'han' },
      { label: 'API URL', value: '192.168xxxxx' },
      { label: '访问源IP端口', value: '5555' },
      { label: '访问源MAC', value: '18:ACxxxxxx' },
      { label: '应用账户', value: 'root' },
      { label: '发生时间', value: '2023-04-18 10:00:00' },
    ],
    dot: (
      <img
        src="https://guostz.github.io/Tuan/images/assets/1.png"
        width={20}
        height={20}
      />
    ),
  },
  {
    content: '192.168.239.119:80',
    description: '2023-04-18 09:00:00',
    tip: [
      { label: '应用名称', value: 'app' },
      { label: '应用地址', value: 'han' },
      { label: 'API URL', value: '192.168xxxxx' },
      { label: '访问源IP端口', value: '5555' },
      { label: '访问源MAC', value: '18:ACxxxxxx' },
      { label: '应用账户', value: 'root' },
      { label: '发生时间', value: '2023-04-18 10:00:00' },
    ],
    dot: (
      <img
        src="https://guostz.github.io/Tuan/images/assets/2.png"
        width={20}
        height={20}
      />
    ),
  },
  {
    content: '192.168.239.119:80',
    description: '2023-04-18 09:00:00',
    tip: [
      { label: '应用名称', value: 'app' },
      { label: '应用地址', value: 'han' },
      { label: 'API URL', value: '192.168xxxxx' },
      { label: '访问源IP端口', value: '5555' },
      { label: '访问源MAC', value: '18:ACxxxxxx' },
      { label: '应用账户', value: 'root' },
      { label: '发生时间', value: '2023-04-18 10:00:00' },
    ],
    dot: (
      <img
        src="https://guostz.github.io/Tuan/images/assets/4.png"
        width={20}
        height={20}
      />
    ),
  },
  {
    content: '192.168.239.119:80',
    description: '2023-04-18 09:00:00',
    tip: [
      { label: '应用名称', value: 'app' },
      { label: '应用地址', value: 'han' },
      { label: 'API URL', value: '192.168xxxxx' },
      { label: '访问源IP端口', value: '5555' },
      { label: '访问源MAC', value: '18:ACxxxxxx' },
      { label: '应用账户', value: 'root' },
      { label: '发生时间', value: '2023-04-18 10:00:00' },
    ],
    dot: (
      <img
        src="https://guostz.github.io/Tuan/images/assets/3.png"
        width={20}
        height={20}
      />
    ),
  },
  {
    content: '192.168.239.119:80',
    description: '2023-04-18 09:00:00',
    tip: [
      { label: '应用名称', value: 'app' },
      { label: '应用地址', value: 'han' },
      { label: 'API URL', value: '192.168xxxxx' },
      { label: '访问源IP端口', value: '5555' },
      { label: '访问源MAC', value: '18:ACxxxxxx' },
      { label: '应用账户', value: 'root' },
      { label: '发生时间', value: '2023-04-18 10:00:00' },
    ],
    dot: (
      <img
        src="https://guostz.github.io/Tuan/images/assets/3.png"
        width={20}
        height={20}
      />
    ),
  },
];

export default () => <McTimeline items={data} />;
```
