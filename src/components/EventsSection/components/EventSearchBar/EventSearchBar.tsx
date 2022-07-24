import { Col, Row, Select } from 'antd'
import { FC } from 'react'
import { nextEvent } from '../../../../data.json'
import { SportEvent } from '../../../../types'

interface EventSearchBarProps {
  selectedSports: string[]
  setSelectedSports: (value: string[]) => void
}

const { Option } = Select

const EventSearchBar: FC<EventSearchBarProps> = ({ selectedSports, setSelectedSports }) => {
  const handleSelect = (value: string[]) => {
    setSelectedSports(value)
  }

  const selectOptions = nextEvent.map((ev: SportEvent) => (
    <Option key={ev.sportId} value={ev.sportId}>
      {ev.sportTitle}
    </Option>
  ))

  return (
    <Row justify="center">
      <Col span={21}>
        <Select
          mode="multiple"
          allowClear
          placeholder="Select a sport"
          onChange={handleSelect}
          defaultValue={selectedSports}
          style={{ width: '100%' }}
        >
          {selectOptions}
        </Select>
      </Col>
    </Row>
  )
}

export default EventSearchBar
