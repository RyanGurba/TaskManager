import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { updateTodoAPI } from '../services/api'; 

class UpdateTodoForm extends React.Component {
    state = {
        id: "",
        name: "",
        description: "",
        finished: "",
        due_date: ""
    };

    componentDidMount() {
        if (this.props.todo) {
            const { id, name, description, finished, due_date } = this.props.todo;
            this.setState({ id, name, description, finished, due_date });
        }
    }
    
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    handleFormSubmit = (e) => {
        e.preventDefault();

        const { id, name, description, finished, due_date } = this.state;
        const updatedTodo = {
            id,
            name,
            description,
            finished: finished === "true", // Convert string "true" or "false" to boolean
            due_date
        };

        // Call the updateTodoAPI to update the todo on the server
        updateTodoAPI(id, updatedTodo)
            .then(response => {
                console.log(response.data);
                // Handle any further UI updates or notifications here
            })
            .catch(error => {
                console.error("Error updating todo:", error.response ? error.response.data : error.message);
            });
    }

    render() {
        return (
            <Form onSubmit={this.handleFormSubmit}>
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
                        value="true"
                        onChange={this.onChange}
                        checked={this.state.finished === "true"}
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
                <Button>Update</Button>
            </Form>
        );
    }
}

export default UpdateTodoForm;
