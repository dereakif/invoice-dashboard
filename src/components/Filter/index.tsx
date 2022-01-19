import { Button, Col, DatePicker, Input, Row, Select, Space } from "antd";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SchemaItemT, Schema } from "./schema";
import opConverter from "./opConverter";
import { initialTag, TagT } from "../../interfaces/filter.interfaces";
import { v4 as uuidv4 } from "uuid";

const { Option } = Select;

interface Props {
  setVisible: Dispatch<SetStateAction<boolean>>;
  tag: TagT;
  setTag: Dispatch<SetStateAction<TagT>>;
  setFilters: Dispatch<SetStateAction<TagT[]>>;
}
const Filter = ({ setVisible, tag, setTag, setFilters }: Props) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionSchema, setSelectedOptionSchema] =
    useState<SchemaItemT | null>();

  useEffect(() => {
    if (selectedOption) {
      const value = Object.values(Schema).find(
        ({ name }) => name === selectedOption
      );
      setSelectedOptionSchema(value);
    }
  }, [selectedOption]);

  const resetStates = () => {
    setTag(initialTag);
    setSelectedOption("");
    setSelectedOptionSchema(null);
  };
  const getTitleFromOption = () => {
    return (
      <Select
        size="small"
        placeholder="Servis adi"
        value={tag.name}
        onChange={(value) => {
          setSelectedOption(value);
          setTag((prev) => ({ ...prev, name: value }));
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
            onChange={(value) => setTag((prev) => ({ ...prev, value }))}
            value={tag.value}
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
            onChange={(date, dateString) => {
              console.log({ dateString });
              dateString && setTag((prev) => ({ ...prev, value: dateString }));
            }}
          />
        );
      default:
        return (
          <Select
            placeholder="degerler"
            size="small"
            style={{ width: "120px" }}
            notFoundContent="Lutfen once baslik seciniz."
          />
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
        onChange={(value) => setTag((prev) => ({ ...prev, op: value }))}
        value={tag.op}
      >
        {selectedOptionSchema?.ops?.map((op) => (
          <Option key={op} value={op}>
            {opConverter(op, "asText")}
          </Option>
        ))}
      </Select>
    );
  };

  const handleAddTag = () => {
    if (!tag.name || !tag.op || !tag.value) {
      return;
    }
    setFilters((prev) => {
      const current = [...prev];
      current.push({ ...tag, id: uuidv4() });
      return current;
    });
    resetStates();
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
            <Button onClick={handleAddTag} size="small" type="primary">
              Ekle
            </Button>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default Filter;
