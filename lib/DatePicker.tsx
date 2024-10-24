/**
 * @module DatePicker Component
 */

import React, { useEffect, useState } from 'react';

import DatePickerItem from './DatePickerItem';
import {
  DateConfig, dateConfigMap, Theme, Unit,
} from './types';
import { isDateConfig, isDateConfigKey, isTheme } from './utils';
import { convertDate, nextDate } from './utils/time';

export interface DatePickerProps {
  theme?: Theme,
  value?: Date,
  min?: Date,
  max?: Date,
  customHeader?: React.ReactNode,
  showHeader?: boolean,
  showFooter?: boolean,
  showCaption?: boolean,
  dateConfig?: Unit[] | DateConfig[],
  headerFormat?: string,
  confirmText?: string,
  cancelText?: string,
  onChange?: Function,
  onSelect?: Function,
  onCancel?: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>,
  scrollSpeedFactor?: number,
  scrollSpeedLimit?: number,
}

const normalizeDateConfig = (dateConfig: Required<DatePickerProps>['dateConfig']) => {
  const configList: DateConfig[] = dateConfig.map((value: string | DateConfig) => {
    if (isDateConfigKey(value)) {
      return {
        ...dateConfigMap[value as keyof typeof dateConfigMap],
        type: value,
      };
    }
    if (isDateConfig(value)) {
      const key = value.type;
      return {
        ...dateConfigMap[key],
        ...value,
        type: key,
      };
    }
    throw new Error('invalid dateConfig');
  });
  return configList;
};

/**
 * Class DatePicker Component Class
 * @extends Component
 */
const DatePicker: React.FC<DatePickerProps> = ({
  theme = 'default',
  value: propsValue = new Date(),
  min = new Date(1970, 0, 1),
  max = new Date(2050, 0, 1),
  showFooter = true,
  showHeader = true,
  showCaption = false,
  dateConfig = [
    {
      format: 'YYYY',
      caption: 'Year',
      type: 'year',
      step: 1,
    },
    {
      format: 'M',
      caption: 'Mon',
      type: 'month',
      step: 1,
    },
    {
      format: 'D',
      caption: 'Day',
      type: 'date',
      step: 1,
    },
  ],
  headerFormat = 'YYYY/MM/DD',
  confirmText = 'Done',
  cancelText = 'Cancel',
  customHeader,
  onSelect,
  onChange,
  onCancel,
  scrollSpeedFactor,
  scrollSpeedLimit,
}) => {
  const [value, setValue] = useState(nextDate(propsValue));
  useEffect(() => {
    setValue((stateValue) => {
      if (stateValue.getTime() !== propsValue.getTime()) {
        return new Date(propsValue);
      }
      return stateValue;
    });
  }, [propsValue]);

  useEffect(() => {
    if (value.getTime() > max.getTime()) {
      setValue(new Date(max));
    }

    if (value.getTime() < min.getTime()) {
      setValue(new Date(min));
    }
  }, [value, min, max]);

  const handleFinishBtnClick = () => {
    if (onSelect) onSelect(value);
  };

  const handleDateSelect = (nextValue: typeof value) => {
    setValue(nextValue);
    if (onChange) {
      onChange(nextValue);
    }
  };

  const dataConfigList = normalizeDateConfig(dateConfig);
  return (
    <div
      className={`datepicker ${isTheme(theme) ? theme : 'default'}`}
    >
      {showHeader && (
        <div className='datepicker-header'>
          {customHeader || convertDate(value, headerFormat)}
        </div>
      )}
      {showCaption && (
        <div className='datepicker-caption'>
          {dataConfigList.map((item, index) => (
            <div key={index} className='datepicker-caption-item'>{item.caption}</div>
          ))}
        </div>
      )}
      <div className='datepicker-content'>
        {dataConfigList.map((item, index) => (
          <DatePickerItem
            key={index}
            value={value}
            min={min}
            max={max}
            step={item.step}
            type={item.type}
            format={item.format}
            onSelect={handleDateSelect}
            scrollSpeedFactor={scrollSpeedFactor}
            scrollSpeedLimit={scrollSpeedLimit}
          />
        ))}
      </div>
      {showFooter && (
        <div className='datepicker-navbar'>
          <button
            className='datepicker-navbar-btn'
            onClick={handleFinishBtnClick}
          >
            {confirmText}
          </button>
          <button
            className='datepicker-navbar-btn'
            onClick={onCancel}
          >
            {cancelText}
          </button>
        </div>
      )}
    </div>
  );
};


export default DatePicker;
