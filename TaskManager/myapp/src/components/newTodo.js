import React from 'react';
import {Button, Form, FormGroup, Input, Label } from 'reactstrap';

import axios from 'axios';
import { createTodoAPI, createTodo, editTodo, updateTodoAPI } from '../services/api';
import UpdateTodoForm from './updateTodo';

class NewTodoForm extends React.Component {

    state = {
        name: "",
        description: "",
        finished: "",
        due_date: "",
        input_time: "",

    };

    componentDidMount() {
        if(this.props.todo){
            const { name, description, finished, due_date,input_time} = this.props.todo;
            this.setState({name,description,finished, due_date,input_time});
        }
    }

    createTodo = e => {
        e.preventDefault();
    
        const { name, description, finished, due_date } = this.state;
    
        const todoData = {
          name,
          description,
          finished,
          due_date,
        };
    
        createTodoAPI(todoData).then(() => {
          this.props.resetState();
          this.props.toggle();
        }).catch(error => {
          console.error("Error creating todo:", error);
        });
      };
    
      editTodo = async (e) => {
        e.preventDefault();
        const { id, name, description, finished, due_date } = this.state;
    
        try {
            const response = await updateTodoAPI(id, {
                name,
                description,
                finished,
                due_date,
            });
    
            if (response.status === 200) {
               
                this.props.resetState();
                this.props.toggle();
            } else {
                console.error("Error updating todo:", response.statusText);
            }
        } catch (error) {
            console.error("Error updating todo:", error);
        }
    };
    
    
    
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
      

  

    defaultIfEmpty = value => {
        return value === ""? "" : value;
    };

    render() {
        return (
          <Form onSubmit={this.props.todo ? this.editTodo : this.createTodo}>
            <FormGroup>
              <Label for="name">Name:</Label>
              <Input
                type="text"
                name="name"
                onChange={this.onChange}
                value={this.defaultIfEmpty(this.state.name)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description:</Label>
              <Input
                type="text"
                name="description"
                onChange={this.onChange}
                value={this.defaultIfEmpty(this.state.description)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="finished">Completed:</Label>
              <Input
                type="radio"
                name="finished"
                value={true}
                onChange={this.onChange}
                checked={this.state.finished === true}
              />
            </FormGroup>
            <FormGroup>
              <Label for="due_date">Due Date:</Label>
              <Input
                type="date"
                name="due_date"
                onChange={this.onChange}
                value={this.defaultIfEmpty(this.state.due_date)}
              />
            </FormGroup>
            <Button>Send</Button>
          </Form>
        );
      }


}

export default NewTodoForm;