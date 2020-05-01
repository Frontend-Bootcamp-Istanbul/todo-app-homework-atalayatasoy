import React from 'react';
import {connect} from "react-redux";
import {toggleTodo, deleteTodo} from "../redux/actions";

const TodoAppListItem = ({content, id, completed, toggleTodo, deleteTodo}) => {
    return (
    <>
        <div style={{
            textDecoration: completed ? "line-through" : "initial"
        }} onClick={() => toggleTodo(id)}>
            {content}
        <button onClick={() => deleteTodo(id)}>Delete</button>
        </div>
        
    </>
    );

};

const mapDispatchToProps = {
    toggleTodo: toggleTodo,
    deleteTodo: deleteTodo
}

export default connect(null, mapDispatchToProps)(TodoAppListItem);