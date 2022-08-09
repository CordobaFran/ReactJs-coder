import React, { useContext, useEffect, useState } from 'react'
import { User } from "../../Context/UserContext"
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const UserForm = () => {

  const [hasUser, setHasUser] = useState(false)

  const { addUser, userData } = useContext(User)

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: ""
    }
  });

  const onSubmit = data => {
    if (data.email === data.emailConfirm) {
      addUser([{ name: data.name, phone: data.phone, email: data.email }])
      swal({
        title: "Datos Guardados",
        text: "Se han guardado tus datos.",
        icon: "success",
        button: "Volver",
      });
      setHasUser(true)
    } else {
      swal({
        title: "Confirmación Incorrecta",
        text: "Tus Email no coinciden.",
        icon: "error",
        button: "Volver",
      });
    }
  };

  const deleteData = () => {
    addUser([])
    setHasUser(false)
  }

  return (
    <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">Tus Datos</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className='w-100'>
                <span>Nombre:</span><br />
                <input className='w-100' {...register("name", { required: "Ingrese su nombre", pattern: /^([a-zA-ZùÙüÜäàáëèéïìíöòóüùúÄÀÁËÈÉÏÌÍÖÒÓÜÚñÑ\s]+)$/ })} />
                <p className="text-danger">{errors.name?.message}</p>
              </label>
              <br />
              <label className='w-100'>
                <span>Telefono:</span><br />
                <input className='w-100'{...register("phone", { required: "Ingrese su telefono", pattern: /(\+?54)?(15|(0?\d{0,4}))?((\d{4})(\d{4}))/g })} />
                <p className="text-danger">{errors.phone?.message}</p>
              </label>
              <br />
              <label className='w-100'>
                <span>E-mail:</span><br />
                <input className='w-100' {...register("email", { required: "Ingrese su email", pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })} />
                <p className="text-danger">{errors.email?.message}</p>
              </label>
              <br />
              <label className='w-100'>
                <span>Confirmar E-mail:</span><br />
                <input className='w-100' {...register("emailConfirm", { required: "Reingrese su email", pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })} />
                <p className="text-danger">{errors.emailConfirm?.message}</p>
              </label>
              <br />
              <div className="modal-footer">
                <div className='mx-auto'>
                  {hasUser === false ?
                    <button type="submit" className="btn btn-success mx-2">Guardar</button>
                    :
                    <button type="button" className="btn btn-success mx-2" data-dismiss="modal">Continuar</button>
                  }
                  <button type="button" className="btn btn-danger mx-2" onClick={() => { deleteData() }}>Borrar Datos</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >

  )
}

export default UserForm