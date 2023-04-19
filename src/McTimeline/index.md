# McTimeline

This is an example component.

```jsx
import { McTimeline } from 'antd-components';
import oneSvg from 'antd-components/assets/one.svg';
import twoSvg from 'antd-components/assets/two.svg';

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
    dot: <img src={oneSvg} width={40} height={40} />,
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
    dot: <img src={twoSvg} width={40} height={40} />,
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
    dot: <img src={oneSvg} width={40} height={40} />,
  },
  {
    content: '192.168.239.119:80',
    description: '2023-04-18 09:00:00',
    tip: [
      { label: '应用名称', value: 'app' },
      { label: '应用地址', value: 'han' },
      { label: 'API URL', value: '192.168xxxxx' },
      { label: '访问源IP端口', value: '5555' },
      {
        label: '访问源MAC',
        value: '18:ACxxxxxx18:ACxxxxxx18:ACxxxxxx18:ACxxxxxx18:ACxxxxxx',
      },
      { label: '应用账户', value: 'root' },
      { label: '发生时间', value: '2023-04-18 10:00:00' },
    ],
    dot: <img src={twoSvg} width={40} height={40} />,
  },
];

export default () => <McTimeline items={data} />;
```
