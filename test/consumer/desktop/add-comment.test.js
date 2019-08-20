import React from 'react';
import { shallow, mount } from 'enzyme';
import AddComment from '../../../components/consumer/desktop/add-comment';
import Avatar from '../../../components/consumer/desktop/avatar';
import TextArea from '../../../components/consumer/desktop/text-area';
import Hint from '../../../components/consumer/desktop/hint';
import { PrimaryButton } from '../../../components/consumer/desktop/button';

describe('Add comment', () => {
  it('should have correct wrapper class', () => {
    const wrapper = shallow(<AddComment />);
    expect(wrapper.hasClass('pbg-add-comment')).to.be.true;
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
  });

  it('should have correct className when provided', () => {
    const className = 'className';
    const wrapper = shallow(<AddComment className={className} />);
    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should have an avatar', () => {
    const wrapper = shallow(<AddComment />);
    expect(wrapper.find(Avatar)).to.have.lengthOf(1);
  });

  it('should pass userId to avatar if present', () => {
    const expected = 'some id';
    const wrapper = mount(<AddComment userId={expected} />);
    expect(wrapper.find(Avatar).props().userId).to.equal(expected);
  });

  it('should pass avatarSrc to avatar if present', () => {
    const expected = 'some/src.jpg';
    const wrapper = mount(<AddComment avatarSrc={expected} />);
    expect(wrapper.find(Avatar).props().src).to.equal(expected);
  });

  it('should render a text area', () => {
    const wrapper = shallow(<AddComment />);
    expect(wrapper.find(TextArea)).to.have.lengthOf(1);
  });

  it('should pass label to text area', () => {
    const expected = 'some label';
    const wrapper = mount(<AddComment textLabel={expected} />);
    expect(wrapper.find(TextArea).props().label).to.equal(expected);
  });

  it('should have hint if given', () => {
    const expected = 'some hint';
    const wrapper = mount(<AddComment hint={expected} />);
    expect(wrapper.contains(<Hint>{expected}</Hint>)).to.be.true;
  });

  it('should render a primary button', () => {
    const wrapper = mount(<AddComment />);
    expect(wrapper.find(PrimaryButton)).to.have.lengthOf(1);
  });

  it('should pass label to button', () => {
    const expected = 'some label';
    const wrapper = mount(<AddComment ctaLabel={expected} />);
    expect(wrapper.find(PrimaryButton).text()).to.equal(expected);
  });
});
