import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import { shouldBehaveLikeFormField } from './form-field.test';
import { AddressField, fieldNames } from '../../../components/consumer/mobile/address-field/address-field';
import { TextField, Picker } from '../../../components/consumer/mobile/form-fields';

describe('AddressField', () => {
  it('should have correct class', () => {
    const wrapper = shallow(<AddressField />);
    expect(wrapper.hasClass('pbg-address-field')).to.be.true;
  });

  describe('Street Address Text Field', () => {
    it('should have an streetAddress TextField', () => {
      const wrapper = mount(<AddressField />);
      const streetAddress = wrapper.find({ type: 'text', name: fieldNames.STREET_ADDRESS });
      expect(streetAddress).to.have.lengthOf(1);
    });

    it('should have an streetAddress TextField with correct label', () => {
      const expected = 'expected label';
      const wrapper = mount(<AddressField streetAddressLabel={expected} />);
      const streetAddress = wrapper.find({ type: 'text', name: fieldNames.STREET_ADDRESS });
      expect(streetAddress.prop('placeholder')).to.be.equal(expected);
    });

    it('should not pass the error to streetAddress TextField if not touched', () => {
      const expected = 'some error';
      const wrapper = shallow(<AddressField error={{ [fieldNames.STREET_ADDRESS]: expected }} />);
      expect(wrapper.instance().streetAddressError).to.be.undefined;
    });

    it('should pass the error to streetAddress TextField if touched', () => {
      const expected = 'some error';
      const wrapper = mount(<AddressField error={{ [fieldNames.STREET_ADDRESS]: expected }} />);
      wrapper.find({ type: 'text', name: fieldNames.STREET_ADDRESS }).simulate('blur');
      expect(wrapper.instance().streetAddressError).to.be.equal(expected);
    });

    it('should not pass an error to streetAddress TextField if it has none', () => {
      const wrapper = mount(<AddressField error={{ notOne: 'error' }} />);
      wrapper.find({ type: 'text', name: fieldNames.STREET_ADDRESS });
      expect(wrapper.instance().streetAddressError).to.be.undefined;
    });
  });

  // City Text Field
  describe('City Text Field', () => {
    it('should have an city TextField', () => {
      const wrapper = mount(<AddressField />);
      const city = wrapper.find({ type: 'text', name: fieldNames.CITY });
      expect(city).to.have.lengthOf(1);
    });

    it('should have an city TextField with correct label', () => {
      const expected = 'expected label';
      const wrapper = mount(<AddressField cityLabel={expected} />);
      const city = wrapper.find({ type: 'text', name: fieldNames.CITY });
      expect(city.prop('placeholder')).to.be.equal(expected);
    });

    it('should not pass the error to city TextField if not touched', () => {
      const expected = 'some error';
      const wrapper = shallow(<AddressField error={{ [fieldNames.CITY]: expected }} />);
      expect(wrapper.instance().cityError).to.be.undefined;
    });

    it('should pass the error to city TextField if touched', () => {
      const expected = 'some error';
      const wrapper = mount(<AddressField error={{ [fieldNames.CITY]: expected }} />);
      wrapper.find({ type: 'text', name: fieldNames.CITY }).simulate('blur');
      expect(wrapper.instance().cityError).to.be.equal(expected);
    });

    it('should not pass an error to city TextField if it has none', () => {
      const wrapper = shallow(<AddressField error={{ notOne: 'error' }} />);
      expect(wrapper.instance().cityError).to.be.undefined;
    });
  });

  describe('State Text Field', () => {
    it('should have an state TextField', () => {
      const wrapper = mount(<AddressField />);
      const state = wrapper.find({ type: 'text', name: fieldNames.STATE });
      expect(state).to.have.lengthOf(1);
    });

    it('should have an state TextField with correct label', () => {
      const expected = 'expected label';
      const wrapper = mount(<AddressField stateLabel={expected} />);
      const state = wrapper.find({ type: 'text', name: fieldNames.STATE });
      expect(state.prop('placeholder')).to.be.equal(expected);
    });

    it('should not pass the error to state TextField if not touched', () => {
      const wrapper = shallow(<AddressField error={{ [fieldNames.STATE]: 'some error' }} />);
      expect(wrapper.instance().stateError).to.be.undefined;
    });

    it('should pass the error to state TextField if touched', () => {
      const expected = 'some error';
      const wrapper = mount(<AddressField error={{ [fieldNames.STATE]: expected }} />);
      wrapper.find({ type: 'text', name: fieldNames.STATE }).simulate('blur');
      expect(wrapper.instance().stateError).to.be.equal(expected);
    });

    it('should not pass an error to state TextField if it has none', () => {
      const wrapper = shallow(<AddressField error={{ notOne: 'error' }} />);
      expect(wrapper.instance().stateError).to.be.undefined;
    });
  });

  describe('Postal Code Text Field', () => {
    it('should have an postal code TextField', () => {
      const wrapper = mount(<AddressField />);
      const postalCode = wrapper.find({ type: 'text', name: fieldNames.POSTAL_CODE });
      expect(postalCode).to.have.lengthOf(1);
    });

    it('should have an postal code TextField with correct label', () => {
      const expected = 'expected label';
      const wrapper = mount(<AddressField postalCodeLabel={expected} />);
      const postalCode = wrapper.find({ type: 'text', name: fieldNames.POSTAL_CODE });
      expect(postalCode.prop('placeholder')).to.be.equal(expected);
    });

    it('should not pass the error to postal code TextField if not touched', () => {
      const wrapper = shallow(<AddressField error={{ [fieldNames.POSTAL_CODE]: 'some error' }} />);
      expect(wrapper.instance().postalCodeError).to.be.undefined;
    });

    it('should pass the error to postal code TextField if touched', () => {
      const expected = 'some error';
      const wrapper = mount(<AddressField error={{ [fieldNames.POSTAL_CODE]: expected }} />);
      wrapper.find({ type: 'text', name: fieldNames.POSTAL_CODE }).simulate('blur');
      expect(wrapper.instance().postalCodeError).to.be.equal(expected);
    });

    it('should not pass an error to postal code TextField if it has none', () => {
      const wrapper = shallow(<AddressField error={{ notOne: 'error' }} />);
      expect(wrapper.instance().postalCodeError).to.be.undefined;
    });
  });

  describe('Country Picker', () => {
    it('should have an country Picker', () => {
      const wrapper = mount(<AddressField />);
      const country = wrapper.find(Picker);
      expect(country).to.have.lengthOf(1);
      expect(country.prop('name')).to.equal(fieldNames.COUNTRY);
    });

    it('should have an country Picker with correct label', () => {
      const expected = 'expected label';
      const wrapper = mount(<AddressField countryLabel={expected} />);
      const country = wrapper.find(Picker);
      expect(country.prop('label')).to.be.equal(expected);
    });

    it('should pass the error to country Picker if it has one', () => {
      const expected = 'some error';
      const wrapper = shallow(<AddressField error={{ [fieldNames.COUNTRY]: expected }} />);
      expect(wrapper.instance().countryError).to.be.equal(expected);
    });

    it('should not pass an error to country Picker if it has none', () => {
      const wrapper = shallow(<AddressField error={{ notOne: 'error' }} />);
      expect(wrapper.instance().countryError).to.be.undefined;
    });

    it('should pass given options to country picker', () => {
      const options = [{label: 'MX', value: 'mx'}, {label: 'US', value: 'us'}];
      const wrapper = shallow(<AddressField countryOptions={options} onChange={() => {}}/>);
      expect(wrapper.instance().countryOptions).to.be.equal(options);
    });

    it('should trigger change with first value if no value was given', function(done) {
      const options = [{label: 'MX', value: 'mx'}, {label: 'US', value: 'us'}];
      const onChange = (ev) => {
        expect(ev.target.value).to.eql({country: options[0].value});
        done();
      }
      const wrapper = mount(<AddressField countryOptions={options} onChange={onChange}/>);
    });
  });

  describe('Composed behaviour', () => {
    describe('Updating value', () => {
      const initialValue = {
        streetAddress: 'Some address',
        city: 'Some city',
        state: 'Some state',
        postalCode: '00000',
        country: 'some country',
      };

      // Street Address
      it('should execute onChange when streetAddress TextField changes', () => {
        const onChange = sinon.spy();
        const event = { target: { value: '742 Evergreen Terrace' }};
        const wrapper = mount(<AddressField onChange={onChange} />);
        wrapper.find({ type: 'text', name: fieldNames.STREET_ADDRESS}).simulate('change', event);
        expect(onChange.calledOnce).to.be.true;
      });

      it('should report correct value when streetAddress TextField changes', function(done) {
        const event = { target: { value: '742 Evergreen Terrace' }};
        const onChange = (ev) => {
          const expected = { ...initialValue, streetAddress: '742 Evergreen Terrace' };
          expect(ev.target.value).to.eql(expected);
          done();
        };
        const wrapper = mount(<AddressField onChange={onChange} value={initialValue} />);
        wrapper.find({ type: 'text', name: fieldNames.STREET_ADDRESS}).simulate('change', event);
      });

      it('should report correct value when streetAddress TextField changes', function(done) {
        const expected = {streetAddress: '742 Evergreen Terrace' };
        const event = { target: { value: expected.streetAddress }};
        const onChange = (ev) => {
          expect(ev.target.value).to.eql(expected);
          done();
        };
        const wrapper = mount(<AddressField onChange={onChange} />);
        wrapper.find({ type: 'text', name: fieldNames.STREET_ADDRESS}).simulate('change', event);
      });

      // City
      it('should execute onChange when city TextField changes', () => {
        const onChange = sinon.spy();
        const event = { target: { value: 'Springfield' }};
        const wrapper = mount(<AddressField onChange={onChange} />);
        wrapper.find({ type: 'text', name: fieldNames.CITY}).simulate('change', event);
        expect(onChange.calledOnce).to.be.true;
      });

      it('should report correct value when city TextField changes', function(done) {
        const event = { target: { value: 'Springfield' }};
        const onChange = (ev) => {
          const expected = { ...initialValue, city: 'Springfield' };
          expect(ev.target.value).to.eql(expected);
          done();
        };
        const wrapper = mount(<AddressField onChange={onChange} value={initialValue} />);
        wrapper.find({ type: 'text', name: fieldNames.CITY}).simulate('change', event);
      });

      it('should report correct value when city TextField changes', function(done) {
        const expected = {city: 'Springfield' };
        const event = { target: { value: expected.city }};
        const onChange = (ev) => {
          expect(ev.target.value).to.eql(expected);
          done();
        };
        const wrapper = mount(<AddressField onChange={onChange} />);
        wrapper.find({ type: 'text', name: fieldNames.CITY}).simulate('change', event);
      });

      // State
      it('should execute onChange when state TextField changes', () => {
        const onChange = sinon.spy();
        const event = { target: { value: 'Oregon' }};
        const wrapper = mount(<AddressField onChange={onChange} />);
        wrapper.find({ type: 'text', name: fieldNames.STATE}).simulate('change', event);
        expect(onChange.calledOnce).to.be.true;
      });

      it('should report correct value when state TextField changes', function(done) {
        const event = { target: { value: 'Oregon' }};
        const onChange = (ev) => {
          const expected = { ...initialValue, state: 'Oregon' };
          expect(ev.target.value).to.eql(expected);
          done();
        };
        const wrapper = mount(<AddressField onChange={onChange} value={initialValue} />);
        wrapper.find({ type: 'text', name: fieldNames.STATE}).simulate('change', event);
      });

      it('should report correct value when state TextField changes', function(done) {
        const expected = { state: 'Oregon' };
        const event = { target: { value: expected.state }};
        const onChange = (ev) => {
          expect(ev.target.value).to.eql(expected);
          done();
        };
        const wrapper = mount(<AddressField onChange={onChange} />);
        wrapper.find({ type: 'text', name: fieldNames.STATE}).simulate('change', event);
      });


      // Postal Code
      it('should execute onChange when postalCode TextField changes', () => {
        const onChange = sinon.spy();
        const event = { target: { value: '555636' }};
        const wrapper = mount(<AddressField onChange={onChange} />);
        wrapper.find({ type: 'text', name: fieldNames.POSTAL_CODE}).simulate('change', event);
        expect(onChange.calledOnce).to.be.true;
      });

      it('should report correct value when postalCode TextField changes', function(done) {
        const event = { target: { value: '555636' }};
        const onChange = (ev) => {
          const expected = { ...initialValue, postalCode: '555636' };
          expect(ev.target.value).to.eql(expected);
          done();
        };
        const wrapper = mount(<AddressField onChange={onChange} value={initialValue} />);
        wrapper.find({ type: 'text', name: fieldNames.POSTAL_CODE}).simulate('change', event);
      });

      it('should report correct value when postalCode TextField changes', function(done) {
        const expected = { postalCode: '555636' };
        const event = { target: { value: expected.postalCode }};
        const onChange = (ev) => {
          expect(ev.target.value).to.eql(expected);
          done();
        };
        const wrapper = mount(<AddressField onChange={onChange} />);
        wrapper.find({ type: 'text', name: fieldNames.POSTAL_CODE}).simulate('change', event);
      });

      // Country
      it('should execute onChange when country TextField changes', () => {
        const onChange = sinon.spy();
        const event = { target: { value: 'US' }};
        const wrapper = mount(<AddressField onChange={onChange} />);
        wrapper.find('select').simulate('change', event);
        expect(onChange.calledOnce).to.be.true;
      });

      it('should report correct value when country TextField changes', function(done) {
        const event = { target: { value: 'US' }};
        const onChange = (ev) => {
          const expected = { ...initialValue, country: 'US' };
          expect(ev.target.value).to.eql(expected);
          done();
        };
        const wrapper = mount(<AddressField onChange={onChange} value={initialValue} />);
        wrapper.find('select').simulate('change', event);
      });

      it('should report correct value when country TextField changes', function(done) {
        const expected = { country: 'US' };
        const event = { target: { value: expected.country }};
        const onChange = (ev) => {
          expect(ev.target.value).to.eql(expected);
          done();
        };
        const wrapper = mount(<AddressField onChange={onChange} />);
        wrapper.find('select').simulate('change', event);
      });
    });
  });
});