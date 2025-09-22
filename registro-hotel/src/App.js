import React, { useState } from "react";
import "./App.css";


function App() {
  const initialForm = {
    identificacion: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    habitacion: "",
    rh: "",
    fechaIngreso: "",
    fechaSalida: "",
  };
  const [formData, setFormData] = useState(initialForm);
  const [formularios, setFormularios] = useState([]); // array de formularios guardados
  const [currentIndex, setCurrentIndex] = useState(-1); // -1 es el nuevo

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in formData) {
      if (formData[key].trim() === "") {
        alert("⚠️ Todos los campos son obligatorios");
        return;
      }
    }
    // Guardar el formulario
    let nuevosFormularios = [...formularios];
    if (currentIndex === -1) {
      nuevosFormularios.push(formData);
      setFormularios(nuevosFormularios);
      setCurrentIndex(nuevosFormularios.length - 1);
    } else {
      nuevosFormularios[currentIndex] = formData;
      setFormularios(nuevosFormularios);
    }
    alert("✅ Registro exitoso");
    // Limpiar para uno nuevo
    setFormData(initialForm);
    setCurrentIndex(-1);
  };

  const handleCancel = () => {
    alert("❌ Registro cancelado");
    setFormData(initialForm);
    setCurrentIndex(-1);
  };

  // Navegación con flechas
  const handlePrev = () => {
    if (formularios.length === 0) return;
    let idx = currentIndex === -1 ? formularios.length - 1 : currentIndex - 1;
    if (idx < 0) idx = 0;
    setFormData(formularios[idx]);
    setCurrentIndex(idx);
  };
  const handleNext = () => {
    if (formularios.length === 0) return;
    let idx = currentIndex === -1 ? 0 : currentIndex + 1;
    if (idx >= formularios.length) {
      setFormData(initialForm);
      setCurrentIndex(-1);
    } else {
      setFormData(formularios[idx]);
      setCurrentIndex(idx);
    }
  };

  return (
    <div className="container">
      <h2>REGISTRO HOTEL DEL BOSQUE</h2>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <label>Identificación:</label>
          <input
            type="text"
            name="identificacion"
            value={formData.identificacion}
            onChange={handleChange}
          />
        </div>
        <div className="field-group">
          <label>Nombres:</label>
          <input
            type="text"
            name="nombres"
            value={formData.nombres}
            onChange={handleChange}
          />
        </div>
        <div className="field-group">
          <label>Apellidos:</label>
          <input
            type="text"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
          />
        </div>
        <div className="field-group">
          <label>Teléfono:</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>
        <div className="field-group">
          <label>Habitación:</label>
          <input
            type="text"
            name="habitacion"
            value={formData.habitacion}
            onChange={handleChange}
          />
        </div>
        <div className="field-group">
          <label>RH:</label>
          <select name="rh" value={formData.rh} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
        <div className="field-group">
          <label>Fecha Ingreso:</label>
          <input
            type="date"
            name="fechaIngreso"
            value={formData.fechaIngreso}
            onChange={handleChange}
          />
        </div>
        <div className="field-group">
          <label>Fecha Salida:</label>
          <input
            type="date"
            name="fechaSalida"
            value={formData.fechaSalida}
            onChange={handleChange}
          />
        </div>
        <div className="navigation">
          <button type="button" onClick={handlePrev}>⬅</button>
          <button type="button" onClick={handleNext}>➡</button>
        </div>
        <div className="buttons">
          <button type="submit" className="btn registrar">
            Registrar
          </button>
          <button
            type="button"
            className="btn cancelar"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
