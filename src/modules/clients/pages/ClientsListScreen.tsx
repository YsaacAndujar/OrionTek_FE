import { useNavigate } from "react-router-dom";
import { useClientsList } from "../hooks/useClientsList";
import { Button, Input, Row, Table, Typography } from "antd";
const { Search } = Input;
const { Title, } = Typography;

export const ClientsListScreen = () => {
  const { columns, clients, pagination, onPaginationChange, onSearch } = useClientsList()
  const navigate = useNavigate()
  return (
    <>
      <Title level={2}>Clients</Title>
      <Row justify='end' style={{marginBottom:'25px'}}>
        <Button type="primary" size="large" onClick={()=>{navigate('add')}}>Add</Button>
      </Row>
      <Search placeholder="Search" size="large" allowClear onSearch={onSearch} style={{ width: 300,marginBottom:'25px' }} />
      <Table columns={columns} dataSource={clients} rowKey="id" pagination={{...pagination, onChange:onPaginationChange }}/>
    </>
  )
};
