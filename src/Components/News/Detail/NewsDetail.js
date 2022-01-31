import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import parse from 'html-react-parser'
import { useParams } from 'react-router-dom'
import getANews from '../../../Services/getANews'
import styles from './NewsDetails.module.css'

export default function NewsDetail({ title }) {
  const { newsId } = useParams()
  const [loader, setLoader] = useState(false)
  const [news, setNews] = useState(null)

  useEffect(
    () =>
      (async () => {
        try {
          setLoader(true)
          const request = await getANews(newsId)
          const newsData = request?.data
          if (newsData) setNews(newsData)
        } catch (e) {
          console.erorr(e)
          // Insert alert
        } finally {
          setLoader(false)
        }
      })(),
    [newsId],
  )

  return loader ? (
    'Cargando...'
  ) : (
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
