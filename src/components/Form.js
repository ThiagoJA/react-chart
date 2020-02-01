import React from 'react';
import { useForm } from 'react-hook-form';
import classnames from 'classnames';
import { PostEmployees } from '../helpers/Services';
import './Form.css';

const Form = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    PostEmployees(data)
  };
  const firstInputClasses = classnames('inputClass', {
    inputError:errors.firstName
  })
  const secondInputClasses = classnames('inputClass', {
    inputError:errors.lastName
  })
  const thirdInputClasses = classnames('inputClass', {
    inputError:errors.participation
  })
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputBox">
          <input className={firstInputClasses} type="text" name="firstName" ref={register({ required: true })} placeholder="First name"/>
          {errors.firstName && <span className="inputMsgError">First name is required.</span>}
        </div>
        <div className="inputBox">
          <input className={secondInputClasses} type="text" name="lastName" ref={register({ required: true })} placeholder="Last name"/>
          {errors.lastName && <span className="inputMsgError">Last name is required.</span>}
        </div>
        <div className="inputBox">
          <input className={thirdInputClasses} type="number" name="participation" ref={register({ required: true })}placeholder="Participation"/>
          {errors.participation && <span className="inputMsgError">Participation is required.</span>}
        </div>
        <input className="inputButton" type="submit" value="SEND"/>
      </form>
    </>
  )
}

export default Form;