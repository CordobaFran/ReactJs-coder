import React, { useContext } from 'react'
import { User } from "../../Context/UserContext"
import { useForm } from 'react-hook-form';

const UserForm = () => {

  const { addUser, userData, setUserData } = useContext(User)

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    addUser([{ name: data.name, phone: data.phone, email: data.email }])
    console.log(userData)
  };

  return (
    <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">Completa tus datos</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <label className='w-100'>
                <span>Nombre:</span><br />
                <input className='w-100' {...register("name", { required: "Ingrese su nombre" })} />
                <p className="text-danger">{errors.name?.message}</p>
              </label>
              <br />
              <label className='w-100'>
                <span>Telefono:</span><br />
                <input className='w-100'{...register("phone", { required: "Ingrese su telefono" })} />
                <p className="text-danger">{errors.phone?.message}</p>
              </label>
              <br />
              <label className='w-100'>
                <span>E-mail:</span><br />
                <input className='w-100' {...register("email", { required: "Ingrese su email" })} />
                <p className="text-danger">{errors.email?.message}</p>
              </label>
              <br />
              <label className='w-100'>
                <span>Confirmar E-mail:</span><br />
                <input className='w-100' {...register("emailConfirm", { required: "Reingrese su email", pattern: "/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g" })} />
                <p className="text-danger">{errors.emailConfirm?.message}</p>
              </label>
              <br />
              <div className="modal-footer">
                <div className='mx-auto'>
                  {userData.length === 0 ?
                    <button type="submit" className="btn btn-success mx-2">Guardar</button>
                    :
                    <button type="button" className="btn btn-success mx-2" data-dismiss="modal">Continuar</button>
                  }
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