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
            <Select onChange={(valorNuevo) => (
              setDestino(valorNuevo)
            )} defaultValue='Ciudad de Panama'>
              <Select.Option value="Ciudad de Panama">Ciudad de Panama</Select.Option>
              <Select.Option value="Cancun Mexico">Cancun Mexico</Select.Option>
              <Select.Option value="Santiago de Chile">Santiago de Chile</Select.Option>
              <Select.Option value="Machu picchu Peru">Machu picchu Peru</Select.Option>
              <Select.Option value="Roatan Honduras">Roatan Honduras</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="# de Personas: " required>
            <InputNumber
              min={1}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}

              onChange={(e) => {
                setCantidadPersonas(e)
              }}
            />
          </Form.Item>
          <Form.Item label="Confirmar">
            <Button>Calcular</Button>
          </Form.Item>
        </Form>

      </Space>
      <Factura destino={destino} cantidadPersonas={cantidadPersonas} costoPorPersona={costoPorPersona}
        impuestosPorPersona={impuestosPorPersona} totalPagar={totalPagar} ></Factura>
    </>
  );
};
export default () => <FormDisabledDemo />;