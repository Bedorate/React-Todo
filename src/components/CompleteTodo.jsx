import React from "react";

export const CompleteTodo = (props) => {
  const {completeTodos,onCkickBack} = props;
  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul id="complete-list">
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onCkickBack(index)}>戻す</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}