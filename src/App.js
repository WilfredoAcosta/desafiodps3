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
  Divider,
  Typography
} from 'antd';
const { RangePicker } = DatePicker;
const { Paragraph } = Typography;
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
          span: 12,
        }}
        wrapperCol={{
          span: 10,
        }}
        layout="right-align"
        style={{
          maxWidth: 900,
        }}
      >
               <Form.Item label=" ">
               <Typography.Title
        level={1}
        style={{
          margin: 0,
        }}
      >
       UBD Tours
      </Typography.Title>
        </Form.Item>
 
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
            span: 12,
          }}
          wrapperCol={{
            span: 10,
          }}
          layout="horizontal"
          style={{
            maxWidth: 900,
          }}>
               <Form.Item label=" ">
               <Typography.Title
        level={1}
        style={{
          margin: 0,
        }}
      >
       Factura
      </Typography.Title>
        </Form.Item>
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