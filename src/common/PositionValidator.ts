const PositionValidator = (position: string):boolean => {
  const positionRegex = /[A-H][1-8]/
  return positionRegex.test(position)
}

export default PositionValidator
