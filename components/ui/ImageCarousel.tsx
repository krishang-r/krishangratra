'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const images = [
  '/Image/img1.jpeg',
  '/Image/img2.jpeg',
  '/Image/img3.jpeg',
  '/Image/img4.jpeg',
  '/Image/img5.jpeg',
  '/Image/img6.jpeg',
  '/Image/img7.jpeg',
  // add more if needed
]

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleRange = 3 // show 2 images on either side of center

    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prev) =>
        (prev - 1 + images.length) % images.length
        )
    }, 2500)

    return () => clearInterval(interval)
    }, [])


  const getStyle = (index: number) => {
  const total = images.length
  let relativeIndex = (index - currentIndex + total) % total

  if (relativeIndex > total / 2) {
    relativeIndex -= total
  }

  if (Math.abs(relativeIndex) > visibleRange) {
    return { display: 'none' }
  }

  const gap = 230 // distance between images
  const translateX = relativeIndex * gap
  const scale = 1 - Math.abs(relativeIndex) * 0.15
  const opacity = 1 - Math.abs(relativeIndex) * 0.4
  const zIndex = 100 - Math.abs(relativeIndex) * 10

  const transition = 'all 0.8s ease-in-out'

  // Custom easing for entering (left) and exiting (right)
  if (relativeIndex === -visibleRange) {
    // entering from left
    return {
      transform: `translateX(${translateX}px) scale(0.7)`,
      opacity: 0,
      zIndex: 0,
      position: 'absolute' as const,
      top: '50%',
      left: '50%',
      transformOrigin: 'center',
      transition,
      translate: '-50% -50%',
    }
  }

  if (relativeIndex === visibleRange) {
    // exiting to right
    return {
      transform: `translateX(${translateX}px) scale(0.7)`,
      opacity: 0,
      zIndex: 0,
      position: 'absolute' as const,
      top: '50%',
      left: '50%',
      transformOrigin: 'center',
      transition,
      translate: '-50% -50%',
    }
  }

  // middle and near-center images
  return {
    transform: `translateX(${translateX}px) scale(${scale})`,
    opacity,
    zIndex,
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transformOrigin: 'center',
    transition,
    translate: '-50% -50%',
  }
}


  return (
    <div className="relative w-full h-[600px] overflow-hidden flex items-center justify-center">
      <div className="relative w-full h-full">
        {images.map((src, index) => (
          <div key={index} style={getStyle(index)} className="w-[300px] h-[400px]">
            <div className="w-full h-full overflow-hidden rounded-xl border-4 border-white shadow-2xl">
                <Image
                src={src}
                alt={`Carousel ${index}`}
                width={300}
                height={200}
                className="w-full h-full object-cover"
                />
            </div>
            </div>

        ))}
      </div>
    </div>
  )
}

export default ImageCarousel
