import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/medicos/'

const CompCreateMedico = () => {
    const [Especialidad, setEspecialidad] = useState('')
    const [Medico, setMedico] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {Especialidad: Especialidad, Medico:Medico})
        navigate('/')
    }   

    return (
        <div>
           <h3>Create POST</h3>
           <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Especialidad</label>
                    <input
                        value={Especialidad}
                        onChange={ (e)=> setEspecialidad(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>   
                 <div className='mb-3'>
                     <label className='form-label'>Medico</label>
                    <textarea
                        value={Medico}
                        onChange={ (e)=> setMedico(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>  
                 <button type='submit' className='btn btn-primary'>Store</button>                  
           </form>
        </div>
    )
}

export default CompCreateMedico