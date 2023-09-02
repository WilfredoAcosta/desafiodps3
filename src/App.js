import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const FormDisabledDemo = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);
  return (
    <>
      
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{
          maxWidth: 600,
        }}
      >
    
        <Form.Item label="Destino">
          <Select>
            <Select.Option value="panama">Ciudad de Panama</Select.Option>
            <Select.Option value="mexico">Cancun Mexico</Select.Option>
            <Select.Option value="chile">Santiago de Chile</Select.Option>
            <Select.Option value="peru">Machu picchu Peru</Select.Option>
            <Select.Option value="honduras">Rotan Honduras</Select.Option>
          </Select>
        </Form.Item>
        

       <Form.Item label="Personas: " required>
          <InputNumber
            min={1}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
        </Form.Item>

        
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>

       <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={false}
        style={{
          maxWidth: 600,
        }}>
        <Form.Item>
          <Form.Item label="Destino">
            <Input placeholder='Destino vacacional' disabled />
          </Form.Item>

          <Form.Item label="Personas">
            <Input placeholder='Cantidad de personas' disabled />
          </Form.Item>

          <Form.Item label="Costo*Persona">
            <Input placeholder='Costo por persona' disabled />
          </Form.Item>

          <Form.Item label="Impuesto*Persona">
            <Input placeholder='Impuesto por persona' disabled />
          </Form.Item>

          <Form.Item label="Total">
            <Input placeholder='Total a pagar' disabled />
          </Form.Item>

        </Form.Item>
      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;