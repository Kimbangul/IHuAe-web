const chunkArr : chunkArrType<any[]> = (data, size) => {
  const arr = [];
  for (let i = 0; i < data.length; i += size) {
    arr.push(data.slice(i, i + size));
  }
  return arr;
};

type chunkArrType<T> = (data: T, size: number) => T[];

export default chunkArr;