import CarouselCard from './components/CarouselCard/CarouselCard'
import PaginationArrow from './components/PaginationArrow/PaginationArrow'
import { Carousel, Col, Row } from 'antd'
import { CarouselRef } from 'antd/lib/carousel'
import { createRef, FC, useState } from 'react'
import { nextEvent } from '../../../../data.json'
import { SportEvent } from '../../../../types'

interface EventCarouselProps {
  selectedSports: string[]
}

const EventCarousel: FC<EventCarouselProps> = ({ selectedSports }) => {
  const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState<boolean>(true)
  const [isRightButtonDisabled, setIsRightButtonDisabled] = useState<boolean>(false)
  const carouselRef = createRef<CarouselRef>()

  const eventsToShow = nextEvent.filter((ev: SportEvent) => selectedSports.includes(ev.sportId))

  const carouselSettings = {
    arrows: false,
    centerMode: false,
    dots: false,
    infinite: false,
    slidesToScroll: 3,
    slidesToShow: 3,
  }

  const { slidesToShow } = carouselSettings

  const handleSlideChange = (current: number, next: number) => {
    if (next + slidesToShow === nextEvent.length) {
      setIsRightButtonDisabled(true)
    }
    if (next + slidesToShow < nextEvent.length) {
      setIsRightButtonDisabled(false)
    }
    if (next > 0) {
      setIsLeftButtonDisabled(false)
    }
    if (next === 0) {
      setIsLeftButtonDisabled(true)
    }
  }

  const moreSlidesThanEvents = slidesToShow >= eventsToShow.length

  return (
    <Row justify="space-around" align="middle">
      <Col>
        <PaginationArrow
          carouselRef={carouselRef}
          direction="left"
          disabled={isLeftButtonDisabled || moreSlidesThanEvents}
        />
      </Col>
      <Col span={16}>
        <Carousel ref={carouselRef} {...carouselSettings} beforeChange={handleSlideChange}>
          {nextEvent
            .filter((ev: SportEvent) => selectedSports.includes(ev.sportId))
            .map((ev: SportEvent) => (
              <Col key={ev.sportId} style={{ display: 'flex', justifyContent: 'center' }}>
                <CarouselCard event={ev} />
              </Col>
            ))}
        </Carousel>
      </Col>
      <Col>
        <PaginationArrow
          direction="right"
          disabled={isRightButtonDisabled || moreSlidesThanEvents}
          carouselRef={carouselRef}
        />
      </Col>
    </Row>
  )
}

export default EventCarousel
