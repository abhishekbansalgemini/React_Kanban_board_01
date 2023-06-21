import React, { useState } from 'react'
import "./Card.css"
import { X } from 'react-feather'
import DetailsModal from '../DetailsModal/DetailsModal'

function Card(props) {
  return (
    <>
      {
        props.card.title.toLowerCase().includes(props.inputValue.toLowerCase()) ? <div className="card" draggable
          onDragEnd={() => props.handelDragEnd(props.card?.id, props.boardId)}
          onDragEnter={() => props.handelDragEnter(props.card?.id, props.boardId)}
        >
          <div className="card_top">
            <div className="card_top_labels card_title">
              {props.card?.title}
            </div>
            <X onClick={() => props.removeCard(props.card.id, props.boardId)}></X>
          </div>

          <div className="card_footer">
            {
              <p>
                {props.card?.desc}
              </p> 
            }
            
          </div>
          <DetailsModal Title={props.card?.title} Description = {props.card?.desc} StartDate = {props.card?.startDate} EndDate = { props.card?.endDate} 
            Assignee = {props.card?.assignee} Task = {props.card?.Task}></DetailsModal>
        </div> : ""}
    </>

  )
}

export default Card