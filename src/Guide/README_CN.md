# Guide1

组件使用说明

## api

| 参数 | 说明 | 类型 | 默认值 |
| :------------- | :---------- | :------------ | :------------ |
| components | 自定义组件对象 | xxx | - |
| schema | json配置数据 | xxx | {} |
| status | 步骤状态字典，与subTitle有关 | xxx | [] |


## schema配置

```json
{
  "modules": [ // 表明一共有几个模块，如果有两个级以上，将采用Tabs组件展示
    {
      "title": "这是第一个功能模块", // 自定义标题
      "steps": [ // 步骤条数据，数据基本符合antd4 Steps组件属性items类型，但不一定覆盖全部的items属性，且部分属性会做扩展
        {
          "title": "step1", // 步骤主标题
          "subTitle": { // 步骤子标题，有扩展处理
            "status": 0, // 字典值，与Guide组件的status属性有关
            "component": "Tag" // 该字段可不传入，默认使用antd4 Tag组件展示，如果需要自定义组件，请写明并在Guide组件components属性中传入，目前来看，兼容性不强，建议先只用Tag
          },
          "status": "", // 待考虑，不一定会开放出来
          "description": "", // 可选
          "icon": "" // 待设计，需要看是否有该需求
        }
      ]
    }
  ]
}
```