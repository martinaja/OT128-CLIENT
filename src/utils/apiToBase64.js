const getBase64FromUrl = async (url) => {
  const data = await fetch(url)
  console.log('data Q ES', data)
  const blob = await data.blob()

  return new Promise((resolve) => {
    const reader = new FileReader()
    console.log('reader', reader)
    reader.readAsDataURL(blob)
    reader.onloadend = () => {
      const base64data = reader.result
      resolve(base64data)
      return base64data
    }
  })
}

export default getBase64FromUrl
