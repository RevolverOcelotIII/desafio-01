import React, { useEffect, useRef, useState } from 'react'
import { Container } from './styles'

const DropDown: React.FC<{ children; button; marging; onLoad }> = ({
  children,
  button,
  marging = null,
  onLoad
}) => {
  const [openDrop, setODrop] = useState(false)
  const DropRef = useRef<HTMLDivElement>()
  useEffect(() => {
    function handleClickOutside(event) {
      if (DropRef.current && !DropRef.current.contains(event.target)) {
        setODrop(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
  }, [])
  useEffect(() => {
    if (onLoad !== null) {
      if (openDrop) onLoad()
    }
  }, [openDrop])
  let marg = null
  if (marging !== null) {
    marg = {
      margin: marging
    }
  }
  return (
    <Container>
      <div className="filter-s" ref={DropRef}>
        <div onClick={() => setODrop(!openDrop)}>{button}</div>
        {openDrop && (
          <div>
            <div style={marg} className="drop-content">
              {children}
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}
export default DropDown
