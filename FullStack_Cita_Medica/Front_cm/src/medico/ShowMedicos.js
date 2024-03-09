import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/medicos/'


const CompShowMedicos = () => {
    
    const [medicos, setMedico] = useState([])
    useEffect( ()=>{
        getMedicos()
    },[])

    //procedimineto para mostrar todos los medicos
    const getMedicos = async () => {
        const res = await axios.get(URI)
        setMedico(res.data)
    }

    //procedimineto para eliminar un medico
    const deleteMedico = async (id) => {
       await axios.delete(`${URI}${id}`)
       getMedicos()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Especialidad</th>
                                <th>Medico</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { medicos.map ( (medico) => (
                                <tr key={ medico.id}>
                                    <td> { medico.Especialidad } </td>
                                    <td> { medico.Medico } </td>
                                    <td>
                                        <Link to={`/edit/${medico.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deleteMedico(medico.id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default CompShowMedicos