import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setSeries } from '../redux/fibonacciSlice';
import { useClock } from '../context/ClockContext';
import { Button, CircularProgress, Typography, Card, CardContent, TextField } from '@mui/material';

const FibonacciGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(''); // Campo de correo electrónico
  const [subject, setSubject] = useState('Prueba técnica - Pepito Pérez'); // Asunto del correo
  const dispatch = useDispatch();
  const series = useSelector((state) => state.fibonacci.series);
  const time = useClock(); // Reloj actual

  const handleGenerateFibonacci = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/api/fibonacci', {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds(),
      });

      dispatch(setSeries(response.data.series));
    } catch (err) {
      console.error('Error al obtener la serie Fibonacci:', err);
      setError('No se pudo generar la serie Fibonacci.');
    } finally {
      setLoading(false);
    }
  };

  const handleSendEmail = async () => {
    setSendingEmail(true);
    setError(null);

    // Verificamos que el correo y el asunto no estén vacíos
    if (!email || !subject) {
      setError('Por favor, ingrese un correo electrónico y un asunto.');
      setSendingEmail(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/fibonacci/send-email', {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds(),
        series: series,
        email: email,      // Enviamos el correo electrónico
        subject: subject,  // Enviamos el asunto
      });

      alert('Correo enviado correctamente');
    } catch (err) {
      console.error('Error al enviar el correo:', err);
      setError('No se pudo enviar el correo.');
    } finally {
      setSendingEmail(false);
    }
  };

  return (
    <div className="fibonacci-generator" style={{ maxWidth: '500px', margin: 'auto' }}>
      {/* Reloj */}
      <Card style={{ marginBottom: '20px', padding: '20px', textAlign: 'center' }}>
        <CardContent>
          <Typography variant="h5" color="textPrimary">
            Hora Actual: {time.toLocaleTimeString()}
          </Typography>
        </CardContent>
      </Card>

      {/* Botón para generar la serie Fibonacci */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleGenerateFibonacci}
        disabled={loading}
        fullWidth
        style={{ marginBottom: '20px' }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Generar Serie Fibonacci'}
      </Button>

      {/* Mostrar error */}
      {error && (
        <Typography variant="body2" color="error" style={{ textAlign: 'center', marginBottom: '20px' }}>
          {error}
        </Typography>
      )}

      {/* Mostrar la serie Fibonacci */}
      {series.length > 0 && (
        <Card style={{ padding: '20px', textAlign: 'center' }}>
          <CardContent>
            <Typography variant="h6" color="textPrimary">
              Serie Fibonacci Generada:
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {series.join(', ')}
            </Typography>
          </CardContent>
        </Card>
      )}

      {/* Campos de correo electrónico y asunto */}
      {series.length > 0 && (
        <>
          <TextField
            label="Correo Electrónico"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: '20px' }}
          />
          <TextField
            label="Asunto"
            variant="outlined"
            fullWidth
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{ marginBottom: '20px' }}
          />

          {/* Botón para enviar correo */}
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleSendEmail}
            disabled={sendingEmail}
            fullWidth
          >
            {sendingEmail ? <CircularProgress size={24} color="inherit" /> : 'Enviar por Correo'}
          </Button>
        </>
      )}
    </div>
  );
};

export default FibonacciGenerator;
