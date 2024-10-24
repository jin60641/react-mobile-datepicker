# react-mobile-datepicker-ts
[![npm package][npm-badge]][npm]

**a lightweight react date picker for mobile, Not more than 4k**

react-mobile-datepicker-ts provides a component that can set year, month, day, hour, minute and second by sliding up or down.

## Features
- is only 4k.
- It does not depend on moment.js

## Theme

### default
<div style="padding:30px">
<img src="https://raw.githubusercontent.com/lanjingling0510/react-mobile-datepicker/master/.github/default.png" width="300" />
</div>

### dark
<div style="padding:30px">
<img src="https://raw.githubusercontent.com/lanjingling0510/react-mobile-datepicker/master/.github/dark.png" width="300" />
</div>

### ios
<div style="padding:30px">
<img src="https://raw.githubusercontent.com/lanjingling0510/react-mobile-datepicker/master/.github/ios.png" width="300" />
</div>

### android
<div style="padding:30px">
<img src="https://raw.githubusercontent.com/lanjingling0510/react-mobile-datepicker/master/.github/android.png" width="300" />
</div>

### android-dark
<div style="padding:30px">
<img src="https://raw.githubusercontent.com/lanjingling0510/react-mobile-datepicker/master/.github/android-dark.png" width="300" />
</div>

## Custom date unit

set `dateConfig` to configure year, month, day, hour, minute and second.

```javascript
[{
  type: 'year',
  format: 'YYYY',
  caption: 'Year',
  step: 1,
}, {
  type: 'month',
  format: 'MM',
  caption: 'Mon',
  step: 1,
}, {
  type: 'date',
  format: 'DD',
  caption: 'Day',
  step: 1,
}, {
  type: 'hour',
  format: 'hh',
  caption: 'Hour',
  step: 1,
}, {
  type: 'minute',
  format: 'mm',
  caption: 'Min',
  step: 1,
}, {
  type: 'second',
  format: 'ss',
  caption: 'Sec',
  step: 1,
}]
```

<div style="padding:30px">
<img src="https://raw.githubusercontent.com/lanjingling0510/react-mobile-datepicker/master/.github/year-month-day-hour-minute.png" width="300" />
</div>


set `dateConfig` to configure hour, minute and second.

```javascript
[{
  type: 'hour',
  format: 'hh',
  caption: 'Hour',
  step: 1,
}, {
  type: 'minute',
  format: 'mm',
  caption: 'Min',
  step: 1,
}, {
  type: 'second',
  format: 'ss',
  caption: 'Sec',
  step: 1,
}]
```

<div style="padding:30px">
<img src="https://raw.githubusercontent.com/lanjingling0510/react-mobile-datepicker/master/.github/hour-minute-second.png" width="300" />
</div>

customize the content mapping shown in the month.

```javascript

const monthMap = {
  '1': 'Jan',
  '2': 'Feb',
  '3': 'Mar',
  '4': 'Apr',
  '5': 'May',
  '6': 'Jun',
  '7': 'Jul',
  '8': 'Aug',
  '9': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec',
};

const dateConfig = [{
  type: 'year',
  format: 'YYYY',
  caption: 'Year',
  step: 1,
}, {
  type: 'month',
  format: value => monthMap[value.getMonth() + 1],
  caption: 'Mon',
  step: 1,
}, {
  type: 'date',
  format: 'DD',
  caption: 'Day',
  step: 1,
}];

<DatePicker
  dateConfig={dateConfig}
/>

```
<div style="padding:30px">
<img src="https://raw.githubusercontent.com/lanjingling0510/react-mobile-datepicker/master/.github/year-custom_month-day.png" width="300" />
</div>

set `showCaption` to display date captions, matches the dateConfig property's caption.

```javascript
const dateConfig = [{
  type: 'hour',
  format: 'hh',
  caption: 'Hour',
  step: 1,
}, {
  type: 'minute',
  format: 'mm',
  caption: 'Min',
  step: 1,
}, {
  type: 'second',
  format: 'ss',
  caption: 'Sec',
  step: 1,
}];

<DatePicker
  showCaption={true}
  dateConfig={dateConfig}
/>
```

<div style="padding:30px">
<img src="https://raw.githubusercontent.com/lanjingling0510/react-mobile-datepicker/master/.github/caption.png" width="300" />
</div>


## Getting Started

### Install

Using [npm](https://www.npmjs.com/):

  $ npm install react-mobile-datepicker-ts --save

### Import what you need
The following guide assumes you have some sort of ES2015 build set up using babel and/or webpack/browserify/gulp/grunt/etc.


```javascript
// Using an ES6 transpiler like Babel
import  React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-mobile-datepicker';
import 'react-mobile-datepicker-ts/dist/main.css'
```


### Usage Example


```javascript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DatePicker from 'react-mobile-datepicker';
import 'react-mobile-datepicker-ts/dist/main.css'

const App = () => {
  const [time, setTime] = React.useState(new Date());
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggle = (nextIsOpen: typeof isOpen) => {
    setIsOpen(nextIsOpen);
  }

  const handleSelect = (nextTime: typeof time) => {
    setTime(nextTime);
    setIsOpen(false);
  }

  return (
    <div>
      <p>
        {time.toLocaleDateString()}
      </p>
      <div>
        <button onClick={() => handleToggle(true)}>
          select time
        </button>
      </div>
      <DatePicker
        value={time}
        isOpen={isOpen}
        onSelect={handleSelect}
        onCancel={() => handleToggle(false)}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```


## PropTypes

| Property        | Type           | Default  | Description |
|:------------- |:------------- |:-------------- |:---------- |
| isPopup      | Boolean | true | whether  as popup add a overlay |
| isOpen      | Boolean | false | whether to open datepicker |
| theme      | String      | default  | theme of datepicker, include 'default', 'dark', 'ios', 'android', 'android-dark' |
| dateConfig | Object | [See `DateConfig` format for details](#dateconfig) | configure date unit information |
|headerFormat | String | 'YYYY/MM/DD' | customize the format of the display title |
| value | Date | new Date() | date value |
| min  | Date | new Date(1970, 0, 1) | minimum date |
| max | Date | new Date(2050, 0, 1) | maximum date |
| showHeader | Boolean | true | whether to show the header |
| showFooter | Boolean | true | whether to show the footer |
| customHeader | ReactElement | undefined | customize the header, if you set this property, it will replace `showFormat`|
| confirmText  | String | 'Done' | customize the selection time button text |
| cancelText | String | 'Cancel' | customize the cancel button text |
| onSelect | Function | () => {} | the callback function after click button of done, Date object as a parameter |
| onCancel | Function | () => {} | the callback function after click button of cancel |
| onChange | Function | () => {} | the callback function after date be changed |
| scrollSpeedFactor | number | 1 | the factor that affect wheel scroll speed  |
| scrollSpeedLimit | number | DEFAULT_DATE_HEIGHT | the factor that maximum amount of scrolling (If not to changed the css, I recommend keeping the default settings.) |


## DateConfig

all default date configuration information, as follows

- type: date unit
- format: date unit display format
- caption: date unit caption
- step: date unit change interval

```javascript
[{
  type: 'year',
  format: 'YYYY',
  caption: 'Year',
  step: 1,
}, {
  type: 'month',
  format: 'MM',
  caption: 'Mon',
  step: 1,
}, {
  type: 'date',
  format: 'DD',
  caption: 'Day',
  step: 1,
}, {
  type: 'hour',
  format: 'hh',
  caption: 'Hour',
  step: 1,
}, {
  type: 'minute',
  format: 'mm',
  caption: 'Min',
  step: 1,
},
'second': {
  type: 'second',
  format: 'ss',
  caption: 'Sec',
  step: 1,
}]

```


## Changelog
* [Changelog](CHANGELOG.md)

## How to Contribute

Anyone and everyone is welcome to contribute to this project. The best way to
start is by checking our [open issues](https://github.com/jin60641/react-mobile-datepicker-ts/issues),
[submit a new issues](https://github.com/jin60641/react-mobile-datepicker-ts/issues/new?labels=bug) or
[feature request](https://github.com/jin60641/react-mobile-datepicker-ts/issues/new?labels=enhancement),
participate in discussions, upvote or downvote the issues you like or dislike.




[npm-badge]: https://img.shields.io/npm/v/react-mobile-datepicker-ts.svg?style=flat-square
[npm]: https://www.npmjs.com/package/react-mobile-datepicker-ts
