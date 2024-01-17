import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function  Favorite()  {
    const favList= useSelector(state => state)
  
    return (
      <Container>
        <h1 className='display-4'> Favorite Company list</h1>
        <ol>
            {favList.map(c => <li>{c}</li>)}
        </ol>
      </Container>
    )
  
}
