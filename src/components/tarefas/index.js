import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './tarefas.css'

export default function Tarefas( tarefas, handleEdit, handleDelete) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit
              className="edit"
              onClick={(e) => this.handleEdit(e, index)}
            />
            <FaWindowClose
              className="edit"
              onClick={(e) => this.handleDelete(e, index)}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  terafas: PropTypes.array.isRequired
  handleEdit: PropTypes.func.isRequired
  handelDelete: PropTypes.func.isRequired,
};
