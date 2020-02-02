import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import _get from 'lodash/get';
import _map from 'lodash/map';
import { GetEmployees } from '../../helpers/Services';
import './PieChart.css';

const GetEmployeesParticipation = (employees, setSeries) => {
  let empParticipation = [];
  _map(employees, employee => {
    return empParticipation.push(employee.participation)
  })
  setSeries(empParticipation)
}

const GetEmployeesNames = (employees, setOptions) => {
  let empNames = [];
  _map(employees, employee => {
    const firstName = _get(employee, 'firstName', '')
    const lastName = _get(employee, 'lastName', '')
    return (empNames.push(`${firstName} ${lastName}`))
  })
  setOptions({ labels: empNames })
}

const RenderRows = (employees) => {
  return _map(employees, (employee,i) => {
    const firstName = _get(employee, 'firstName', '')
    const lastName = _get(employee, 'lastName', '')
    const empParticipation = _get(employee, 'participation', 0);
    return (
      <tr key={`employee-${i}`}>
        <td>{i+1}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{empParticipation}</td>
      </tr>
    )
  })
}

const PieChart = ({handleUpdate}) => {
  const [emp, setEmp] = useState([''])
  const [options, setOptions] = useState({})
  const [series, setSeries] = useState([])
  const employees = _get(emp, 'data.employees', []);
  useEffect(() => {
    GetEmployees(setEmp)
  }, [])

  useEffect(() => {
    if (employees.length) {
      GetEmployeesParticipation(employees, setSeries)
      GetEmployeesNames(employees, setOptions)
      RenderRows(employees)
    }
  }, [employees])

  return (
    <section className="container">
      <div className="tableContainer">
        <table cellPadding={0} cellSpacing={0}>
          <thead>
          <tr>
            <th></th>
            <th>First name</th>
            <th>Last name</th>
            <th>Participation</th>
          </tr>
          </thead>
          <tbody>
            {RenderRows(employees)}
          </tbody>
        </table>
      </div>
      <div className="donut">
        <Chart options={options} series={series} type="donut" className="ChartWidth" />
      </div>
    </section>
  );
}

export default PieChart;