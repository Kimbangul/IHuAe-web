const leftPad = (value: number) => {
  if (value>=10) return value.toString();
  return `0${value}`
}

export default leftPad;