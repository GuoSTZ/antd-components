import { Descriptions, Timeline, Tooltip } from 'antd';
import { TimeLineItemProps, TimelineProps } from 'antd/lib/timeline';
import { TooltipPlacement } from 'antd/lib/tooltip';
import React, { ReactNode } from 'react';
import './index.less';

type TipType = {
  label: ReactNode;
  value: ReactNode;
};

export interface McTimelineItemProps extends TimeLineItemProps {
  tip?: TipType[];
  placement?: TooltipPlacement;
  content: ReactNode;
  description?: ReactNode;
}

export interface McTimelineProps extends TimelineProps {
  items: McTimelineItemProps[];
}

export default (props: McTimelineProps) => {
  const { items } = props;

  const renderTip = (data: TipType[] = []) => {
    return (
      <Descriptions column={1}>
        {data.map((item, idx) => (
          <Descriptions.Item label={item.label} key={idx}>
            {item.value}
          </Descriptions.Item>
        ))}
      </Descriptions>
    );
  };

  return (
    <div className="mc-time-line">
      <Timeline>
        {items.map((item, idx) => {
          const { content, tip, placement = 'rightTop', ...restItem } = item;
          return (
            <Timeline.Item key={idx} {...restItem}>
              <Tooltip
                overlayClassName="mc-time-line-tip"
                title={renderTip(tip)}
                placement={placement}
              >
                {content}
              </Tooltip>
              <div className="mc-time-line-description">{item.description}</div>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </div>
  );
};
