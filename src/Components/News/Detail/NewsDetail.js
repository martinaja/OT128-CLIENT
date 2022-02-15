import React, { useEffect, useState } from 'react'
import { Box, Container } from '@mui/material'
import { useHistory, useParams } from 'react-router-dom'
import { getNews } from '../../../Services/apiServices/newsApiService'
import { alertServiceError } from '../../AlertService'
import Spinner from '../../Spinner'
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

export default function NewsDetail() {
  const { newsId } = useParams()
  const history = useHistory()
  const [loader, setLoader] = useState(false)
  const [news, setNews] = useState(null)


  useEffect(
    () =>
      (async () => {
        setLoader(true)

        const requestNews = await getNews(newsId)
        if (requestNews.error) {
          alertServiceError(
            requestNews.message,
            'No se pudo obtener la información solicitada',
          )
          history.push('/')
        }

        const newsData = requestNews.data?.data
        newsData
          ? setNews(newsData)
          : alertServiceError(
              'No se pudo cargar la noticia',
              'Verificá que la URL sea correcta',
            ) && history.push('/')

        setLoader(false)
      })(),
    [newsId, history],
  )


  return <> loader ? (
    <Spinner />
  ) : 
  
  <Controller>
        <Box>
          <Scene
            duration={800}
            pin={{ pushFollowers: true }}
            triggerHook={0.5}
            offset={250}
          >
    <Container>

      <h1>{news?.name}</h1>
      <Box
        component="img"
        sx={{ 
          maxwidth: 'auto',
          maxWidth: { xs: 350, md: 800 },
        }}
        alt={news?.name}
        src={news?.image}
      />
        <Box component="span" sx={{ fontSize: 16, mt: 1, display: 'flex'}}>
        {news && new Date(news.created_at).toLocaleDateString('es-AR')}
        </Box>
    </Container>
          </Scene>
          <h2>Comentarios</h2>
          <Scene
            duration={300}
            triggerHook={0.75}
            pin={{ pushFollowers: false }}
          >
            {(progress) => (
              <div className="mx-auto">
                <Timeline totalProgress={progress} paused>
                  <Timeline
                    target={<p className="timeline">{news && String(news.content) && 'No hay comentarios'}</p>}
                  >
                    <Tween from={{ opacity: -1 }} to={{ opacity: 1 }} />
                  </Timeline>
         
                </Timeline>
              </div>
            )}
          </Scene>
        </Box>
      </Controller>



  </>
}
