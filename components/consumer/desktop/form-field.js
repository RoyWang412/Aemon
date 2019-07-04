import BaseFormField from '../shared/base-form-field';
import Label, { labelTypes } from './label';
import Hint from './hint';

class FormField extends BaseFormField {
  get labelType() {
    return labelTypes.base;
  }

  renderLabel() {
    if (this.adaptedProps.simple) return null;
    return super.renderLabel(Label);
  }

  renderHintOrError() {
    if (this.adaptedProps.simple) return null;
    return super.renderHintOrError(Hint);
  }

  get placeholder() {
    const { disabled, label } = this.adaptedProps;
    const placeholder = this.adaptedProps.placeholder || label;
    return !disabled ? placeholder : null;
  }
}

export default FormField;
