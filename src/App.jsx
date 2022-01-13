import React, { useState } from 'react';
import './App.css';
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from './components/IncompleteTodo';
import { CompleteTodo } from './components/CompleteTodo';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [imcompleteTodos, setImcompleteTodos] = useState(['アイウエオ', 'かきくけこ']);
  const [completeTodos, setCompleteTodos] = useState(['さしすせそ']);

  //テキストボックスの値を取得
  const onChangeTodoText = (e) => setTodoText(e.target.value);

  //テキストボックスの値でTodoリストを追加
  const addTodos = () => {
    const newTodos = [...imcompleteTodos, todoText];
    setImcompleteTodos(newTodos);
    setTodoText('');
  };

  //削除ボタンを機能を追加
  const deleteTodo = (index) => {
    const newTodos = [...imcompleteTodos];
    newTodos.splice(index, 1);
    setImcompleteTodos(newTodos);
  };

  //完了ボタンの機能を追加
  const onClickComplete = (index) => {
    //配列から各要素を取得
    const newTodos = [...imcompleteTodos];
    //取得した各要素のindex番目を取得
    const completeTodo = newTodos.splice(index, 1);
    //取得した要素を完了リストに追加
    const newCompleteTodos = [...completeTodos, completeTodo];
    setCompleteTodos(newCompleteTodos);
    //未完了リストから完了した要素を削除
    setImcompleteTodos(newTodos);
  };

  //戻すボタンの機能を追加
  const onCkickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newInCompleteTodos = [...imcompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setImcompleteTodos(newInCompleteTodos);
  }

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={addTodos} disabled={imcompleteTodos.length >= 5}
      />

      {imcompleteTodos.length >= 5 && (<p style={{ color: "red" }}>タスクを消化してください</p>)}

      <IncompleteTodo imcompleteTodos={imcompleteTodos} onClickComplete={onClickComplete} deleteTodo={deleteTodo} />

      <CompleteTodo completeTodos={completeTodos} onCkickBack={onCkickBack} />

    </>
  );
}

export default App;
