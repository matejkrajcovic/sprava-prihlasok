import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

const Answers = ({answers}) => {
  const questions = [
    {name: 'Dátum narodenia', field: 'datumNarodenia'},
    {name: 'Štúdium/práca', field: 'studiumPraca'},
    {name: 'Adresa', field: 'adresa'},
    {name: 'Telefónne číslo', field: 'telefon'},
    {name: 'Email', field: 'email'},
    {name: 'Rodné číslo', field: 'rodneCislo'},
    {name: 'Alternatívna družina', field: 'alternativnaDruzina'},
    {name: 'Môžeš celých 14 dní stráviť', field: 'celych14dni'},
    {name: 'Odkiaľ si sa o táboroch dozvedel', field: 'odkialSaDozvedel'},
    {name: 'Čo ťa nakoniec motivovalo prihlásiť sa', field: 'coNakoniecMotivovalo'},
    {name: 'Telesný stav', field: 'telesnyStav'},
    {name: 'Závislosť', field: 'zavislost'},
    {name: 'Zručnosť', field: 'zrucnost'},
    {name: 'Zložil si už kosti na noc', field: 'zlozilSiKostiNaNoc'},
    {name: 'Bol si už na tábore', field: 'bolSiUzNaTabore'},
    {name: 'Bojíš sa', field: 'bojisSa'},
    {name: 'Rád sa hráš', field: 'radSaHras'},
    {name: 'Čo ťa poteší', field: 'coTaPotesi'},
    {name: 'Je dobré ukrývať myšlienky', field: 'ukryvatMyslienky'},
    {name: 'Jedlo', field: 'jedlo'},
    {name: 'Znaky', field: 'znaky'},
    {name: 'Báseň:', field: 'basen'},
    {name: 'Nevšedná vlastnosť', field: 'nevsednaVlastnost'},
    {name: 'Desať vecí', field: 'desatVeci'},
    {name: 'Hudba', field: 'hudba'},
    {name: 'Čo si sľubuješ', field: 'coSiSlubujes'},
    {name: 'Dubová', field: 'dubova'},
    {name: 'Kde je pes zakopaný', field: 'pesZakopany'}
  ]

  if ((answers === undefined) || (answers.length === 0)) {
    return (
      <ListGroup />
    )
  }

  return (
    <ListGroup>
      {questions.map((question, index) => {
        return (
          <ListGroupItem key={index}>
            <b>{question.name}:</b> {answers[question.field]}
          </ListGroupItem>
        )
      })}
    </ListGroup>
  )
}

export default Answers
