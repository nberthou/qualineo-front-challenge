import { CarouselRef } from 'antd/lib/carousel'
import { FC, RefObject } from 'react'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'

interface PaginationIconProps {
  direction: 'left' | 'right'
  disabled: boolean
  carouselRef: RefObject<CarouselRef>
}

const PaginationArrow: FC<PaginationIconProps> = ({ direction, disabled, carouselRef }) => {
  const handleChange = () => {
    if (carouselRef?.current) {
      direction === 'left' ? carouselRef?.current?.prev() : carouselRef?.current?.next()
    }
  }
  return direction === 'left' ? (
    <LeftCircleOutlined
      aria-label="Épreuve précédente"
      role="button"
      onClick={handleChange}
      style={{
        fontSize: '2em',
        color: disabled ? '#D4D4D4' : 'black',
        cursor: disabled ? 'default' : 'pointer',
      }}
      disabled={disabled}
    />
  ) : (
    <RightCircleOutlined
      aria-label="Épreuve suivante"
      role="button"
      onClick={handleChange}
      style={{
        fontSize: '2em',
        color: disabled ? '#D4D4D4' : 'black',
        cursor: disabled ? 'default' : 'pointer',
      }}
      disabled={disabled}
    />
  )
}

export default PaginationArrow
