import { useState } from 'react'

const App = () => {
    const [value, setValue] = useState({
        normal: 'Por defecto', 
        texto: '', 
        select: '', 
        check: false,
        estado: 'pheles',    
    })
    const handleChange = ({target}) => {
        
        setValue((state =>({
            ...state,
            [target.name]: target.type ==='checkbox'
            ? target.checked
            : target.value
        })))
    }
    console.log(value)
    return(
        <div>
            {value.length < 5 ? <span>Longitud minima de 5</span> : null}
            <input type='text' name='normal' value={value.normal} onChange={handleChange} />
            <textarea name='texto' onChange={handleChange} value={value.texto} />

            <select value={value.select} name='select' onChange={handleChange}>
                <option value=''>-- Seleccione --</option>
                <option value='mephisto'>Mephisto</option>
                <option value='pheles'>Pheles</option>
                <option value='mephistopheles'>MephistoPheles</option>
                <option value='baphomet'>Baphomet</option>
            </select>

            <input
                type='checkbox'
                name='check'
                onChange={handleChange}
                checked={value.check}
            />

            <div>
                <label>Mephisto</label>
                <input 
                    onChange={handleChange} 
                    type='radio' 
                    value= 'pheles' 
                    name='estado' 
                    checked={value.estado == 'pheles'}
                /> Pheles
                <input 
                    onChange={handleChange} 
                    type='radio' 
                    value= 'phelesito'
                    name='estado'
                    checked={value.estado == 'phelesito'}
                /> Phelesito
                <input 
                    onChange={handleChange} 
                    type='radio' 
                    value= 'phelesote' 
                    name='estado'
                    checked={value.estado == 'phelesote'}
                    /> Phelesote
            </div>
        </div>
    )
}

export default App