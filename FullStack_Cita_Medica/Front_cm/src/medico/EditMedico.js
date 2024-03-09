import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/medicos/'

const CompEditMedico = () => {
    const [Especialidad, setEspecialidad] = useState('')    
    const [Medico, setMedico] = useState('')    
    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            Especialidad: Medico,
            Medico: Medico
        })
        navigate('/')
    }

    useEffect( ()=>{
        getMedicoById()
    },[])

    const getMedicoById = async () => {
        const res = await axios.get(URI+id)
        setEspecialidad(res.data.especialidad)
        setMedico(res.data.medico)
    }

    return (
        <div>
        <h3>Edit POST</h3>
        <form onSubmit={update}>
            <div className="mb-3">
                <label className="form-label">Especialidad</label>
                <input
                    value={Especialidad}
                    onChange={ (e)=> setEspecialidad(e.target.value)}
                    type="text"
                    className="form-control"                        
                />
            </div>
            <div className="mb-3">
                <label  className="form-label">Medicos</label>
                <textarea
                    value={Medico}
                    onChange={ (e)=> setMedico(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>            
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    </div>
    )

}

export default CompEditMedico