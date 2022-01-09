import React from 'react';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import './Form.css';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <Input
            datatest="name-input"
            id="nome"
            onChange={ () => { } }
            type="text"
          />
          <TextArea
            datatest="description-input"
            id="description"
          />
          <Input
            datatest="attr1-input"
            id="attr01"
            onChange={ () => { } }
            type="number"
          />
          <Input
            datatest="attr2-input"
            id="attr02"
            onChange={ () => { } }
            type="number"
          />
          <Input
            datatest="attr3-input"
            id="attr03"
            onChange={ () => { } }
            type="number"
          />
          <Input
            datatest="image-input"
            id="image"
          />
        </form>
      </div>
    );
  }
}

export default Form;
