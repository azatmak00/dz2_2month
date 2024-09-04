import React, {useState} from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import Modal from "../components/modal/Modal";
import classes from "./MainPage.module.css";
import User from "../components/user/User";
import List from "../components/list/List";

const MainPage = () => {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [inputValue, setInputValue] = useState('')
    console.log(show)
    // const handleShow = () => {
    //     setShow(prevState => !prevState)
    // }
    const handleShow2 = () => {
        setShow2(prevState => !prevState)
    }
    const handleChange = (event) => {
        setInputValue(event.target.value)

    }
    const [showList, setShowList] = useState(false);

    const tasks = [
        { id: 1,
            title: 'coding',
            completed: false },
        { id: 2,
            title: 'eat',
            completed: false },
        { id: 3,
            title: 'sleep',
            completed: false },
    ];

    const handleShow = () => {
        setShowList(prevState => !prevState);
    };

    return (
        <>
            <div>
                <Button handleShow={handleShow} children={showList ? "Close" : "Open"} />
                {showList && <List tasks={tasks} />}
            </div>
            {/*<h1>{inputValue}</h1>*/}
            {/*{*/}
            {/*    show && <Modal handleShow={handleShow}>*/}
            {/*        <Input placeholder="Enter text" onChange={handleChange} value={inputValue}/>*/}

            {/*    </Modal>*/}
            {/*}*/}
            {/*{*/}
            {/*    show2 && <Modal handleShow={handleShow2}>*/}
            {/*        <User name={'Azat'} age={20} email={'azat04@gmail.com'}/>*/}
            {/*    </Modal>*/}
            {/*}*/}
            {/*<button onClick={handleShow}>Open</button>*/}
            {/*<button onClick={handleShow2}>Open2</button>*/}


            {/*<Header/>*/}
            {/*<h1>hello</h1>*/}
            {/*<Button name={"add"} color={"primary"}/>*/}
            {/*<Button name={"delete"} color={"default"}/>*/}
            {/*<Button name={"save"} color={"error"}/>*/}
            {/*<Input placeholder={'name'} color={'name'}/>*/}
            {/*<Input placeholder={'surname'} color={'surname'}/>*/}
            {/*<Input placeholder={'email'} color={'email'}/>*/}
            {/*<Footer/>*/}
        </>
    );
};

export default MainPage;