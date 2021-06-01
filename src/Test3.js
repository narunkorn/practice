import { useState, useEffect } from 'react';

function Test3() {
    const [datas, setDatas] = useState(() => {
        // เก็บข้อมูลไว้ใน localStory โดยการสร้างตัวแปล saveInput เข้ามารับ localStorage.getItem โดยรับ datas เข้ามา
        //  และตั้งเงื้อนไข ถ้า saveInput มีข้อมูลให้ return ข้อมูลกลับเข้าไปโดยแปลงเป็น JSON ก่อน แต่ถ้าไม่  return [] เปล่า
        const saveInput = localStorage.getItem("datas")
        if (saveInput) {
            return JSON.parse(saveInput)
        } else {
            return []
        }

    })
    //    เมื่อdatas มีการเปลี่ยนแปลง ให้ทำการrerenderด้วย
    useEffect(() => {
        localStorage.setItem('datas', JSON.stringify(datas))

    }, [datas])

    // ตัวแปรรับค่าinput
    const [input, setInput] = useState("")
    // ตัวแปรรับค่าแก้ไข โดยให้ค่าเริ่มต้นเป็น false ก่อน
    const [isEdit, setIsEdit] = useState(false)
    // ตัวแปรรับค่าinput ปัจจุบัน
    const [currentinput, setCurrentinput] = useState('')
    // ฟังชันรับการแก้ไข
    function handleEditInPutChange(e) {
        // โดยใช้ setCurrentinput แล้วส่งค่าปัจุบันของอินพุทเข้าไป พร้อมกับใส่ข้อมุลใหม่เข้าไปด้วย
        setCurrentinput({ ...currentinput, text: e.target.value })

    }

    function handleInputChange(e) {
        setInput(e.target.value)
    }
    // ฟังชันการควมคุมฟอร์ม โดยสร้างเงื้อนไขว่า input ไม่เท่ากับ string ให้ return setData แล้วใส่ข้อมูลใหม่เข้าไป
    function handleFormSubmit(e) {
        e.preventDefault();
        if (input !== "") {
            setDatas([
                ...datas,
                {
                    id: datas.length + 1,
                    text: input.trim()
                }
            ])
        }
        // หลังจากที่กด submitแล้ว ให้กลัยมาเป็น " "
        setInput("");
    }
    // ฟังชั้นการลบ โดยส่ง id เข้าไปเป็นparamiter
    function handleDeleteClick(id) {
        // กำหนดตัวแปรมารับขอมูล โดยนำข้อมุลไปกรอง
        const removeDatas = datas.filter((input) => {
            return input.id !== id

        })
        setDatas(removeDatas)
    }

    function handleUpdateTodo(id, updateInput) {
        const updateItem = datas.map((input) => {
            return input.id == id ? updateInput : input

        })
        setIsEdit(false)
        setDatas(updateItem)

    }

    function handleEditformSubmit(e) {
        e.preventDefault()
        handleUpdateTodo(currentinput.id, currentinput)
    }

    function handleEditClick(input) {
        setIsEdit(true)
        setCurrentinput({ ...input })

    }

    console.log(datas)

    return (
        <div style={{
            textAlign: "center"
        }}>
            <h1> Hello </h1>

            {isEdit ? (
                <form onSubmit={handleEditformSubmit}>
                    <h2>Edit Todo</h2>
                    <label htmlFor="editTodo">Edit input: </label>
                    <input
                        type="text"
                        name="editTodo"
                        placeholder="Edit input"
                        value={currentinput.text}
                        onChange={handleEditInPutChange}
                        required
                    />

                    <button type="submit">Update</button>

                </form>
            ) : (
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="input"
                        placeholder="please insert"
                        value={input}
                        onChange={handleInputChange}
                        required
                    >
                    </input>
                    <button>Add</button>
                </form>
            )}

            {datas.map((input) => {
                return (
                    <h2 key={input.id}>
                        {input.text}
                        <button onClick={() => handleDeleteClick(input.id)}>Delete</button>
                        <button onClick={() => handleEditClick(input)}>Edit</button>
                    </h2>



                )

            })}

        </div>
    )

}
export default Test3;