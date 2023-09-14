import React, { useState } from 'react'
import "./Parents.css"

function Main() {
    const [color1, setcolor1] = useState('')
    const [color2, setcolor2] = useState('')
    const [color3, setcolor3] = useState('')
    const [heading, setheading] = useState('')
    const [dynamicnum, setdynamicnum] = useState(0)
    function Next() {


        setheading([
            "", "first", "second", "third"
        ])
        if (dynamicnum < 3) { setdynamicnum(dynamicnum + 1) }
        if (color1 == '') {
            setcolor1('purple')
        } else if (color1 == 'purple' && color2 == '') {
            setcolor2('purple')
        } else if (color1 == 'purple' && color2 == 'purple' && color3 == '') {
            setcolor3('purple')
        }
        console.log(dynamicnum);
    }
    function Previous() {
        console.log("SALAM");
        if (dynamicnum >= 1) {
            setdynamicnum(dynamicnum - 1)
            console.log(dynamicnum);
        }
        if (color3 == "purple") {
            setcolor3('')
        } else if (color2 == "purple") {
            setcolor2('')

        } else if (color1 == "purple") {
            setcolor1("")
        }
    }


    let data = [{
        number: 1
    }, {
        number: 2
    }, {
        number: 3
    }]
    return (
        <div className='Main'>
            <div className="circles">
                {/* {data.map((ele) => {
                    return <div className='circle' style={{ backgroundColor:  ? "red" : "transparent" }}>{ele.number}</div>
                })} */}
                <div className="circle" style={{ backgroundColor: color1 }}>1</div>
                <div className="circle" style={{ backgroundColor: color2 }}>2</div>
                <div className="circle" style={{ backgroundColor: color3 }}>3</div>
            </div>
            <h1 className='heading'>{heading[dynamicnum]}</h1>
            <div className='btn-div'>
                <button className='btn' onClick={Previous}>Previous </button>
                <button className='btn' onClick={Next}>Next</button>
            </div>


        </div>
    )
}

export default Main