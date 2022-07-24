import {
  Col,
  Row,
  Space,
  Table,
  Typography
  } from 'antd'
import { medals } from '../../data.json'
import { SortOrder } from 'antd/lib/table/interface'

const { Title } = Typography

const tableColumns = [
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'Bronze',
    dataIndex: 'bronze',
    key: 'bronze',
    sorter: (a: any, b: any) => a.bronze - b.bronze,
  },
  {
    title: 'Silver',
    dataIndex: 'silver',
    key: 'silver',
    sorter: (a: any, b: any) => a.silver - b.silver,
  },
  {
    title: 'Gold',
    dataIndex: 'gold',
    key: 'gold',
    sorter: (a: any, b: any) => a.gold - b.gold,
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    sorter: (a: any, b: any) => a.total - b.total,
    defaultSortOrder: 'descend' as SortOrder,
  },
]

const tableData = medals.map((medal) => ({
  country: medal.country,
  ...medal.medals,
  total: Object.values(medal.medals).reduce((a, b) => a + b),
  key: medal.country,
}))

const MedalsSection = () => {
  return (
    <Space direction="vertical" size="middle" style={{ width: '100%', marginTop: '3em' }}>
      <Row justify="center">
        <Col span={21}>
          <Title level={3}>Médailles</Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={21}>
          <Table dataSource={tableData} columns={tableColumns} pagination={false} />
        </Col>
      </Row>
    </Space>
  )
}

export default MedalsSection
