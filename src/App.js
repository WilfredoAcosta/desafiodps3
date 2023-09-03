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
import { destinos } from './utils/data';
const FormDisabledDemo = () => {

  const [destino, setDestino] = useState('Ciudad de Panama');
  const [cantidadPersonas, setCantidadPersonas] = useState(0);
  const [costoPorPersona, setCostoPorPersona] = useState(0);
  const [impuestosPorPersona, setImpuestosPorPersona] = useState(0);
  const [impuestos, setImpuestos] = useState(0);
  const [totalPagar, setTotalPagar] = useState(0);


  const CalcularCosto = () => {
    setTotalPagar(costoPorPersona + (impuestosPorPersona * cantidadPersonas))
  }

  const ActualizarData = () => {
    destinos.forEach(ele => {
      if (destino === ele.nombre) {
        if (cantidadPersonas !== 0) {
          if (cantidadPersonas > 4) {
            setCostoPorPersona(ele.adicional[3])
          } else {
            setCostoPorPersona(ele.adicional[cantidadPersonas - 1])
            setImpuestos(ele.impuesto)
          }
        } else {
          setCostoPorPersona(0)
          setImpuestosPorPersona(0)
          setTotalPagar(0)
        }
      }
    });
    setImpuestosPorPersona((impuestos / 100) * costoPorPersona)
  }

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
            <Select onChange={(valorNuevo) => {
              setDestino(valorNuevo)
              ActualizarData()
            }} defaultValue={destino}>
              {destinos.map(e => (
                <Select.Option value={e.nombre}>{e.descripcion}</Select.Option>
              ))}
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
                ActualizarData()
              }}
            />
          </Form.Item>
          <Form.Item label="Confirmar">
            <Button onClick={() => CalcularCosto()}>Calcular</Button>
          </Form.Item>
        </Form>

      </Space>
      <Factura destino={destino} cantidadPersonas={cantidadPersonas} costoPorPersona={costoPorPersona}
        impuestosPorPersona={impuestosPorPersona} totalPagar={totalPagar} ></Factura>
    </>
  );
};
export default () => <FormDisabledDemo />;