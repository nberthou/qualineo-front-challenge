import EventCarousel from './components/EventsCarousel/EventsCarousel'
import EventSearchBar from './components/EventSearchBar/EventSearchBar'
import {
  Col,
  Empty,
  Row,
  Space,
  Typography
  } from 'antd'
import { nextEvent } from '../../data.json'
import { SportEvent } from '../../types'
import { useState } from 'react'

const { Title } = Typography

const EventsSection = () => {
  const sportsIds = nextEvent.map((ev: SportEvent) => ev.sportId)
  const [selectedSports, setSelectedSports] = useState<string[]>(sportsIds)

  const eventsToShow = nextEvent.filter((ev: SportEvent) => selectedSports.includes(ev.sportId))

  return (
    <Space direction="vertical" size="middle" style={{ width: '100%', marginTop: '1.5em' }}>
      <EventSearchBar selectedSports={selectedSports} setSelectedSports={setSelectedSports} />
      <Row justify="center">
        <Col span={21}>
          <Title level={3}>Prochaines épreuves</Title>
        </Col>
      </Row>
      {eventsToShow.length ? (
        <EventCarousel selectedSports={selectedSports} />
      ) : (
        <Empty description="Aucune épreuve de prévu" />
      )}
    </Space>
  )
}

export default EventsSection
