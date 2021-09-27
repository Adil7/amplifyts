import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Input,
  Form,
  Button,
  Radio,
  Switch,
  Slider,
  Select,
  message,
  Checkbox,
  InputNumber,
} from "antd";
import { useHistory } from "react-router";


const { Title } = Typography;

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const FormApp = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div>
      <Row gutter={[40, 0]}>
        <Col span={23}>
          <Title style={{ textAlign: "center" }} level={2}>
            Enter data for user form here
          </Title>
        </Col>
      </Row>
      <Row gutter={[40, 0]}>
        <Col span={18}>
          <Form
            name="validate_other"
            {...formItemLayout}
            onFinish={onFinish}
            initialValues={{
              "input-number": 0,
              rate: 3.5,
            }}
          >
            <Form.Item
              name="select"
              label="Select buyer type"
              hasFeedback
              rules={[
                { required: true, message: "Please select a buyer type!" },
              ]}
            >
              <Select placeholder="Please select a buyer type">
                <Option value="firstime">First time buyer</Option>
                <Option value="investor">Investor</Option>
                <Option value="somewhere">Someplace to live</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="select-multiple"
              label="Choose your floor plans[multiple]"
              rules={[
                {
                  required: true,
                  message: "Please select preferred unit types!",
                  type: "array",
                },
              ]}
            >
              <Select
                mode="multiple"
                placeholder="Please select preferred unit types"
              >
                <Option value="1">1-bedroom</Option>
                <Option value="2">2-bedroom</Option>
                <Option value="3">3-bedroom</Option>
                <Option value="4">4-bedroom</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="select-multiple2"
              label="Choose your unit designation"
              rules={[
                {
                  required: true,
                  message:
                    "Please select preferred unit designation (ground/upper floor)!",
                  type: "array",
                },
              ]}
            >
              <Select
                mode="multiple"
                placeholder="Please select preferred unit designation (ground/upper floor)"
              >
                <Option value="1">low</Option>
                <Option value="2">medium</Option>
                <Option value="3">high</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Enter your budget: ">
              <Form.Item name="input-number">
                <InputNumber
                  style={{ width: 610, textAlign: "left" }}
                  defaultValue={1000}
                  formatter={(value) =>
                    `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                />
              </Form.Item>
              <span className="ant-form-text"></span>
            </Form.Item>

            <Form.Item name="slider" label="Cash flow (thousands)">
              <Slider
                tipFormatter={null}
                marks={{
                  0: "100",
                  20: "200",
                  40: "300",
                  60: "400",
                  80: "500",
                  100: "600+",
                }}
              />
            </Form.Item>

            <Form.Item name="checkbox-group" label="Select premium features">
              <Checkbox.Group>
                <Row>
                  <Col span={10}>
                    <Checkbox value="A" style={{ lineHeight: "32px" }}>
                      LakeView
                    </Checkbox>
                  </Col>
                  <Col span={10}>
                    <Checkbox value="B" style={{ lineHeight: "32px" }}>
                      Balcony
                    </Checkbox>
                  </Col>
                  <Col span={10}>
                    <Checkbox value="C" style={{ lineHeight: "32px" }}>
                      Terrace
                    </Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </Form.Item>

            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default FormApp;
