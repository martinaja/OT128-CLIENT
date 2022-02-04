import React from 'react';
import { useState, useEffect } from 'react';
import { GetPublicHandle } from '../../Services/publicApiService';
import { Stack as Grid } from '@mui/material';
import CustomCard from './../Card/CustomCard';


const NewsList = () => {    
    const [data, setData] = useState('')

    const url = process.env.REACT_APP_API_NEWS_GET

    const resp = GetPublicHandle(url)
  
    useEffect(() => {
      if (resp) {
        const { data } = resp
        setData(data)
      }
    }, [resp])


    return (
        <>

        <h1>Novedades</h1>
        
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {data?.length > 0 ? 
                    data?.map((element) => {
                        return(
                            <Grid item xs={2} sm={4} md={4} key={element.id}>,
                       
                            <CustomCard image={String(element.image)} name={String(element.name)} description={String(element.description)}/>,
                   
                            </Grid>
                        )
                    }) 
                :
                    <p>No hay novedades</p>
                }
        </Grid>


    
        {/* <CustomCard name={"name"} description={"description"} /> */}


        </>
    );
}
 
export default NewsList;