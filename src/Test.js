import { useState, useEffect } from 'react';
import Sayhi from "./Sayhi"


function Test() {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    useEffect(() => {
        async function fetchdata() {
            let respon = await fetch('empoyee.json')
            try {
                let resoult = await respon.json()
                setData(resoult)
                console.log(data, "data is ok")
            } catch { console.log("error") }

        }

        fetchdata()
    }, [])

    function onNameChange(event) {
        setName(event.target.value);
    }
    function onAgeChange(event) {
        setAge(event.target.value)
    }

    function handdleSubmit(e) {
        e.preventDefault()
        // name.push(setData)
        // age.push(data)

    }

    return (
        <div >
            <Sayhi hello="Hi everyone" status="i love you" />
            {data.map((empoyee) => {
                return (
                    <div key={empoyee.id}>{empoyee.name}  {empoyee.age} </div>
                )
            })}
            <div>
                <form onSubmit={handdleSubmit}>
                    <lable htmlFor="name">name</lable>
                    <input
                        type="text"
                        value={name}
                        onChange={onNameChange}
                    >
                    </input>


                    <lable htmlFor="age">age</lable>
                    <input
                        type="text"
                        value={age}
                        onchange={onAgeChange}

                    >
                    </input>
                    <button type="submit" > click </button>
                </form >
            </div>

        </div>

    )

} export default Test;