import React, { ReactNode, Key, useState, useEffect, useMemo } from 'react';
import { Button, Modal, Steps, Tabs, Tag } from 'antd';
import { StepProps } from 'antd';
import './index.less';

type DictType = {
  label: string;
  value: Key;
  status?: string;
}

type IState = {
  value: Key;
  component?: string;
}

type IMedia = {
  component: string;
  props?: {
    [key: string]: unknown;
  };
}

type ISteps = StepProps & {
  state: IState;
  media: IMedia;
}

type ModuleType = {
  title: ReactNode;
  steps: ISteps[];
}

interface ISchema {
  modules: ModuleType[];
}

export interface GuideProps {
  /** 自定义组件 */
  components?: any;
  /** json配置 */
  schema: ISchema;
  /** 步骤状态字典 */
  status: DictType[];
}

interface ModuleBlockProps {
  components: any;
  dataSource: ModuleType[];
  /** 步骤状态字典 */
  status?: DictType[];
  onClose: () => void;
}

// 字典数据取值
const dicts = (dicts: DictType[], value: React.Key) => {
  return dicts.filter(item => item.value === value)[0]?.label || ""
}

const ModuleBlock: React.FC<ModuleBlockProps> = props => {
  const [currentModule, setCurrentModule] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const { dataSource = [], components, status = [], onClose } = props;

  // 将subTitle属性转换成Steps组件所需要的形式
  const transferSteps = (data: ISteps[]) => {
    return data.map((item, idx) => {
      if(currentStep !== idx) {
        item.status = 'wait'
      } else {
        item.status = 'process'
      }
      const { component, ...otherProps } = item.state;
      const Comp = components[component || "Tag"];
      item.subTitle = <Comp {...otherProps}>{dicts(status, item.state.value)}</Comp>;
      return item;
    })
  }

  const stepsOnChange = (value: number) => {
    setCurrentStep(value);
  };

  const renderBlock = (data: ModuleType) => {
    const { title, steps } = data;
    return (
      <div className='guide-wrap-block'>
        <div>{title}</div>
        <Steps
          current={currentStep}
          onChange={stepsOnChange}
          direction="vertical"
          items={transferSteps(steps)}
        />
      </div>
    )
  }

  const tabsOnChange = (key: string) => {
    setCurrentModule(Number(key));
    setCurrentStep(0);
  };

  const renderTabs = (data: ModuleType[]) => {
    const newData = data?.map((item, idx) => ({
      label: item.title,
      key: String(idx),
      children: renderBlock(item)
    }))
    return (
      <Tabs
        type="card"
        activeKey={String(currentModule)}
        onChange={tabsOnChange}
        items={newData} />
    )
  }

  const renderModule = (data: ModuleType[]) => {
    if (data.length === 1) {
      return renderBlock(data[0])
    } else if (data.length > 1) {
      return renderTabs(data)
    } else {
      return null;
    }
  }

  const prevOnClick = () => {
    if (currentModule === 0 && currentStep === 0) {
      return
    }
    if (currentModule > 0 && currentStep === 0) {
      const goStep = dataSource[currentModule - 1].steps.length - 1
      setCurrentStep(goStep)
      setCurrentModule(currentModule - 1)
    } else {
      setCurrentStep(currentStep - 1)
    }
  }

  const nextOnClick = () => {
    if (currentModule === dataSource.length - 1 && currentStep === dataSource[currentModule].steps.length - 1) {
      return
    }
    if (currentModule < dataSource.length - 1 && currentStep === dataSource[currentModule].steps.length - 1) {
      setCurrentStep(0)
      setCurrentModule(currentModule + 1)
    } else {
      setCurrentStep(currentStep + 1)
    }
  }

  const renderOperation = () => {
    const prev = <Button key="prev" onClick={prevOnClick}>上一步</Button>
    const next = <Button key="next" onClick={nextOnClick}>下一步</Button>
    const finish = <Button key="finish" onClick={onClose}>完成</Button>

    let btns = []
    if (currentModule === 0 && currentStep === 0) {
      btns = [next]
    } else if (currentModule === dataSource.length - 1 && currentStep === dataSource[currentModule].steps.length - 1) {
      btns = [prev, finish]
    } else {
      btns = [prev, next]
    }
    return btns
  }

  const renderMedia = () => {
    const mediaData = dataSource[currentModule]?.steps[currentStep].media;
    const Comp = components[mediaData.component];
    return <Comp {...mediaData.props} />
  }

  return (
    <div className='guide-wrap'>
      <div className='guide-wrap-module'>
        {renderModule(dataSource)}
        {renderOperation()}
      </div>
      <div className='guide-wrap-media'>
        {renderMedia()}
      </div>
    </div>
  )
}

const Guide: React.FC<GuideProps> = props => {
  const { status, components, schema } = props;
  const { modules } = schema;
  const [open, setOpen] = useState(false);

  const mergedComponents = {
    ...components,
    Tag,
    Img: (props: any) => <img {...props} />,
    Video: (props: any) => <video loop muted autoPlay {...props} />
  }

  return (
    <div className='guide'>
      <Button onClick={() => setOpen(true)}>引导</Button>
      <Modal
        width={960}
        maskClosable={false}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        open={open}>
        <ModuleBlock 
          dataSource={modules} 
          components={mergedComponents} 
          status={status} 
          onClose={() => setOpen(false)}/>
      </Modal>
    </div>
  )
}

export default Guide;