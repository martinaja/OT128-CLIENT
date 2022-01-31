import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import parse from 'html-react-parser'
import { useParams } from 'react-router-dom'
import getANews from '../../../Services/getANews'
import styles from './NewsDetails.module.css'

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
    <Container className={[styles.entry]}>
      <div className={[styles['entry_header']]}>
        {title}
        <small className={[styles['entry__meta']]}>
          {news && new Date(news.created_at).toLocaleDateString('es-AR')}
        </small>
      </div>
      <div className={[styles['entry__img']]}>
        {news && <img src={news.image} alt={news.name} />}
      </div>
      <div className={[styles['entry__content']]}>
        {news && parse(news.content)}
      </div>
    </Container>
  )
}
