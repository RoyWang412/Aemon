import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import moment from 'moment-timezone';
import sinon from 'sinon';

import { shouldBehaveLikeFormField } from './form-field.test';
import {
  generateNewValue,
  applyDateToValue,
  applyTimeToValue,
} from '../../../components/consumer/mobile/datetime-picker/value-generator';
import {
  DatetimePicker,
  DatePicker,
  TimePicker
} from '../../../components/consumer/mobile/form-fields';
import Label, { types as labelTypes } from '../../../components/consumer/mobile/label';
import Hint, { types as hintTypes } from '../../../components/consumer/mobile/hint';

describe('Datetime Picker Value Generator', () => {
  const timezone = 'America/Mexico_City';

  describe('generateNewValue', () => {
    it('should generate the correct date given date and time', () => {
      const date = '1984-10-09';
      const time = '13:02';
      const expected = new Date(moment(`${date}T${time}`).tz(timezone).format());
      expect(generateNewValue(date, time, timezone).getTime()).to.equal(expected.getTime());
    });

    it('should generate the correct date given single digit day and month date', () => {
      const date = '1984-01-09';
      const otherFormatDate = date.replace(/-0/g, '-')
      const time = '13:02';
      const expected = new Date(moment(`${date}T${time}`).tz(timezone).format());
      expect(generateNewValue(otherFormatDate, time, timezone).getTime()).to.equal(expected.getTime());
    });

    it('should generate the correct date given single digit hours and minutes', () => {
      const date = '1984-01-09';
      const time = '01:02';
      const otherFormatTime = '1:2';
      const expected = new Date(moment(`${date}T${time}`).tz(timezone).format());
      expect(generateNewValue(date, otherFormatTime, timezone).getTime()).to.equal(expected.getTime());
    });

    it('should generate the correct date given date with / format and time', () => {
      const date = '1984-10-09';
      const otherFormatDate = date.replace(/-/g, '/')
      const time = '13:02';
      const expected = new Date(moment(`${date}T${time}`).tz(timezone).format());
      expect(generateNewValue(otherFormatDate, time, timezone).getTime()).to.equal(expected.getTime());
    });

    it('should generate the correct date given date no time', () => {
      const date = '1984-10-09';
      const expected = new Date(moment(`${date}T00:00`).tz(timezone).format());
      expect(generateNewValue(date, null, timezone).getTime()).to.equal(expected.getTime());
    });

    it('should generate the correct date given date, empty string as time', () => {
      const date = '1984-10-09';
      const expected = new Date(moment(`${date}T00:00`).tz(timezone).format());
      expect(generateNewValue(date, '', timezone).getTime()).to.equal(expected.getTime());
    });

    it('should generate the correct date given just time', () => {
      const time = '23:01';
      const date = moment(new Date()).tz(timezone).format('YYYY-MM-DD');
      const expected = new Date(moment(`${date}T${time}`).tz(timezone).format());
      expect(generateNewValue(null, time, timezone).getTime()).to.equal(expected.getTime());
    });

    it('should generate the correct date given just time, emptu string as date', () => {
      const time = '23:01';
      const date = moment(new Date()).tz(timezone).format('YYYY-MM-DD');
      const expected = new Date(moment(`${date}T${time}`).tz(timezone).format());
      expect(generateNewValue('', time, timezone).getTime()).to.equal(expected.getTime());
    });
  });

  describe('applyTimeToValue', () => {
    it('should generate correct date with new time', () => {
      const date = '1985-07-13';
      const time = '12:13';
      const value = new Date(moment(`${date}T${time}`).tz(timezone).format());
      const newTime = '23:45';
      const expected = new Date(moment(`${date}T${newTime}`).tz(timezone).format());
      expect(applyTimeToValue(value, newTime, timezone).getTime()).to.equal(expected.getTime());
    });

    it('should return same value if no time was provided', () => {
      const date = '1985-07-13';
      const time = '12:13';
      const expected = new Date(moment(`${date}T${time}`).tz(timezone).format());
      expect(applyTimeToValue(expected, null, timezone).getTime()).to.equal(expected.getTime());
    });

    it('should return same value if no empty time string was provided', () => {
      const date = '1985-07-13';
      const time = '12:13';
      const expected = new Date(moment(`${date}T${time}`).tz(timezone).format());
      expect(applyTimeToValue(expected, '', timezone).getTime()).to.equal(expected.getTime());
    });
  });

  describe('applyDateToValue', () => {
    it('should generate correct date with new date string', () => {
      const date = '1985-07-13';
      const time = '12:13';
      const value = new Date(moment(`${date}T${time}`).tz(timezone).format());
      const newDate = '2005-07-02';
      const expected = new Date(moment(`${newDate}T${time}`).tz(timezone).format());
      expect(applyDateToValue(value, newDate, timezone).getTime()).to.equal(expected.getTime());
    });

    it('should return same value if no date was provided', () => {
      const date = '1985-07-13';
      const time = '12:13';
      const expected = new Date(moment(`${date}T${time}`).tz(timezone).format());
      expect(applyDateToValue(expected, null, timezone).getTime()).to.equal(expected.getTime());
    });
  });
});

describe('Datetime picker', () => {
  const timezone = 'America/Mexico_City';
  shouldBehaveLikeFormField(shallow(<DatetimePicker error="some error" timezone={timezone} />));

  it('should have class pbg-datetime-picker', () => {
    const wrapper = shallow(<DatetimePicker timezone={timezone} />);
    expect(wrapper.hasClass('pbg-datetime-picker')).to.be.true;
  });

  it('should render date picker component', () => {
    const wrapper = shallow(<DatetimePicker timezone={timezone} />);
    expect(wrapper.find(DatePicker)).to.have.lengthOf(1);
  });

  it('should render a time picker component', () => {
    const wrapper = shallow(<DatetimePicker timezone={timezone} />);
    expect(wrapper.find(TimePicker)).to.have.lengthOf(1);
  });

  describe('Composed behaviour', () => {
    it('should execute onChange when DatePicker changes', () => {
      const onChange = sinon.spy();
      const event = { target: { value: '1984-10-19' }};
      const wrapper = mount(<DatetimePicker onChange={onChange} timezone={timezone} />);
      wrapper.find('input[type="date"]').simulate('change', event);
      expect(onChange.calledOnce).to.be.true;
    });

    it('should execute onChange when TimePicker changes', () => {
      const onChange = sinon.spy();
      const event = { target: { value: '22:12' }};
      const wrapper = mount(<DatetimePicker onChange={onChange} timezone={timezone} />);
      wrapper.find('input[type="time"]').simulate('change', event);
      expect(onChange.calledOnce).to.be.true;
    });

    it('should execute onChange with correct date value from DatePicker component', function(done) {
      const event = { target: { value: '1984-10-19' }};
      const expected = new Date(moment('1984-10-19T00:00').tz(timezone));
      const onChange = (ev) => {
        expect(ev.target.value.getTime()).to.equal(expected.getTime());
        done();
      }
      const wrapper = mount(<DatetimePicker timezone={timezone} onChange={onChange} />);
      wrapper.find('input[type="date"]').simulate('change', event);
    });

    it('should handle date values with single digit days', function(done) {
      const event = { target: { value: '1984-10-01' }};
      const expected = new Date(moment('1984-10-01T00:00').tz(timezone));
      const onChange = (ev) => {
        expect(ev.target.value.getTime()).to.equal(expected.getTime());
        done();
      }
      const wrapper = mount(<DatetimePicker timezone={timezone} onChange={onChange} />);
      wrapper.find('input[type="date"]').simulate('change', event);
    });

    it('should execute onChange with correct time value from TimePicker component', function(done) {
      const event = { target: { value: '12:22' }};
      const expected = new Date(moment('1984-10-19T12:22').tz(timezone));
      const initialValue = new Date(moment('1984-10-19T00:00').tz(timezone));
      const onChange = (ev) => {
        expect(ev.target.value.getTime()).to.equal(expected.getTime());
        done();
      }
      const wrapper = mount(
        <DatetimePicker value={initialValue} onChange={onChange} timezone={timezone} />
      );
      wrapper.find('input[type="time"]').simulate('change', event);
    });

    it('should handle date values with single digit hours and minutes', function(done) {
      const event = { target: { value: '02:01' }};
      const expected = new Date(moment('1984-10-19T02:01').tz(timezone));
      const initialValue = new Date(moment('1984-10-19T00:00').tz(timezone));
      const onChange = (ev) => {
        expect(ev.target.value.getTime()).to.equal(expected.getTime());
        done();
      }
      const wrapper = mount(
        <DatetimePicker value={initialValue} onChange={onChange} timezone={timezone} />
      );
      wrapper.find('input[type="time"]').simulate('change', event);
    });
  });

});
