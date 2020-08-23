import React, {Component} from "react";
import {connect} from 'react-redux'
import createPost from "./redux/actions";

class PostForm extends Component {
    state = {
        title: ''
    }

    submitHandler = event => {
        event.preventDefault();
        const {title} = this.state

        if (!title.trim()) {
            return
        }

        const newPost = {
            title, id: Date.now().toString()
        }

        this.props.createPost(newPost)
        this.setState({title: ''})
    }

    //создаем новый обьект, разворачиваем пред. стейт
    //универсальный способ обработки инпутов, сколько бы инпутов не добавили
    //если у них будет нейм и тайтл и один обработчик один метод будет позволять все изменять
    changeInputHandler = event => {
        event.persist()
       this.setState(prev => ({...prev, ...{
           [event.target.name]: event.target.value
       }}))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Заголовок поста</label>
                    <input type="text"
                           className="form-control"
                           id="title"
                           value={this.state.title}
                           name="title"
                           onChange={this.changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost
}

export default connect(null, mapDispatchToProps)(PostForm);