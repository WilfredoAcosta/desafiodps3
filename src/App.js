import React, { useState } from 'react';
import {
  Button,
  Form,
  InputNumber,
  Select,
  Typography,
  Space
} from 'antd';
import Factura from './components/Factura';
const FormDisabledDemo = () => {

  const [destino, setDestino] = useState('');
  const [cantidadPersonas, setCantidadPersonas] = useState(0);
  const [costoPorPersona, setCostoPorPersona] = useState(0);
  const [impuestosPorPersona, setImpuestosPorPersona] = useState(0);
  const [totalPagar, setTotalPagar] = useState(0);

  return (
    <>
      <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center' }}>
        <Form
          layout="horizontal"
          style={{
            maxWidth: 700
          }
          }
        >
          <Form.Item label=" ">
            <Typography.Title
              level={1}
              style={{
                margin: 0,
                textAlign: 'center'
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
              <Select.Option value="honduras">Roatan Honduras</Select.Option>
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

      </Space>
      <Factura destino={destino} cantidadPersonas={cantidadPersonas}costoPorPersona={costoPorPersona}
      impuestosPorPersona={impuestosPorPersona} totalPagar={totalPagar} ></Factura>
    </>
  );
};
export default () => <FormDisabledDemo />;