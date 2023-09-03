import React from 'react';
import {
    Form,
    Typography,
    Input,
    Space
} from 'antd';

const Factura = ({ destino, cantidadPersonas, costoPorPersona, impuestosPorPersona, totalPagar }) => {
    return (
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
                        Factura
                    </Typography.Title>
                    <Input placeholder={'Destino vacacional: ' + destino} disabled />
                    <Input placeholder={'Cantidad de personas: ' + cantidadPersonas} disabled />
                    <Input placeholder={'Costo por persona: $' + costoPorPersona} disabled />
                    <Input placeholder={'Impuesto por persona: $' + impuestosPorPersona} disabled />
                    <Input placeholder={'Total a pagar: $' + totalPagar} disabled />
                </Form.Item>
            </Form>
        </Space>
    )
}

export default Factura