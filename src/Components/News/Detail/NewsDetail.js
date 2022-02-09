import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import parse from 'html-react-parser'
import { useParams } from 'react-router-dom'
import styles from './NewsDetails.module.css'
import { getNews } from '../../../Services/apiServices/newsApiService'
import { alertServiceError } from '../../AlertService'
import { Title } from '../../Title'

export default function NewsDetail({ title }) {
  const { newsId } = useParams()
  const [loader, setLoader] = useState(false)
  const [news, setNews] = useState(null)

  useEffect(
    () =>
      (async () => {
        try {
          setLoader(true)
          const requestNews = await getNews(newsId)
          const newsData = requestNews.data?.data
          newsData
            ? setNews(newsData)
            : alertServiceError(
                'No se pudo cargar la noticia',
                'Verificá que la URL sea correcta',
              )
        } catch (e) {
          console.erro(e)
          alertServiceError(
            'No se pudo obtener la información solicitada',
            e.message,
          )
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
        <Title children={news?.name} image={news?.image} />
        <small className={[styles['entry__meta']]}>
          {news && new Date(news.created_at).toLocaleDateString('es-AR')}
        </small>
      </div>
      {/* <div className={[styles['entry__img']]}>
        {news && <img src={news.image} alt={news.name} />}
      </div> */}
      <div className={[styles['entry__content']]}>
        {news && parse(news.content)}
      </div>
    </Container>
  )
}
