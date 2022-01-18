import { Button, Col, DatePicker, Input, Row, Select, Space } from "antd";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SchemaItemT, Schema } from "./schema";
import opConverter from "./opConverter";

const { Option } = Select;

interface Props {
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const Filter = ({ setVisible }: Props) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionSchema, setSelectedOptionSchema] =
    useState<SchemaItemT>();

  useEffect(() => {
    if (selectedOption) {
      const value = Object.values(Schema).find(
        ({ name }) => name === selectedOption
      );
      setSelectedOptionSchema(value);
    }
  }, [selectedOption]);

  const getTitleFromOption = () => {
    return (
      <Select
        size="small"
        placeholder="Servis adi"
        onChange={(value) => {
          setSelectedOption(value);
        }}
        style={{ width: 100 }}
      >
        {Object.values(Schema).map((schemaItem) => (
          <Option value={schemaItem.name}>{schemaItem.name}</Option>
        ))}
      </Select>
    );
  };

  const getValueFieldFromOption = () => {
    switch (selectedOptionSchema?.type) {
      case "multiselect":
        return (
          <Select
            placeholder="degerler"
            style={{ width: "120px" }}
            size="small"
          >
            {selectedOptionSchema?.values?.map((value) => (
              <Option key={value} value={value}>
                {value}
              </Option>
            ))}
          </Select>
        );
      case "money":
        return <Input style={{ width: "120px" }} size="small"></Input>;
      case "datetime":
        return (
          <DatePicker
            allowClear
            size="small"
            onChange={(e) => console.log(e)}
          />
        );
      default:
        return (
          <Select
            placeholder="degerler"
            size="small"
            style={{ width: "120px" }}
            notFoundContent="Lutfen once baslik seciniz."
          ></Select>
        );
    }
  };
  const getConditionFromOption = () => {
    return (
      <Select
        style={{ width: 120 }}
        notFoundContent="Lutfen once baslik seciniz."
        placeholder="esitlikler"
        size="small"
      >
        {selectedOptionSchema?.ops?.map((op) => (
          <Option key={op} value={op}>
            {opConverter(op)}
          </Option>
        ))}
      </Select>
    );
  };
  return (
    <>
      <Row justify="start">
        <Space>
          <Col>
            <p>Baslik</p>
            {getTitleFromOption()}
          </Col>
          <Col>
            <p>Kosul</p>
            {getConditionFromOption()}
          </Col>
          <Col>
            <p>Deger</p>
            {getValueFieldFromOption()}
          </Col>
        </Space>
      </Row>

      <Row justify="end" style={{ marginTop: ".5rem" }}>
        <Col>
          <Space>
            <Button size="small" onClick={() => setVisible((s: boolean) => !s)}>
              Iptal
            </Button>
            <Button size="small" type="primary">
              Ekle
            </Button>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default Filter;
