import { useState } from 'react'
import './App.css'

function App() {
  // Definición de estados para el usuario y la contraseña
  const [Usuario, setUsuario] = useState('')
  const [Clave, setClave] = useState('')

  // Función para capturar lo que el usuario escribe en el input de usuario
  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)
  }

  // Función para capturar lo que el usuario escribe en el input de contraseña
  function cambiarclave(evento) {
    setClave(evento.target.value)
  }

  // Función de validación al hacer clic en el botón "Ingresar"
  function ingresar() {
    const usuarioLimpio = Usuario.trim().toLowerCase()
    const claveLimpia = Clave.trim()

    // Verificamos si las credenciales coinciden con "admin"
    if (usuarioLimpio === 'admin' && claveLimpia === 'admin') {
      alert('Ingresaste')
    } else {
      alert('usuario o clave incorrecta')
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Iniciar Sesión</h2>
        <input 
          type="text" 
          name="usuario" 
          id="usuario" 
          placeholder="Usuario"
          value={Usuario} 
          onChange={cambiarUsuario} 
        />
        <input 
          type="password" 
          name="clave" 
          id="clave" 
          placeholder="Contraseña"
          value={Clave} 
          onChange={cambiarclave} 
        />
        <button onClick={ingresar}>Ingresar</button>
      </div>
    </div>
  )
}

export default App