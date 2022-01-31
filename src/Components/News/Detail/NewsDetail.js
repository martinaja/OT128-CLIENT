import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import parse from 'html-react-parser'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import getANews from '../../../Services/getANews'

export default function NewsDetail({ title }) {
  const { newsId } = useParams()
  const [news, setNews] = useState(null)

  useEffect(
    () =>
      (async () => {
        const request = await getANews(newsId)
        console.log('data', request)
        const newsData = request?.data
        setNews(newsData)
      })(),
    [newsId],
  )

  return (
    <Container>
      {title}
      {news && parse(news.content)}
      {news && <img src={news.image} alt={news.name} />}
    </Container>
  )
}
