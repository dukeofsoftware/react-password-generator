import React, { Fragment, useState } from "react";
import { PasswordService } from "../services/PasswordService";

const PasswordGenerator = () => {
  let [state, setState] = useState({
    generatedPassword: "",
    passwordLength: 20,
    symbol: false,
    number: false,
    lower: false,
    upper: false,
  });

  let updateInput = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  let updateCheck = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  let submit = (event) => {
    event.preventDefault();
     let passwordObj = PasswordService.getPasswordObj(state);
    let thePassword = PasswordService.generatePassword(passwordObj,state.passwordLength)
    setState({
        ...state,
        generatedPassword:thePassword 
    })
    console.log(state);
  };
  return (
    <Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card shadow-lg">
              <div className="card-header bg-warning p-3">
                <p className="h4">PasswordGenerator</p>
              </div>
              <div className="card-body bg-warning">
                <form onSubmit={submit}>
{/*                   generated password
 */}                  <div className="mb-2">
                    <div className="input-group">
                      <span className="input-group-text">Password</span>
                      <input
                        type="text"
                        placeholder="Generated Password"
                        name="generatedPassword"
                        value={state.generatedPassword}
                        onChange={updateInput}
                        className="form-control"
                      />
                      <span className="input-group-text">
                        <i className="fa fa-clipboard"></i>
                      </span>
                    </div>
                  </div>
{/*                   //Password Length
 */}                  <div className="mb-2">
                    <div className="input-group">
                      <input
                        required={true}
                        value={state.passwordLength}
                        name="passwordLength"
                        onChange={updateInput}
                        type="number"
                        placeholder="Password Length"
                        className="form-control"
                      />
                      <span className="input-group-text">Password Length</span>
                    </div>
                  </div>
{/*                   //symbols
 */}                  <div className="mb-2">
                    <div className="input-group">
                      <span className="input-group-text  bg-white">
                        <input
                          name="symbol"
                          onChange={updateCheck}
                          type="checkbox"
                          className="form-check-input"
                        />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        disabled={true}
                        placeholder="Symbols"
                      />
                    </div>
                  </div>
{/*                   //numbers
 */}                  <div className="mb-2">
                    <div className="input-group">
                      <span className="input-group-text  bg-white">
                        <input
                          type="checkbox"
                          name="number"
                          className="form-check-input"
                          onChange={updateCheck}
                        />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        disabled={true}
                        placeholder="Numbers"
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="input-group">
                      <span className="input-group-text  bg-white">
                        <input
                          onChange={updateCheck}
                          name="lower"
                          type="checkbox"
                          className="form-check-input"
                        />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        disabled={true}
                        placeholder="Lowercase Letters"
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="input-group">
                      <span className="input-group-text  bg-white">
                        <input
                          onChange={updateCheck}
                          name="upper"
                          type="checkbox"
                          className="form-check-input"
                        />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        disabled={true}
                        placeholder="Uppercase Letters"
                      />
                    </div>
                  </div>
                  <div className="my-2">
                    <input
                      type="submit"
                      value="Generate"
                      className=" btn btn-outline-dark"
                    ></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PasswordGenerator;
