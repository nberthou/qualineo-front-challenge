import moment from 'moment'
import { Card } from 'antd'
import { FC } from 'react'
import { SportEvent } from '../../../../../../types'

const { Meta } = Card

interface CarouselCardProps {
  event: SportEvent
}

const CarouselCard: FC<CarouselCardProps> = ({ event }) => {
  return (
    <Card
      cover={
        <img
          alt={event.sportTitle}
          src={event.pictureUrl}
          style={{ width: 300, height: 200, objectFit: 'cover' }}
        />
      }
      style={{ width: 300, height: 300 }}
    >
      <Meta
        title={event.sportTitle}
        description={moment.unix(parseInt(event.date, 10)).format('DD/MM/YYYY - HH:mm')}
      />
    </Card>
  )
}

export default CarouselCard
